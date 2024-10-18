import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from '../../model';
import { Repository, UpdateResult } from 'typeorm';
import { AuthChangePasswordRequestDto, AuthSignUpRequestDto } from '../../../module';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserModel)
    private readonly repository: Repository<UserModel>,
  ) {}

  async findUserByName(name: string): Promise<UserModel> {
    return await this.repository.findOne({ where: { name } });
  }

  async findUserByEmail(email: string): Promise<UserModel> {
    return await this.repository.findOne({ where: { email } });
  }

  async createUser(dto: AuthSignUpRequestDto): Promise<UserModel> {
    return await this.repository.save(dto);
  }

  async changePassword(dto: AuthChangePasswordRequestDto): Promise<UpdateResult> {
    return await this.repository.update({ email: dto.email }, { password: dto.password });
  }
}
