import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.setGlobalPrefix('/api');
  app.enableCors();

  // app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(process.env.PORT);
}
bootstrap();
