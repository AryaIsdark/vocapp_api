import { Injectable } from '@nestjs/common';
import { Vocabulary, VocabularyDocument } from './vocabulary.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class VocabularyService {
  constructor(
    @InjectModel(Vocabulary.name)
    private vocabularyModel: Model<VocabularyDocument>,
  ) {}
  getVocabularies() {
    return [];
  }

  async findAll(): Promise<Vocabulary[]> {
    return this.vocabularyModel.find().exec();
  }

  async findOne(id: string): Promise<Vocabulary> {
    return this.vocabularyModel.findOne({ _id: id });
  }
}
