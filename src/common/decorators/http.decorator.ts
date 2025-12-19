import { createParamDecorator, type ExecutionContext } from '@nestjs/common';
import type { Request } from 'express';
import { IS_DEV_ENV } from '@root/common/utils';

export const UserAgent = createParamDecorator((_, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest() as Request;

  return request.headers['user-agent'];
});
export const ClientIp = createParamDecorator((_, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<Request>();
  const ip = IS_DEV_ENV
    ? '185.199.108.153'
    : Array.isArray(
        request.headers['cf-connecting-ip']
          ? request.headers['cf-connecting-ip'][0]
          : (request.headers['cf-connecting-ip'] ??
              (typeof request.headers['x-forwarded-for'] === 'string'
                ? request.headers['x-forwarded-for'].split(',')[0]
                : Array.isArray(request.headers['x-forwarded-for'])
                  ? request.headers['x-forwarded-for'][0].split(',')[0]
                  : request.ip)),
      );
  return ip;
});
