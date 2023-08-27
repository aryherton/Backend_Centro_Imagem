import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { NestApplicationOptions } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express'; // Importe o ExpressAdapter

async function bootstrap() {
  const appOptions: NestApplicationOptions = {
    cors: true,
  };
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(),
    appOptions,
  );

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // app.use((req, res, next) => {
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   res.setHeader(
  //     'Access-Control-Allow-Methods',
  //     'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   );
  //   res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  //   next();
  // });

  const config = new DocumentBuilder()
    .setTitle('Traffic control API Centro Imagem')
    .setDescription('Controle de solicitações de exames - UNIMED')
    .setVersion('1.0')
    .addTag('Traffic control')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3003);
}
bootstrap();
