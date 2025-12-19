import { applyDecorators, UseGuards } from '@nestjs/common';
import { JwtGuard } from '@root/common/guards';

export function Authorization() {
  return applyDecorators(UseGuards(JwtGuard));
}
