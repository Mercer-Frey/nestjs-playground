import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({
  description: 'BaseUserQlModel role description',
  isAbstract: true,
})
export class BaseQlModel {
  @Field(() => ID)
  id: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
