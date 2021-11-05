import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from 'path'
import { GetTracksModule } from "./tracks/getTracks.module";


@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: path.resolve('./static'),
  }), GetTracksModule, MongooseModule.forRoot('mongodb+srv://admin:*****@cluster0.4ezdr.mongodb.net/music-platform?retryWrites=true&w=majority')]
})

export class AppModule{}
