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
import { ChatModule } from './chat/chat.module';
import { ArtistModule } from './artist/artist.module';
import { AppService } from '@root/app.service';
import { AppController } from '@root/app.controller';
import { SpotifyModule } from './spotify/spotify.module';
import { getSpotifyConfig } from '@root/config/spotify.config';

@Module({
  controllers: [AppController],
  providers: [AppService],
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
    ChatModule,
    ArtistModule,

    // SpotifyModule.forRoot({
    //   clientId: '9b5a60da4249496cad409f05b706e953',
    //   clientSecret: '76e171034ff54f2a9a8ef3bfbb17197f',
    // }),

    SpotifyModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getSpotifyConfig,
    }),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
