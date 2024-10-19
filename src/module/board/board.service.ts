import { Injectable } from '@nestjs/common';
import { BoardRepository } from '../../database';
import { BoardCreateRequestDto, BoardCreateResponseDto } from './dto';
import { AuthenticatedRequest } from '../../type';

@Injectable()
export class BoardService {
  constructor(private readonly boardRepository: BoardRepository) {}

  async boardList() {
    const result = await this.boardRepository.findAll();

    return BoardCreateResponseDto.Success(result);
  }

  async boardCreate(req: AuthenticatedRequest, body: BoardCreateRequestDto): Promise<BoardCreateResponseDto> {
    const { userId } = req.user;
    const { title, content } = body;

    if (!userId) {
      throw BoardCreateResponseDto.BoardCreateFail('로그인이 필요합니다.');
    }

    if (!title) {
      throw BoardCreateResponseDto.BoardCreateFail('제목을 입력해주세요.');
    }

    if (!content) {
      throw BoardCreateResponseDto.BoardCreateFail('내용을 입력해주세요.');
    }

    const result = await this.boardRepository.createBoard(userId, body);

    return BoardCreateResponseDto.Success(result);
  }
}
