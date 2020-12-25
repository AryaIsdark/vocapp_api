import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/sayHello')
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard())
  @Get('/api/protected')
  getProtected(): string {
    return 'This route is protected.';
  }
}
