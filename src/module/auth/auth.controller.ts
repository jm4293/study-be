import { Body, Controller, Patch, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  AuthSignInRequestDto,
  AuthSignUpRequestDto,
  AuthSignInResponseDto,
  AuthSignUpResponseDto,
  AuthChangePasswordRequestDto,
  AuthChangePasswordDto,
} from './dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: AuthService) {}

  @ApiOperation({ summary: '로그인' })
  @Post('sign-in')
  async signIn(@Body() req: AuthSignInRequestDto): Promise<AuthSignInResponseDto> {
    return this.userService.signIn(req); // 예외 처리를 따로 하지 않고 그대로 위임
  }

  @ApiOperation({ summary: '회원가입' })
  @Post('sign-up')
  async signUp(@Body() req: AuthSignUpRequestDto): Promise<AuthSignUpResponseDto> {
    return this.userService.signUp(req);
  }

  @ApiOperation({ summary: '비밀번호 변경' })
  @Patch('change-password')
  async changePassword(@Body() req: AuthChangePasswordRequestDto): Promise<AuthChangePasswordDto> {
    return this.userService.changePassword(req);
  }
}
