import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerConfig } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  swaggerConfig(app);

  app.setGlobalPrefix('api');

  await app.listen(8080);
}
bootstrap();
