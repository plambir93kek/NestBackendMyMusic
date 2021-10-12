import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";


async function start() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.enableCors();
    await app.listen(5000, () => {
        console.log('ok')
    })
};

start();