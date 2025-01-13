import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { I18nModule } from 'nestjs-i18n';
import * as path from 'path';
import { LanguageMiddleware } from './middleware/language.middeware';
import { AppController } from './app.controller';

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en', // 기본 언어 설정
      loaderOptions: {
        path: path.resolve(__dirname, '..', 'i18n'),  // 절대경로로 설정
        filePattern: '*.json',  // 파일 패턴
        watch: true,
      },
    }),
  ],
  controllers: [AppController],

})


//미들웨어 추가
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LanguageMiddleware).forRoutes('*');
  }
}

