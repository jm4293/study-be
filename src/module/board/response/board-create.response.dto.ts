import { BadRequestException } from '@nestjs/common';
import { ResponseDto } from '~/common/response';
import { ResponseResultEnum } from '~/common/enum';

export class BoardCreateResponseDto extends ResponseDto {
  constructor(code: ResponseResultEnum, message: string, data?: unknown) {
    super(code, message, data);
  }

  static Success(message: string, data?: unknown) {
    return new BoardCreateResponseDto(ResponseResultEnum.SUCCESS, message, data);
  }

  static BoardCreateFail(message: string) {
    return new BadRequestException(new BoardCreateResponseDto(ResponseResultEnum.FAIL, message));
  }
}
