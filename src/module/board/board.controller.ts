import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { BoardService } from './board.service';
import { ApiOperation } from '@nestjs/swagger';
import { BoardCreateRequestDto } from './dto';
import { JwtAuthGuard } from '../../common';
import { AuthenticatedRequest } from '../../type';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @ApiOperation({ summary: '게시글 리스트' })
  // @UseGuards(JwtAuthGuard)
  @Get('board-list')
  async boardList(@Req() req: AuthenticatedRequest) {
    try {
      return this.boardService.boardList();
    } catch (e) {
      return e;
    }
  }

  @ApiOperation({ summary: '게시글 작성' })
  @UseGuards(JwtAuthGuard)
  @Post('board-create')
  async boardCreate(@Req() req: AuthenticatedRequest, @Body() body: BoardCreateRequestDto) {
    try {
      return this.boardService.boardCreate(req, body);
    } catch (e) {
      return e;
    }
  }
}
