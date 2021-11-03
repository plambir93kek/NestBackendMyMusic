import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TrackDocument = Track & Document;

@Schema()
export class Track {
    @Prop()
    artist: string
    @Prop()
    audio: string
    @Prop()
    name: string
    @Prop()
    picture: string
}

export const TrackSchema = SchemaFactory.createForClass(Track);