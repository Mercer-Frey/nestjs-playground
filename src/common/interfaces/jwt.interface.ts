import type { Request } from 'express';
import { User } from '@root/generated/prisma/client';

export interface JwtPayload {
  id: string;
}

export interface JwtAccessToken {
  accessToken: string;
}

export interface JwtRefreshToken {
  refreshToken: string;
}

export interface JwtTokens extends JwtAccessToken, JwtRefreshToken {}

export const TOKEN = {
  REFRESH: 'refreshToken',
  ACCESS: 'accessToken',
};

export interface RequestWithUserPrisma extends Request {
  user: User;
}

export interface RequestWithUserJwt extends Request {
  user: JwtPayload;
}
