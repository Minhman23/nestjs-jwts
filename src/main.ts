import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  // Create an instance of the NestJS application
  const app = await NestFactory.create(AppModule);

  // Enable global request validation in NestJS application
  app.useGlobalPipes(new ValidationPipe());

  // Create configuration for Swagger documentation
  const config = new DocumentBuilder()
    .setTitle('MSGateway')
    .setDescription('')
    .setVersion('1.0')
    .build();

  // Generate the Swagger document based on the app and config
  const document = SwaggerModule.createDocument(app, config);

  // Set up the Swagger UI to display the generated documentation
  SwaggerModule.setup('', app, document);

  // Start the application and listen on port 3333
  await app.listen(3333);
}

bootstrap();
