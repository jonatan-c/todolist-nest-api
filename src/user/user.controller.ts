import { Auth } from 'src/auth/auth.decorator';
import { EditUserDto } from './dtos/edit-user.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';
/* eslint-disable prettier/prettier */
import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  async findAll() {
    return await this.userService.findAll();
  }

  @Get('/:id')
  async getUserById(@Param('id') id: number) {
    return await this.userService.getUserById(id);
  }

  @Post('/')
  async createUser(@Body() dto: CreateUserDto) {
    const data = await this.userService.createUser(dto);
    const { password, ...rest } = data;
    return { message: 'User created successfully', rest };
  }
  @Auth()
  @Put('/:id')
  async updateUser(@Param('id') id: number, @Body() dto: EditUserDto) {
    const data = await this.userService.updateUser(id, dto);
    return { message: 'User updated successfully' };
  }
  @Auth()
  @Delete('/:id')
  async deleteUser(@Param('id') id: number) {
    const data = await this.userService.deleteUser(id);
    return { message: 'User deleted successfully' };
  }
}
