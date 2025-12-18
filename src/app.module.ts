import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TaskModule } from '@root/task/task.module';
import { MovieModule } from './movie/movie.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ReviewModule } from './review/review.module';
import { ActorModule } from './actor/actor.module';
import { PrismaModule } from './prisma/prisma.module';
import { LoggingMiddleware } from '@root/common/middlewares/logging.middleware';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import { getGraphQLConfig } from '@root/config/graphql.config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthQlModule } from './auth-ql/auth-ql.module';
import { UserQlModule } from './user-ql/user-ql.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: getTypeOrmConfig,
    //   inject: [ConfigService],
    // }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5433,
    //   username: 'root',
    //   password: '123456',
    //   database: 'nestjs_playground',
    //   autoLoadEntities: true,
    //   synchronize: true,
    // }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [ConfigModule],
      inject: [ConfigService],
      driver: ApolloDriver,
      useFactory: getGraphQLConfig,
    }),
    PrismaModule,

    TaskModule,
    MovieModule,
    ReviewModule,
    ActorModule,
    AuthModule,
    AuthQlModule,
    UserQlModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
