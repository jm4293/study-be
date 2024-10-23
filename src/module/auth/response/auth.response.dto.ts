import { ResponseDto } from '~/common/response';
import { ResponseResultEnum } from '~/type/enum/response';

export class AuthResponseDto extends ResponseDto {
  constructor(code: ResponseResultEnum, message: string, data?: unknown) {
    super(code, message, data);
  }

  static Success(message: string, data?: unknown) {
    return new AuthResponseDto(ResponseResultEnum.SUCCESS, message, data);
  }

  static Fail(message: string) {
    return new AuthResponseDto(ResponseResultEnum.FAIL, message);
  }
}
