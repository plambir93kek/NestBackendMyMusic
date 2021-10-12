import { Controller, Get, Query } from "@nestjs/common";
import { TrackService } from "./track.service";

@Controller('/tracks')
export class GetTracksController{
    constructor(private readonly trackService: TrackService){}
    @Get()
    getTracks(){
        const tracks = this.trackService.getTracks();
        console.log('tracks')
        return tracks;
    }

    @Get('/search')
    getSearchTracks(@Query('query') query: string){
       return this.trackService.getSearchTracks(query)
    }
}