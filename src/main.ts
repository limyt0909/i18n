import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  // Correct way to set the Swagger UI route to '/api/docs'
  SwaggerModule.setup('api/docs', app, documentFactory);
await app.listen(3000);

  console.log(`Swagger UI is available at /api/docs`);
}

bootstrap();
