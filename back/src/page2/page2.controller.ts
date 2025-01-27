import { HttpService } from "@nestjs/axios";
import { Body, Controller, Get, Post, Query, Req } from "@nestjs/common";
import axios from "axios";
import { Page2Service } from "./page2.service";
import { Page2 as Page2Model } from "@prisma/client";

@Controller("/page2")
export class Page2Controller {
    constructor(
        private readonly page2Service: Page2Service,
    ) {}
    

    @Get()
    findAll(): any {
        return "this is Page1Controller @Get";
    }

    @Get("/find")
    findAll2(): any {
        return "This is Page1 /find";
    }

    @Get("/test1")
    async findAll3(@Query("server_name") server_name: string): Promise<any> {
        const key = String(process.env.X_NXOPEN_API_KEY);
        const url = "https://open.api.nexon.com/mabinogi/v1/horn-bugle-world/history?server_name="+server_name;

        console.log("Requested /page1/test1\n" + "param: " + server_name);
        // console.log("key:", key);

        const data = await axios.get<String>(url, {
            headers: {
                "x-nxopen-api-key": key,
            }
        });
    
        return data.data;
    }

    @Post("/writePost")
    async writePost(
        @Body() data: { 
            "title": string;
            "author": string;
            "date": string;
            "content": string;
            "fileInput": string[];
        },
    ): Promise<Page2Model> {
        console.log("Requested /page2/writePost");
        console.log(data);
        // return "";
        const param = {
            "title": data.title,
            "author": data.author,
            "content": data.content,
            "created": data.date,
            "updated": data.date,
        }


        return this.page2Service.createPost(param);
    }

}