import { ConfigService } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { isDev } from '@root/common/utils/is-dev.util';
import type { Request, Response } from 'express';
import { GqlContext } from '@root/common/interfaces/gql-context.interface';

export async function getGraphQLConfig(
  configService: ConfigService,
): Promise<ApolloDriverConfig> {
  return Promise.resolve({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
    sortSchema: true,
    playground: isDev(configService),
    context: ({ req, res }: { req: Request; res: Response }): GqlContext => ({
      req,
      res,
    }),
  });
}
