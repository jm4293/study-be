import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../database';
import {
  AuthChangePasswordRequestDto,
  AuthChangePasswordResponseDto,
  AuthSignInRequestDto,
  AuthSignInResponseDto,
  AuthSignUpRequestDto,
  AuthSignUpResponseDto,
} from './dto';
import { Response } from 'express';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(body: AuthSignInRequestDto, res: Response) {
    const { email, password } = body;

    const user = await this.userRepository.findUserByEmail(email);

    if (!user) {
      throw AuthSignInResponseDto.SignInFail('일치하는 사용자가 없습니다.');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw AuthSignInResponseDto.SignInFail('비밀번호가 일치하지 않습니다.');
    }

    const token = await this.generateToken({ email: user.email, name: user.name });

    res.cookie('auth_token', token, { httpOnly: true, maxAge: 1000 * 60 * 5 });

    return res.send(AuthSignInResponseDto.Success('로그인 성공'));
  }

  async signUp(body: AuthSignUpRequestDto) {
    const { name, email, password } = body;

    const isExistName = await this.userRepository.findUserByName(name);

    if (isExistName) {
      throw AuthSignUpResponseDto.SignUpFail('이미 존재하는 이름입니다.');
    }

    const isExistEmail = await this.userRepository.findUserByEmail(email);

    if (isExistEmail) {
      throw AuthSignUpResponseDto.SignUpFail('이미 존재하는 이메일입니다.');
    }

    const hashSalt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, hashSalt);

    const result = await this.userRepository.createUser({ ...body, password: hashPassword });

    const userData = { email: result.email, name: result.name };

    return AuthSignUpResponseDto.Success(userData);
  }

  async changePassword(body: AuthChangePasswordRequestDto): Promise<AuthChangePasswordResponseDto> {
    const { email, password } = body;

    const user = await this.userRepository.findUserByEmail(email);

    if (!user) {
      throw AuthChangePasswordResponseDto.ChangePasswordFail('일치하는 사용자가 없습니다.');
    }

    const hashSalt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, hashSalt);

    await this.userRepository.changePassword({ email, password: hashPassword });

    return AuthChangePasswordResponseDto.Success('비밀번호가 변경되었습니다.');
  }

  async generateToken(payload: { email: string; name: string }): Promise<string> {
    return this.jwtService.sign(payload);
  }
}
