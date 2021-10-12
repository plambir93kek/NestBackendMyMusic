import { Module } from "@nestjs/common";
import { TrackModule } from "./tracks/track.module";
import { MongooseModule } from '@nestjs/mongoose';
import { GetTracksModule } from "./tracks/getTracks.module";
import { GetTracksController } from "./tracks/getTracks.controller";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from 'path'


@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: path.resolve(__dirname, 'static'),
  }), TrackModule, MongooseModule.forRoot('mongodb+srv://admin:repolka79@cluster0.4ezdr.mongodb.net/music-platform?retryWrites=true&w=majority')]
})

export class AppModule{}