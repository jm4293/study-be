import { ResponseCodeEnum, ResponseMessageEnum } from '../enum';
import { InternalServerErrorException } from '@nestjs/common';

export class ResponseDto {
  constructor(
    private readonly code: ResponseCodeEnum,
    private readonly message: ResponseMessageEnum,
    private readonly data?: unknown,
  ) {}

  success(data: unknown) {
    return new ResponseDto(
      ResponseCodeEnum.SUCCESS,
      ResponseMessageEnum.SUCCESS,
      data,
    );
  }

  databaseError() {
    throw new InternalServerErrorException(
      new ResponseDto(
        ResponseCodeEnum.DATABASE_ERROR,
        ResponseMessageEnum.DATABASE_ERROR,
      ),
    );
  }
}
