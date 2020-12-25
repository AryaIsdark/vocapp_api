import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { createParamDecorator } from '@nestjs/common';

export const AuthUser = createParamDecorator((data, req) => {
  return req.user;
});

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('api/getUser')
  @UseGuards(AuthGuard('jwt'))
  getUser(@AuthUser() user) {
    return user;
  }

  @Post('api/authenticate')
  authenticate(@Body() requestBody, @Res() res) {
    this.authService
      .authenticate(requestBody.username, requestBody.password)
      .subscribe((response) => res.status(HttpStatus.OK).send(response.data));
  }
}
