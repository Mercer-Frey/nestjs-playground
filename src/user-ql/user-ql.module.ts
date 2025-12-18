import { Module } from '@nestjs/common';
import { UserQlService } from './user-ql.service';
import { UserQlResolver } from './user-ql.resolver';

@Module({
  providers: [UserQlResolver, UserQlService],
})
export class UserQlModule {}
