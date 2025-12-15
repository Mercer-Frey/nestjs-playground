import { Module } from '@nestjs/common';
import { TaskController } from '@root/task/task.controller';
import { TaskService } from '@root/task/task.service';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
