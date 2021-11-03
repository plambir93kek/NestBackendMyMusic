import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { GetTracksController } from "./getTracks.controller";
import { Article, ArticleSchema } from "./schemas/article.schema";
import { Track, TrackSchema } from "./schemas/track.schema";
import { TrackService } from "./track.service";


@Module({
    imports:[MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]), MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }])],
    controllers:[GetTracksController],
    providers:[TrackService]
})
export class GetTracksModule{}