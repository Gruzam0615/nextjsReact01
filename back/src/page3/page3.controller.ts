import { HttpService } from "@nestjs/axios";
import { Controller, Get, Query, Req } from "@nestjs/common";
import axios from "axios";

@Controller("page3")
export class Page3Controller {
    constructor(private readonly httpService: HttpService) {}

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

}