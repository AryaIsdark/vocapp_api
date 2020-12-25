import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

export type VocabularyDocument = {
  wordId: string;
  definition: string;
  createdAt: string;
  groupId: string;
} & Document;

@Schema()
export class Vocabulary {
  @Prop()
  wordId: string;

  @Prop()
  definition: string;

  @Prop()
  createdAt: string;

  @Prop()
  groupId: string;
}

export const VocabularySchema = SchemaFactory.createForClass(Vocabulary);
