import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../database';
import { UserSignInRequestDto } from './dto/request';
import { UserSignInResponseDto } from './dto/response';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async signIn(req: UserSignInRequestDto): Promise<UserSignInResponseDto> {
    const user = await this.userRepository.findUserByEmail(req.email);

    if (!user) {
      return new UserSignInResponseDto.SignInFail(user.email);
    }

    const userData = { email: user.email, name: user.name };

    return UserSignInResponseDto.Success(userData);
  }
}
