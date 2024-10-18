import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../database';
import {
  AuthChangePasswordDto,
  AuthChangePasswordRequestDto,
  AuthSignInRequestDto,
  AuthSignInResponseDto,
  AuthSignUpRequestDto,
  AuthSignUpResponseDto,
} from './dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async signIn(req: AuthSignInRequestDto): Promise<AuthSignInResponseDto> {
    const user = await this.userRepository.findUserByEmail(req.email);

    if (!user) {
      AuthSignInResponseDto.SignInFail('일치하는 사용자가 없습니다.');
    }

    const isMatch = await bcrypt.compare(req.password, user.password);

    if (!isMatch) {
      AuthSignInResponseDto.SignInFail('비밀번호가 일치하지 않습니다.');
    }

    const userData = { email: user.email, name: user.name };

    return AuthSignInResponseDto.Success(userData);
  }

  async signUp(req: AuthSignUpRequestDto): Promise<AuthSignUpResponseDto> {
    const name = await this.userRepository.findUserByName(req.name);

    if (name) {
      return AuthSignUpResponseDto.SignUpFail('이미 존재하는 이름입니다.');
    }

    const email = await this.userRepository.findUserByEmail(req.email);

    if (email) {
      return AuthSignUpResponseDto.SignUpFail('이미 존재하는 이메일입니다.');
    }

    const { password } = req;

    const hashSalt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, hashSalt);

    const result = await this.userRepository.createUser({ ...req, password: hashPassword });

    const userData = { email: result.email, name: result.name };

    return AuthSignUpResponseDto.Success(userData);
  }

  async changePassword(req: AuthChangePasswordRequestDto): Promise<AuthChangePasswordDto> {
    const { email, password } = req;

    const user = await this.userRepository.findUserByEmail(email);

    if (!user) {
      return AuthChangePasswordDto.ChangePasswordFail('일치하는 사용자가 없습니다.');
    }

    const hashSalt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, hashSalt);

    await this.userRepository.changePassword({ email, password: hashPassword });

    return AuthChangePasswordDto.Success('비밀번호가 변경되었습니다.');
  }
}
