import { EditTaskDTO } from './dtos/edit-task.dto';
import { CreateTaskDTO } from './dtos/create-task.dto';
/* eslint-disable prettier/prettier */
import { TaskService } from './task.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/auth.decorator';

@ApiTags('Tasks')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/')
  async getAll() {
    return await this.taskService.getAll();
  }

  @Get('/:id')
  async getTaskById(@Param('id') id: number) {
    return await this.taskService.getTaskById(id);
  }

  @Auth()
  @Post('/')
  async createTask(@Body() dto: CreateTaskDTO) {
    return await this.taskService.createTask(dto);
  }
  @Auth()
  @Put('/:id')
  async updateTask(@Param('id') id: number, @Body() dto: EditTaskDTO) {
    return await this.taskService.updateTask(id, dto);
  }
  @Auth()
  @Delete('/:id')
  async deleteTask(@Param('id') id: number) {
    return await this.taskService.deleteTask(id);
  }
}
