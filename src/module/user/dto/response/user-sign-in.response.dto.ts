import { ResponseDto } from '../../../../common/response';
import { ResponseCodeEnum, ResponseMessageEnum } from '../../../../common/enum';
import { BadRequestException } from '@nestjs/common';

export class UserSignInResponseDto extends ResponseDto {
  constructor(
    code: ResponseCodeEnum,
    message: ResponseMessageEnum,
    data: unknown,
  ) {
    super(code, message, data);
  }

  static Success(data: unknown) {
    return new UserSignInResponseDto(
      ResponseCodeEnum.SUCCESS,
      ResponseMessageEnum.SUCCESS,
      data,
    );
  }

  static SignInFail(data: string) {
    throw new BadRequestException(
      new ResponseDto(
        ResponseCodeEnum.SIGN_IN_FAIL,
        ResponseMessageEnum.SIGN_IN_FAIL,
        data,
      ),
    );
  }
}
