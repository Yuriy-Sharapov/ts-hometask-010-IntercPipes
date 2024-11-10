import { Controller, Get, HttpException, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './exception.filters/http.exception.filter';

@UseFilters(HttpExceptionFilter)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    if (Math.random() < 0.75) {
      throw new HttpException('Какая-то ошибка', 401 )
    }    
    return this.appService.getHello();
  }
}
