import { ResponseCodeEnum, ResponseDto, ResponseMessageEnum } from '../../../../common';
import { BadRequestException } from '@nestjs/common';

export class AuthChangePasswordResponseDto extends ResponseDto {
  constructor(code: ResponseCodeEnum, message: ResponseMessageEnum, data: unknown) {
    super(code, message, data);
  }

  static Success(data: unknown) {
    return new AuthChangePasswordResponseDto(ResponseCodeEnum.SUCCESS, ResponseMessageEnum.SUCCESS, data);
  }

  static ChangePasswordFail(data: string) {
    return new BadRequestException(
      new AuthChangePasswordResponseDto(ResponseCodeEnum.FAIL, ResponseMessageEnum.FAIL, data),
    );
  }
}
