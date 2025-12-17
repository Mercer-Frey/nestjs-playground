import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from '@root/task/task.service';
import { CreateTaskReqDto } from '@root/task/dto/create-task.req.dto';
import { UpdateTaskDto } from '@root/task/dto/update-task.dto';
import { PatchTaskDto } from '@root/task/dto/patch-task.dto';
import { StringToLowerCasePipe } from '@root/common/pipes/string-to-lower-case.pipe';
import { AuthGuard } from '@root/common/guards/auth.guard';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserAgent } from '@root/common/decorators/user-agent.decorator';
import { CreateTaskResDto } from '@root/task/dto/create-task.res.dto';

@ApiBearerAuth('access-token')
@ApiTags('Tasks')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @ApiOperation({ summary: 'find all task', description: 'Get all task' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Get all task' })
  @ApiHeader({ name: 'X-Auth-Token', description: 'X-Auth-Token' })
  @ApiQuery({
    name: 'year',
    description: 'Year',
    required: false,
    type: 'number',
  })
  @Get('all')
  findAll() {
    return this.taskService.findAll();
  }

  @ApiNotFoundResponse({
    description: 'Not Found task',
    example: {
      status: 404,
      message: 'Not Found',
      timestamp: '2025-02-18',
      path: '/task:id',
    },
  })
  @ApiOkResponse({
    description: 'Successfully Found task',
    type: CreateTaskResDto,
  })
  @ApiParam({ name: 'id', type: 'string', description: 'Task ID' })
  @Get(':id')
  findOne(id: string) {
    return this.taskService.findById(Number(id));
  }

  @ApiOperation({ summary: 'create task', description: 'Create task' })
  // @ApiBody({
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       title: { type: 'string', title: 'Title', example: 'Task Title' },
  //       description: {
  //         type: 'string',
  //         title: 'Description',
  //         example: 'Task Description',
  //       },
  //       priority: { type: 'number', title: 'Priority', example: 2 },
  //       tags: {
  //         type: 'array',
  //         items: {
  //           type: 'string',
  //           enum: Object.values(ETaskTag),
  //         },
  //         title: 'Tag',
  //         example: [ETaskTag.HOME],
  //       },
  //     },
  //   },
  // })
  @Post()
  create(
    @Body('title', StringToLowerCasePipe) title: string,
    @Body() dto: CreateTaskReqDto,
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

  @UseGuards(AuthGuard)
  @Get('me/me')
  profile(@UserAgent() userAgent: string) {
    return {
      id: 100,
      userAgent,
    };
  }
}
