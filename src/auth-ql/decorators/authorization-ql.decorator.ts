import { applyDecorators, UseGuards } from '@nestjs/common';
import { JwtQlGuard } from '@root/auth-ql/guards/jwt-ql.guard';
import { UserRoleQl } from '@root/generated/prisma/enums';
import { RolesQl } from '@root/auth-ql/decorators/roles-ql.decorator';
import { RolesQlGuard } from '@root/auth-ql/guards/roles-ql.guard';

export function AuthorizationQl(...roles: UserRoleQl[]) {
  if (roles.length > 0) {
    return applyDecorators(
      RolesQl(...roles),
      UseGuards(JwtQlGuard, RolesQlGuard),
    );
  }
  return applyDecorators(UseGuards(JwtQlGuard));
}
