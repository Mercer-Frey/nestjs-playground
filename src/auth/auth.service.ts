import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '@root/prisma/prisma.service';
import {
  RegisterRequestDto,
  RegisterResponseDto,
} from '@root/auth/dto/register.dto';
import { hash, verify } from 'argon2';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import {
  JwtPayload,
  JwtTokens,
  TOKEN,
} from '@root/auth/interfaces/jwt.interface';
import { LoginRequestDto, LoginResponseDto } from '@root/auth/dto/login.dto';
import type { Request, Response } from 'express';
import { isDev } from '@root/common/utils/is-dev.util';

@Injectable()
export class AuthService {
  private readonly COOKIE_DOMAIN: string;
  private readonly JWT_ACCESS_TOKEN_TTL: number;
  private readonly JWT_REFRESH_TOKEN_TTL: number;

  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {
    this.COOKIE_DOMAIN = this.configService.getOrThrow<string>('COOKIE_DOMAIN');
    this.JWT_ACCESS_TOKEN_TTL = this.configService.getOrThrow(
      'JWT_ACCESS_TOKEN_TTL',
    );
    this.JWT_REFRESH_TOKEN_TTL = this.configService.getOrThrow(
      'JWT_REFRESH_TOKEN_TTL',
    );
  }

  async register(
    res: Response,
    dto: RegisterRequestDto,
  ): Promise<RegisterResponseDto> {
    const { email, password, name } = dto;

    const existedUser = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (existedUser) {
      throw new ConflictException('Email already exists');
    }

    const user = await this.prismaService.user.create({
      data: {
        name,
        email,
        password: await hash(password),
      },
    });

    return this.auth(res, user.id);
  }

  async login(res: Response, dto: LoginRequestDto): Promise<LoginResponseDto> {
    const { email, password } = dto;

    const existedUser = await this.prismaService.user.findUnique({
      where: { email },
      select: {
        id: true,
        password: true,
      },
    });

    if (!existedUser) {
      throw new NotFoundException('User not found');
    }
    const isValidPassword = await verify(existedUser.password, password);
    if (!isValidPassword) {
      throw new NotFoundException('User not found');
    }

    return this.auth(res, existedUser.id);
  }

  logout(res: Response): void {
    res.clearCookie(TOKEN.REFRESH);
  }
  async refresh(req: Request, res: Response): Promise<{ accessToken: string }> {
    const refreshToken = (req.cookies as Record<string, string>)[TOKEN.REFRESH];

    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token');
    }

    const payload = await this.jwtService.verifyAsync<JwtPayload>(refreshToken);

    const user = await this.prismaService.user.findUnique({
      where: { id: payload.id },
      select: { id: true },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.auth(res, user.id);
  }
  async validate(id: string) {
    const user = await this.prismaService.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
  private generateTokens(id: string): JwtTokens {
    const payload: JwtPayload = { id };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: this.JWT_ACCESS_TOKEN_TTL,
    });

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: this.JWT_REFRESH_TOKEN_TTL,
    });

    return {
      accessToken,
      refreshToken,
    };
  }
  private setCookie(res: Response, token: string, expires: Date) {
    res.cookie(TOKEN.REFRESH, token, {
      httpOnly: true,
      secure: !isDev(this.configService),
      sameSite: 'lax',
      domain: this.COOKIE_DOMAIN,
      expires,
    });
  }
  private auth(res: Response, id: string): { accessToken: string } {
    const { refreshToken, accessToken } = this.generateTokens(id);
    this.setCookie(
      res,
      refreshToken,
      new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    );
    return { accessToken };
  }
}
