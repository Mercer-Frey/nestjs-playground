import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { UserQl, UserRoleQl } from '@root/generated/prisma/client';
import { BaseQlModel } from '@root/user-ql/models/base-ql.model';

registerEnumType(UserRoleQl, { name: 'UserRoleQl' });

@ObjectType({
  description: 'User role description',
})
export class UserQlModel extends BaseQlModel implements UserQl {
  @Field(() => String, {
    description: 'Id of the user id for this user',
  })
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => UserRoleQl)
  role: UserRoleQl;
}
