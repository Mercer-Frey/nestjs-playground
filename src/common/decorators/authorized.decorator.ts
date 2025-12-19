import { createParamDecorator, type ExecutionContext } from '@nestjs/common';
import { User } from '@root/generated/prisma/client';
import { RequestWithUserPrisma } from '@root/common/interfaces';

export const Authorized = createParamDecorator(
  (data: keyof User | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<RequestWithUserPrisma>();
    const user = request.user;

    return data ? user[data] : user;
  },
);
