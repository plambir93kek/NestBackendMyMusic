import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { GetTracksController } from "./getTracks.controller";
import { Track, TrackSchema } from "./schemas/track.schema";
import { TrackService } from "./track.service";


@Module({
    imports:[MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }])],
    controllers:[GetTracksController],
    providers:[TrackService]
})
export class GetTracksModule{}