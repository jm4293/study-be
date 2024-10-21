import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from '~/database';
import { jwtModuleConfig } from '~/config';
import { BoardController } from '~/module/board/board.controller';
import { BoardService } from '~/module/board/board.service';

@Module({
  imports: [DatabaseModule, JwtModule.registerAsync(jwtModuleConfig)],
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}
