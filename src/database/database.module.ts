import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardModel, UserModel, BoardCommentModel } from './model';
import { BoardCommentRepository, BoardRepository, UserRepository } from './repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel, BoardModel, BoardCommentModel])],
  providers: [UserRepository, BoardRepository, BoardCommentRepository],
  exports: [UserRepository, BoardRepository, BoardCommentRepository],
})
export class DatabaseModule {}
