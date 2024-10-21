import { BadRequestException } from '@nestjs/common';
import { ResponseResultEnum } from '~/common/enum';
import { ResponseDto } from '~/common/response';

export class AuthSignUpResponseDto extends ResponseDto {
  constructor(code: ResponseResultEnum, message: string, data?: unknown) {
    super(code, message, data);
  }

  static Success(message: string, data?: unknown) {
    return new AuthSignUpResponseDto(ResponseResultEnum.SUCCESS, message, data);
  }

  static SignUpFail(message: string) {
    return new BadRequestException(new AuthSignUpResponseDto(ResponseResultEnum.FAIL, message));
  }
}
