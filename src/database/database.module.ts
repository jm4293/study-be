import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './model';
import { UserRepository } from './repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class DatabaseModule {}
