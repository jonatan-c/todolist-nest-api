import { User } from './../user/entities/user.entity';
/* eslint-disable prettier/prettier */
import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOne({ email });

    if (user && (await compare(pass, user.password))) {
      const { password, ...rest } = user;
      return rest;
    }

    return null;
  }

  login(user: User) {
    const { id, ...rest } = user;
    const payload = { sub: id };
    // payload conendra solo el id, podre utilizar el role?
    console.log(payload);

    return {
      user,
      accessToken: this.jwtService.sign(payload),
    };
  }

  verificateHeader(token: string) {
    return this.jwtService.verify(token);
  }
}
