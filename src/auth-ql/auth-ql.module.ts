import { Module } from '@nestjs/common';
import { AuthQlService } from './auth-ql.service';
import { AuthQlResolver } from './auth-ql.resolver';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getJwtConfig } from '@root/config/jwt.config';
import { JwtQlStrategy } from '@root/auth-ql/strategies/jwt-ql.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtConfig,
    }),
  ],
  providers: [AuthQlResolver, AuthQlService, JwtQlStrategy],
})
export class AuthQlModule {}
