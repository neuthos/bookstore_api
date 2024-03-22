import { Module, ValidationError, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './modules/books/books.module';
import { TagsModule } from './modules/tags/tags.module';
import { TypeormService } from './modules/typeorm/typeorm.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import {
  AllExceptionFilter,
  NormalExceptionFilter,
  ValidationExceptionFilter,
} from './filter';
import { ResponseInterceptor } from './interceptor/response.interceptor';
import { ConfigModule } from '@nestjs/config';
import { AppConfig } from './app.config';

@Module({
  imports: [
    ConfigModule.forRoot(AppConfig.getInitConifg()),
    TypeOrmModule.forRootAsync({
      useClass: TypeormService,
    }),
    BooksModule,
    TagsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: AllExceptionFilter },
    { provide: APP_FILTER, useClass: NormalExceptionFilter },
    { provide: APP_FILTER, useClass: ValidationExceptionFilter },
    {
      provide: APP_PIPE,
      useFactory: () =>
        new ValidationPipe({
          exceptionFactory: (errors: ValidationError[]) => {
            return errors[0];
          },
        }),
    },
    { provide: APP_INTERCEPTOR, useClass: ResponseInterceptor },
  ],
})
export class AppModule {}
