import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthQlModel {
  @Field(() => String)
  accessToken: string;
}
