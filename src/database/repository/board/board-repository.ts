import { Injectable } from '@nestjs/common';
import { BoardModel } from '../../model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardCreateRequestDto } from '~/module/board/request';

@Injectable()
export class BoardRepository {
  constructor(
    @InjectRepository(BoardModel)
    private readonly repository: Repository<BoardModel>,
  ) {}

  async findAll(): Promise<BoardModel[]> {
    return await this.repository.find();
  }

  async createBoard(userId: number, body: BoardCreateRequestDto): Promise<BoardModel> {
    const board = this.repository.create({ ...body, writer_id: userId });
    return await this.repository.save(board);
  }
}
