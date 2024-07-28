import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return 'server is alive!';
  }

  @Get('/error')
  error(): string {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    return 'asdf';
  }
}
