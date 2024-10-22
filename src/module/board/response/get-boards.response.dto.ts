import { ResponseResultEnum } from '~/type/enum/response';
import { BadRequestException } from '@nestjs/common';
import { ResponseDto } from '~/common/response';

export class GetBoardsResponseDto extends ResponseDto {
  constructor(code: ResponseResultEnum, message: string, data?: unknown) {
    super(code, message, data);
  }

  static Success(message: string, data?: unknown) {
    return new GetBoardsResponseDto(ResponseResultEnum.SUCCESS, message, data);
  }

  static BoardGetFail(message: string) {
    return new BadRequestException(new GetBoardsResponseDto(ResponseResultEnum.FAIL, message));
  }
}
