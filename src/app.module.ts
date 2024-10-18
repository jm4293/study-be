import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configModuleConfig, typeormPostgresConfig } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './module';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleConfig),
    TypeOrmModule.forRootAsync(typeormPostgresConfig),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
