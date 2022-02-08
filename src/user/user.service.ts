import { Payload } from './payload';
import { EditUserDto } from './dtos/edit-user.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { NotFoundException } from '@nestjs/common';
/* eslint-disable prettier/prettier */
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

export interface UserFindOne {
  id?: number;
  email?: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUserById(id: number, userEntity?: User) {
    const user = await this.userRepository
      .findOne(id)
      .then((u) =>
        !userEntity ? u : !!u && userEntity.id === u.id ? u : null,
      );
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async createUser(dto: CreateUserDto) {
    const isEmailInDB = await this.userRepository.findOne({ email: dto.email });
    if (isEmailInDB) throw new NotFoundException('Email already in use');
    const user = this.userRepository.create(dto);

    return await this.userRepository.save(user);
  }

  async updateUser(id: number, dto: EditUserDto) {
    const userToUpdate = await this.getUserById(id);
    const editUser = Object.assign(userToUpdate, dto);
    return await this.userRepository.save(editUser);
  }

  async deleteUser(id: number) {
    const userToDelete = await this.getUserById(id);
    return await this.userRepository.remove(userToDelete);
  }

  async findOne(data: UserFindOne) {
    return await this.userRepository
      .createQueryBuilder('user')
      .where(data)
      .addSelect('user.password')
      .getOne();
  }

  async findByPayload(payload: Payload) {
    const { email } = payload;
    return await this.userRepository.findOne({ email });
  }
}
