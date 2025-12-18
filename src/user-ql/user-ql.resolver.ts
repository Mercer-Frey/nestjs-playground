import { Query, Resolver } from '@nestjs/graphql';
import { UserQlService } from './user-ql.service';
import { UserQlModel } from '@root/user-ql/models/user-ql.model';
import { AuthorizationQl } from '@root/auth-ql/decorators/authorization-ql.decorator';
import { AuthorizedQl } from '@root/auth-ql/decorators/authorized-ql.decorator';
import { type UserQl, UserRoleQl } from '@root/generated/prisma/client';

@Resolver()
export class UserQlResolver {
  constructor(private readonly userQlService: UserQlService) {}

  @AuthorizationQl(UserRoleQl.ADMIN)
  @Query(() => [UserQlModel], {
    name: 'getAllUsers',
    description: 'description getUsers',
  })
  async getUsers(): Promise<UserQlModel[]> {
    return this.userQlService.findAll();
  }

  @Query(() => UserQlModel)
  profile(@AuthorizedQl() user: UserQl): UserQlModel {
    return user;
  }
}
