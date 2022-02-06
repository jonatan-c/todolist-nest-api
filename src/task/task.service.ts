import { CreateTaskDTO } from './dtos/create-task.dto';
import { Task } from './entity/task.entity';
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
  ) {}

  async getAll(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async getTaskById(id: number): Promise<Task> {
    return await this.taskRepository.findOne(id);
  }

  async createTask(dto: CreateTaskDTO): Promise<Task> {
    return await this.taskRepository.save(dto);
  }

  async updateTask(id: number, dto: CreateTaskDTO): Promise<Task> {
    const taskSelect = await this.getTaskById(id);
    if (!taskSelect)
      throw new NotFoundException('Task whit id ' + id + ' not found');
    const editTask = Object.assign(taskSelect, dto);
    return await this.taskRepository.save(editTask);
  }

  async deleteTask(id: number): Promise<Task> {
    const taskSelect = await this.getTaskById(id);
    if (!taskSelect)
      throw new NotFoundException('Task whit id ' + id + ' not found');
    return await this.taskRepository.remove(taskSelect);
  }
}
