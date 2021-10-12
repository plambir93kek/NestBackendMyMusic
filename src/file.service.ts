import { Injectable } from "@nestjs/common";
import { fstat } from "fs";
import * as path from 'path';
import * as uuid from 'uuid';
import * as fs from 'fs';


export enum FileType {
    AUDIO = 'audio',
    IMAGE = 'image'
}

@Injectable()
export class FileService{
    saveFile(type: FileType, file){
      try {
         const fileExtention = file.originalname.split('.').pop();
         const fileName = `${uuid.v4()}.${fileExtention}`;
         const pathName = path.resolve(`./dist/static/${type}`);
         if(!fs.existsSync(pathName)){
             fs.mkdirSync(pathName, {recursive: true})
         }
         fs.writeFileSync(path.resolve(pathName, fileName), file.buffer)
         return type + '/' + fileName;
      } catch (e) {
          throw new Error(e)
      }
    }
}

export default FileService;