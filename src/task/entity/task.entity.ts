/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tasks')
export class Task {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ type: 'varchar', length: 255 })
  title: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 255 })
  description: string;

  @ApiProperty()
  @Column({ type: 'boolean' })
  status: boolean;
}
