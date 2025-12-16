import { Module } from '@nestjs/common';
import { MovieController } from '@root/movie/movie.controller';
import { MovieService } from '@root/movie/movie.service';

@Module({
  controllers: [MovieController],
  providers: [MovieService],
  exports: [MovieService],
})
export class MovieModule {}
