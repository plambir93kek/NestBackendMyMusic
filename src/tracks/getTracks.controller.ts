import { Controller, Get, Query } from "@nestjs/common";
import { TrackService } from "./track.service";

@Controller('/tracks')
export class GetTracksController{
    constructor(private readonly trackService: TrackService){}
    @Get()
    getTracks(){
        const tracks = this.trackService.getTracks();
        console.log('good')
        return tracks;
    }

    @Get('/search')
    getSearchTracks(@Query('query') query: string){
       return this.trackService.getSearchTracks(query)
    }

    @Get('/articles')
    getArticles(){
        return this.trackService.getArticles();
    }
}