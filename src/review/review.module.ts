import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewEntity } from '@root/review/entities/review.entity';
import { MovieEntity } from '@root/movie/entities/movie.entity';
import { ActorEntity } from '@root/actor/entities/actor.entity';
import { MovieModule } from '@root/movie/movie.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReviewEntity, MovieEntity, ActorEntity]),
    MovieModule,
  ],
  controllers: [ReviewController],
  providers: [ReviewService],
  exports: [ReviewService],
})
export class ReviewModule {}
