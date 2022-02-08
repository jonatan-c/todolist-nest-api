import { AuthModule } from './../auth/auth.module';
/* eslint-disable prettier/prettier */
import { Task } from './entity/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), AuthModule],
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule {}
