import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import FileService from "src/file.service";
import { GetTracksController } from "./getTracks.controller";
import { Track, TrackSchema } from "./schemas/track.schema";
import { TrackController } from "./track.controller";
import { TrackService } from "./track.service";


@Module({
    imports:[MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }])],
    controllers:[TrackController, GetTracksController],
    providers:[TrackService, FileService]
})
export class TrackModule{}