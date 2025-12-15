import { Module } from '@nestjs/common';
import { TaskModule } from '@root/task/task.module';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [TaskModule, MovieModule],
})
export class AppModule {}
