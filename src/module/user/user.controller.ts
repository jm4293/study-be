import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserSignInRequestDto } from './dto/request';
import { UserSignInResponseDto } from './dto/response';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('sign-in')
  async signIn(
    @Body() req: UserSignInRequestDto,
  ): Promise<UserSignInResponseDto> {
    return await this.userService.signIn(req);
  }
}
