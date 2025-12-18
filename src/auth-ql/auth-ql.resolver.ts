import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthQlService } from './auth-ql.service';
import type { GqlContext } from '@root/common/interfaces/gql-context.interface';
import { AuthQlModel } from '@root/auth-ql/models/auth-ql.model';
import { RegisterRequestInput } from '@root/auth-ql/inputs/register.input';
import { LoginRequestInput } from '@root/auth-ql/inputs/login.input';

@Resolver()
export class AuthQlResolver {
  constructor(private readonly authQlService: AuthQlService) {}

  @Mutation(() => AuthQlModel)
  register(
    @Context() { res }: GqlContext,
    @Args('data') input: RegisterRequestInput,
  ): Promise<AuthQlModel> {
    return this.authQlService.register(res, input);
  }

  @Mutation(() => AuthQlModel)
  login(
    @Context() { res }: GqlContext,
    @Args('data') input: LoginRequestInput,
  ): Promise<AuthQlModel> {
    return this.authQlService.login(res, input);
  }

  @Mutation(() => AuthQlModel)
  refresh(@Context() { req, res }: GqlContext): Promise<AuthQlModel> {
    return this.authQlService.refresh(req, res);
  }

  @Mutation(() => Boolean)
  logout(@Context() { res }: GqlContext): boolean {
    return this.authQlService.logout(res);
  }
}
