import {
  Controller,
  Get,
  Res,
  HttpStatus,
  UseGuards,
  Param,
} from '@nestjs/common';
import { VocabularyService } from './vocabulary.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class VocabularyController {
  constructor(private vocabularyService: VocabularyService) {}
  @Get('api/vocab')
  @UseGuards(AuthGuard('jwt'))
  findAll(@Res() res) {
    this.vocabularyService
      .findAll()
      .catch((err) => {
        console.log(err);
      })
      .then((response) => {
        res.status(HttpStatus.OK).send(response);
      });
  }

  @Get('api/vocab/:id')
  @UseGuards(AuthGuard('jwt'))
  findeOne(@Param() params, @Res() res) {
    this.vocabularyService
      .findOne(params.id)
      .catch((err) => {
        console.log(err);
      })
      .then((response) => {
        res.status(HttpStatus.OK).send(response);
      });
  }
}
