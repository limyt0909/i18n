import { Controller, Get } from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';

@Controller()
export class AppController {
  @Get('greeting')
  async getGreeting(@I18n() i18n: I18nContext): Promise<string> {
    return i18n.t('greeting'); // 번역 키를 사용
  }
}