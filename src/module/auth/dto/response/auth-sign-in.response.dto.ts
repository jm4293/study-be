import { ResponseDto } from '../../../../common';
import { ResponseCodeEnum, ResponseMessageEnum } from '../../../../common';
import { BadRequestException } from '@nestjs/common';

export class AuthSignInResponseDto extends ResponseDto {
  constructor(code: ResponseCodeEnum, message: ResponseMessageEnum, data: unknown) {
    super(code, message, data);
  }

  static Success(data: unknown) {
    return new AuthSignInResponseDto(ResponseCodeEnum.SUCCESS, ResponseMessageEnum.SUCCESS, data);
  }

  static SignInFail(data: string) {
    return new BadRequestException(new AuthSignInResponseDto(ResponseCodeEnum.FAIL, ResponseMessageEnum.FAIL, data));
  }
}
