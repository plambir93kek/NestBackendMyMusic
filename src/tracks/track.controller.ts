import { Body, Controller, Get, Post, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FileFieldsInterceptor } from "@nestjs/platform-express/multer";
import { trackDto } from "./dto/trackDto";
import { Track } from "./schemas/track.schema";
import { TrackService } from "./track.service";


@Controller('/create')
export class TrackController{
    constructor(private readonly trackService: TrackService){}
    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'audio', maxCount: 1 },
        { name: 'picture', maxCount: 1 },
      ]))
    create(@UploadedFiles() files, @Body() dto: trackDto){
        const {audio, picture} = files;
        console.log(files)
        return this.trackService.create(dto, audio[0], picture[0])
    };
}