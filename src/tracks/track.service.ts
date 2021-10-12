import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import FileService, { FileType } from "src/file.service";
import { trackDto } from "./dto/trackDto";
import { Track, TrackDocument } from "./schemas/track.schema";


@Injectable()
export class TrackService {
    constructor(@InjectModel(Track.name) private TrackModel: Model<TrackDocument>, private fileService: FileService) {}

    async create(dto:trackDto, audio, picture): Promise<Track>{
        const audioPath = this.fileService.saveFile(FileType.AUDIO, audio);
        const picturePath = this.fileService.saveFile(FileType.IMAGE, picture);
        const track = await this.TrackModel.create({...dto, audio: audioPath, picture: picturePath});
        return track;
    }

    async getTracks():Promise<Track[]>{
        const tracks = await this.TrackModel.find();
        return tracks;
    }

    async getSearchTracks(query):Promise<Track[]>{
        console.log(query)
        const tracks = await this.TrackModel.find({name: {$regex: new RegExp(query, 'i')}})
        return tracks;
    }
}