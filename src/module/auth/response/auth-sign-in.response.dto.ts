import { BadRequestException } from '@nestjs/common';
import { ResponseDto } from '~/common/response';
import { ResponseResultEnum } from '~/common/enum';

export class AuthSignInResponseDto extends ResponseDto {
  constructor(code: ResponseResultEnum, message: string, data?: unknown) {
    super(code, message, data);
  }

  static Success(message: string, data?: unknown) {
    return new AuthSignInResponseDto(ResponseResultEnum.SUCCESS, message, data);
  }

  static SignInFail(message: string) {
    return new BadRequestException(new AuthSignInResponseDto(ResponseResultEnum.FAIL, message));
  }
}
