import { Body, Controller, Get, Param, Post, Query, UsePipes } from '@nestjs/common';
import { AppAgeValidationPipe } from './validation.pipes/age.validation.pipe';
import { PhoneValidationPipe } from './validation.pipes/phone.validation.pipe';
import { BookValidationPipe } from './validation.pipes/book.validation.pipe';

//@UsePipes(ValidationPipe)
@Controller()
export class AppController {

  // Валидация данных Param
  @Get('age/:age')
    getAgeInfo(@Param('age', AppAgeValidationPipe) age: string): string{
    return age;
  }

  // Валидация данных Query
  @Get('phone')
  checkPhone(@Query('number', PhoneValidationPipe) number: string): string{
    return number;
  }

  // Валидация данных Body
  @Post('books')
  createBook(@Body(BookValidationPipe) body: any): any{   
    return body;
  }
}
