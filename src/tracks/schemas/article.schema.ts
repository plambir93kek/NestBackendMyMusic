import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema()
export class Article {
    @Prop()
    picture: string
    @Prop()
    text: string
}

export const ArticleSchema = SchemaFactory.createForClass(Article);