import { SetMetadata } from '@nestjs/common';
import { UserRoleQl } from '@root/generated/prisma/client';

export const ROLES_KEY = 'roles';
export const RolesQl = (...roles: UserRoleQl[]) =>
  SetMetadata(ROLES_KEY, roles);
