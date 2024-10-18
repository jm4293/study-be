import { ResponseCodeEnum, ResponseDto, ResponseMessageEnum } from '../../../../common';

export class AuthChangePasswordDto extends ResponseDto {
  constructor(code: ResponseCodeEnum, message: ResponseMessageEnum, data: unknown) {
    super(code, message, data);
  }

  static Success(data: unknown) {
    return new AuthChangePasswordDto(ResponseCodeEnum.SUCCESS, ResponseMessageEnum.SUCCESS, data);
  }

  static ChangePasswordFail(data: string) {
    return new AuthChangePasswordDto(ResponseCodeEnum.FAIL, ResponseMessageEnum.FAIL, data);
  }
}
