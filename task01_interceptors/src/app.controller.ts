import { Controller, Get, Res, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggingInterceptor } from './app.logging.interceptor';

@UseInterceptors(LoggingInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    if (Math.random() < 0.75) {
      throw new Error('Какая-то ошибка')
    }
    return this.appService.getHello();
  }
}
