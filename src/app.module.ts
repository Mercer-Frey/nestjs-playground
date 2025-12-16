import { Module } from '@nestjs/common';
import { TaskModule } from '@root/task/task.module';
import { MovieModule } from './movie/movie.module';
import { ConfigModule } from '@nestjs/config';
import { ReviewModule } from './review/review.module';
import { ActorModule } from './actor/actor.module';
import { PrismaModule } from './prisma/prisma.module';

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
    PrismaModule,

    TaskModule,
    MovieModule,
    ReviewModule,
    ActorModule,
  ],
})
export class AppModule {}
