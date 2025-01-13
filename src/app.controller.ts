import { Controller, Get } from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';

@Controller()
export class AppController {
  @Get('test')
  async getGreeting(@I18n() i18n: I18nContext): Promise<string> {
    return await i18n.t('test.HELLO')
  }
}