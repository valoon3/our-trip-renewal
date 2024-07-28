import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT;

  app.setGlobalPrefix("/api");
  app.enableCors();

  await app.listen(port);
}
bootstrap();
