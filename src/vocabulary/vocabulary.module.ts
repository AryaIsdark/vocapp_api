import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VocabularyController } from './vocabulary.controller';
import { VocabularyService } from './vocabulary.service';
import { Vocabulary, VocabularySchema } from './vocabulary.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Vocabulary.name, schema: VocabularySchema },
    ]),
  ],
  controllers: [VocabularyController],
  providers: [VocabularyService],
})
export class VocabularyModule {}
