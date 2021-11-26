import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // Create a logger instance
  private logger = new Logger('AppController');

  constructor(private appService: AppService) {}

  @Post('add')
  async accumulate(@Body('data') data: number[])  {
    this.logger.log('Adding ' + data.toString());
    return this.appService.accumulate(data);
  }
}
