import { BadRequestException } from '@nestjs/common';
import { ResponseDto } from '~/common/response';
import { ResponseResultEnum } from '~/type/enum/response';

export class CreateBoardResponseDto extends ResponseDto {
  constructor(code: ResponseResultEnum, message: string, data?: unknown) {
    super(code, message, data);
  }

  static Success(message: string, data?: unknown) {
    return new CreateBoardResponseDto(ResponseResultEnum.SUCCESS, message, data);
  }

  static BoardCreateFail(message: string) {
    return new BadRequestException(new CreateBoardResponseDto(ResponseResultEnum.FAIL, message));
  }
}
