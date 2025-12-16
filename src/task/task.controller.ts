import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from '@root/task/task.service';
import { CreateTaskDto } from '@root/task/dto/create-task.dto';
import { UpdateTaskDto } from '@root/task/dto/update-task.dto';
import { PatchTaskDto } from '@root/task/dto/patch-task.dto';
import { StringToLowerCasePipe } from '@root/common/pipes/string-to-lower-case.pipe';
import { AuthGuard } from '@root/common/guards/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('all')
  findAll() {
    return this.taskService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findById(Number(id));
  }
  @Post()
  create(
    @Body('title', StringToLowerCasePipe) title: string,
    @Body() dto: CreateTaskDto,
  ) {
    dto.title = title;
    return this.taskService.create(dto);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    return this.taskService.update(Number(id), dto);
  }
  @Patch(':id')
  patchUpdate(@Param('id') id: string, @Body() dto: PatchTaskDto) {
    return this.taskService.patchUpdate(Number(id), dto);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.taskService.delete(Number(id));
  }

  @ApiBearerAuth('access-token')
  @UseGuards(AuthGuard)
  @Get('me/me')
  profile() {
    return {
      id: 100,
    };
  }
}
