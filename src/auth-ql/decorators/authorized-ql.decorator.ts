import { createParamDecorator, type ExecutionContext } from '@nestjs/common';
import { UserQl } from '@root/generated/prisma/client';
import { GqlExecutionContext } from '@nestjs/graphql';
import { GqlContext } from '@root/common/interfaces/gql-context.interface';

export const AuthorizedQl = createParamDecorator(
  (data: keyof UserQl | undefined, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext<GqlContext>().req;
    const user = request.user as UserQl;

    return data ? user[data] : user;
  },
);
