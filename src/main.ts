import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const env = app.get(ConfigService);
  const port = env.get('PORT') || 3000;

  console.log({
    PORT: env.get('PORT'),
    DB_HOST: env.get('DB_HOST'),
    DB_PORT: env.get('DB_PORT'),
    DB_NAME: env.get('DB_NAME'),
    DB_USERNAME: env.get('DB_USERNAME'),
    DB_PASSWORD: env.get('DB_PASSWORD'),
    DB_TYPE: env.get('DB_TYPE'),
  });

  app.enableCors();
  app.setGlobalPrefix('/api');

  // SWAGGER HANDLER
  const config = new DocumentBuilder()
    .setTitle('Neubook API')
    .setDescription('Neubook API')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  // END SWAGGER HANDLER

  await app.listen(port || 3000);
}
bootstrap();
