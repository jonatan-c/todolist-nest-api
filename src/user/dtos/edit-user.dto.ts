/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

import { IsOptional } from 'class-validator';

export class EditUserDto {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  @ApiProperty()
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  @ApiProperty()
  lastName: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @ApiProperty()
  password: string;
}
