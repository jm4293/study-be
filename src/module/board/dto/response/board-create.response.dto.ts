import { ResponseCodeEnum, ResponseDto, ResponseMessageEnum } from '../../../../common';
import { BadRequestException } from '@nestjs/common';

export class BoardCreateResponseDto extends ResponseDto {
  constructor(code: ResponseCodeEnum, message: ResponseMessageEnum, data: unknown) {
    super(code, message, data);
  }

  static Success(data: unknown) {
    return new BoardCreateResponseDto(ResponseCodeEnum.SUCCESS, ResponseMessageEnum.SUCCESS, data);
  }

  static BoardCreateFail(data: string) {
    return new BadRequestException(new BoardCreateResponseDto(ResponseCodeEnum.FAIL, ResponseMessageEnum.FAIL, data));
  }
}
