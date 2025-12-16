import { Module } from '@nestjs/common';
import { TaskController } from '@root/task/task.controller';
import { TaskService } from '@root/task/task.service';
import { AuthGuard } from '@root/common/guards/auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  controllers: [TaskController],
  providers: [
    TaskService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class TaskModule {}
