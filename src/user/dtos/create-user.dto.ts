/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
// import { EnumToString } from './../../common/helpers/enumToString';
// import { AppRoles } from './../../app.roles';
import {
  IsArray,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
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

  // @IsString()
  // @IsEnum(AppRoles, {
  //   each: true,
  //   message: `Invalid role `,
  // })
  // roles: string;
}
