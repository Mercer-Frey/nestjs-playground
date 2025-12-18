import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtPayload } from '@root/auth/interfaces/jwt.interface';
import { AuthQlService } from '@root/auth-ql/auth-ql.service';

@Injectable()
export class JwtQlStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authQlService: AuthQlService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.getOrThrow<string>('JWT_SECRET'),
      algorithms: ['HS256'],
    });
  }

  async validate(payload: JwtPayload) {
    return this.authQlService.validate(payload.id);
  }
}
