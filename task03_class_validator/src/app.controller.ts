import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { ValidationPipe } from './validation/validation.pipe';
import { BookDto } from './dto/book.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UsePipes(new ValidationPipe())
  @Post('/books')
  createBook(@Body() body: BookDto): BookDto {
    return body
  }
}
