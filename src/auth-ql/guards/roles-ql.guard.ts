import {
  CanActivate,
  type ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRoleQl } from '@root/generated/prisma/enums';
import { GqlExecutionContext } from '@nestjs/graphql';
import { GqlContext } from '@root/common/interfaces/gql-context.interface';
import { UserQl } from '@root/generated/prisma/client';
import { ROLES_KEY } from '@root/auth-ql/decorators/roles-ql.decorator';

@Injectable()
export class RolesQlGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const rolesContext = this.reflector.getAllAndOverride<UserRoleQl[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!rolesContext) {
      return true;
    }

    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext<GqlContext>().req;
    const user = request.user as UserQl;

    if (!rolesContext.includes(user.role)) {
      throw new ForbiddenException('No role found.');
    }

    return true;
  }
}
