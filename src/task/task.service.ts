import { Injectable, NotFoundException } from '@nestjs/common';
import { Itask } from '@root/task/models/task.model';
import { CreateTaskReqDto } from '@root/task/dto/create-task.req.dto';
import { UpdateTaskDto } from '@root/task/dto/update-task.dto';
import { PatchTaskDto } from '@root/task/dto/patch-task.dto';

@Injectable()
export class TaskService {
  private tasks: Itask[] = [
    {
      id: 1,
      title: 'Task 1',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Task 2',
      isCompleted: true,
    },
  ];

  findAll() {
    return this.tasks;
  }

  findById(id: number) {
    const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }

    return task;
  }

  create(dto: CreateTaskReqDto) {
    const id = this.tasks.length + 1;
    const { title, description, priority, tags } = dto;
    const task = {
      id,
      title,
      description,
      priority,
      tags,
      isCompleted: false,
    };
    this.tasks.push(task);

    return this.tasks;
  }

  update(id: number, dto: UpdateTaskDto) {
    let task = this.findById(id);

    task = { ...task, ...dto };
    this.tasks = [...this.tasks.filter((t) => t.id !== id), task];

    return task;
  }

  patchUpdate(id: number, dto: PatchTaskDto) {
    const task = this.findById(id);

    Object.assign(task, dto);

    return task;
  }

  delete(id: number) {
    const task = this.findById(id);

    this.tasks = this.tasks.filter((t) => t.id !== task.id);

    return task;
  }
}
