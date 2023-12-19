import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/modules/app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: false,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('venda API')
    .setDescription('Descrição dos endpoints da API')
    .setVersion('1.0')
    .addTag('Venda')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(Number(process.env.BACKEND_PORT), () => {
    console.log(`🚀 Server running on port ${process.env.BACKEND_PORT}`);
  });
}
bootstrap();
