import { applyDecorators, UseGuards } from '@nestjs/common';
import { JwtGuard } from '@root/auth/guards/jwt.guard';

export function Authorization() {
  return applyDecorators(UseGuards(JwtGuard));
}
