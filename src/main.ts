/* eslint-disable prettier/prettier */
import { initSwagger } from './app.swagger';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();
  const PORT = process.env.PORT || 3000;

  initSwagger(app);

  // configuracion de los dtos (validadcion)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  await app.listen(3000);
  logger.log(`Server is running on http://localhost:${PORT}`);
  logger.log(`Documentation is available on http://localhost:${PORT}/api-docs`);
}
bootstrap();
