import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { DatabaseModule } from '../../database';
import { JwtModule } from '@nestjs/jwt';
import { jwtModuleConfig } from '../../config';

@Module({
  imports: [DatabaseModule, JwtModule.registerAsync(jwtModuleConfig)],
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}
