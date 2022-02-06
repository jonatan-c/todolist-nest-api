/* eslint-disable prettier/prettier */

import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class CreateTaskDTO {
  @IsString()
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty()
  description: string;

  @IsBoolean()
  @ApiProperty()
  status: boolean;
}
