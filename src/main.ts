import { NestFactory } from '@nestjs/core';
import { serve, setup } from 'swagger-ui-express';
import { AppModule } from './app.module';
import { swaggerDocument } from './docs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/api-docs', serve, setup(swaggerDocument));
  await app.listen(3000);
}
bootstrap();
