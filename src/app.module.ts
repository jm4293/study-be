import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configModuleConfig, typeormPostgresConfig } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './module';
import { BoardModule } from './module';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleConfig),
    TypeOrmModule.forRootAsync(typeormPostgresConfig),
    AuthModule,
    BoardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
