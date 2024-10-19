import { Body, Controller, Patch, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSignInRequestDto, AuthSignUpRequestDto, AuthChangePasswordRequestDto } from './dto';
import { ApiOperation } from '@nestjs/swagger';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: AuthService) {}

  @ApiOperation({ summary: '로그인' })
  @Post('sign-in')
  async signIn(@Body() body: AuthSignInRequestDto, @Res() res: Response) {
    try {
      return this.userService.signIn(body, res);
    } catch (e) {
      return e;
    }
  }

  @ApiOperation({ summary: '회원가입' })
  @Post('sign-up')
  async signUp(@Body() body: AuthSignUpRequestDto) {
    try {
      return this.userService.signUp(body);
    } catch (e) {
      return e;
    }
  }

  @ApiOperation({ summary: '비밀번호 변경' })
  @Patch('change-password')
  async changePassword(@Body() body: AuthChangePasswordRequestDto) {
    try {
      return this.userService.changePassword(body);
    } catch (e) {
      return e;
    }
  }
}
