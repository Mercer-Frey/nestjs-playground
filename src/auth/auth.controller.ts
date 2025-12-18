import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiConflictResponse,
  ApiCookieAuth,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  RegisterRequestDto,
  RegisterResponseDto,
} from '@root/auth/dto/register.dto';
import { LoginRequestDto, LoginResponseDto } from '@root/auth/dto/login.dto';
import type { Request, Response } from 'express';
import { type JwtPayload, TOKEN } from '@root/auth/interfaces/jwt.interface';
import { Authorization } from '@root/auth/decorators/authorization.decorator';
import { Authorized } from '@root/auth/decorators/authorized.decorator';
import type { User } from '../../generated/prisma/client';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Register new user',
    description: 'Creates a new user and issues access & refresh tokens',
  })
  @ApiBody({ type: RegisterRequestDto })
  @ApiCreatedResponse({
    description: 'User successfully registered',
    type: RegisterResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Validation error',
  })
  @ApiConflictResponse({
    description: 'User with this email already exists',
  })
  async register(
    @Res({ passthrough: true }) res: Response,
    @Body() dto: RegisterRequestDto,
  ): Promise<RegisterResponseDto> {
    return this.authService.register(res, dto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Login user',
    description: 'Authenticates user and issues access & refresh tokens',
  })
  @ApiBody({ type: LoginRequestDto })
  @ApiOkResponse({
    description: 'User successfully logged in',
    type: LoginResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Validation error',
  })
  @ApiUnauthorizedResponse({
    description: 'Invalid email or password',
  })
  async login(
    @Res({ passthrough: true }) res: Response,
    @Body() dto: LoginRequestDto,
  ): Promise<LoginResponseDto> {
    return this.authService.login(res, dto);
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Refresh access token',
    description: 'Issues a new access token using refresh token from cookies',
  })
  @ApiOkResponse({
    description: 'Tokens successfully refreshed',
    type: LoginResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Refresh token is missing or invalid',
  })
  @ApiCookieAuth(TOKEN.REFRESH)
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ): Promise<{ accessToken: string }> {
    return this.authService.refresh(req, res);
  }

  @Post('logout')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Logout user',
    description: 'Revokes refresh token and clears authentication cookies',
  })
  @ApiNoContentResponse({
    description: 'User successfully logged out',
  })
  @ApiCookieAuth(TOKEN.REFRESH)
  @ApiUnauthorizedResponse({
    description: 'Refresh token is missing or invalid',
  })
  logout(@Res({ passthrough: true }) res: Response): void {
    return this.authService.logout(res);
  }

  @Authorization()
  @Get('profile')
  @ApiOperation({
    summary: 'Get current user profile',
    description: 'Returns JWT payload of authenticated user',
  })
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Authenticated user payload',
  })
  @ApiUnauthorizedResponse({
    description: 'User is not authenticated',
  })
  profile(@Authorized() user: User): JwtPayload {
    return user;
  }
}
