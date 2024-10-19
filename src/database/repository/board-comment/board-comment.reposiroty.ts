import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardCommentModel } from '../../model/board-comment';
import { Repository } from 'typeorm';

@Injectable()
export class BoardCommentRepository {
  constructor(
    @InjectRepository(BoardCommentModel)
    private readonly repository: Repository<BoardCommentModel>,
  ) {}
}
