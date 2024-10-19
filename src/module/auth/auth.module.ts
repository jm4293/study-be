import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DatabaseModule } from '../../database';
import { JwtModule } from '@nestjs/jwt';
import { jwtModuleConfig } from '../../config';

@Module({
  imports: [DatabaseModule, JwtModule.registerAsync(jwtModuleConfig)],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
