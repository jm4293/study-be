import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardCommentModel } from '~/database/model';

@Injectable()
export class BoardCommentRepository {
  constructor(
    @InjectRepository(BoardCommentModel)
    private readonly repository: Repository<BoardCommentModel>,
  ) {}
}
