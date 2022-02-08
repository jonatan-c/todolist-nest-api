import { User } from './user.decorator';
import { LoginDto } from './dtos/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User as UserEntity } from 'src/user/entities/user.entity';
import {
  Controller,
  Post,
  Request,
  UseGuards,
  Get,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Auth } from './auth.decorator';

@ApiTags('Auth routes')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginDTO: LoginDto, @User() user: UserEntity) {
    const data = this.authService.login(user);
    return {
      message: 'User logged in successfully',
      data,
    };
  }

  @Auth()
  @Get('profile')
  getProfile(@User() user: UserEntity) {
    return {
      message: 'User profile',
      user,
    };
  }
}
