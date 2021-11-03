import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Article, ArticleDocument } from "./schemas/article.schema";
import { Track, TrackDocument } from "./schemas/track.schema";


@Injectable()
export class TrackService {
    constructor(@InjectModel(Track.name) private TrackModel: Model<TrackDocument>,
    @InjectModel(Article.name) private ArticleModel: Model<ArticleDocument>
    ) {}

    async getTracks():Promise<Track[]>{
        const tracks = await this.TrackModel.find();
        return tracks;
    }

    async getSearchTracks(query):Promise<Track[]>{
        const tracks = await this.TrackModel.find({name: {$regex: new RegExp(query, 'i')}})
        return tracks;
    }

    async getArticles():Promise<Article[]>{
        const articles = await this.ArticleModel.find();
        return articles;
    }
};