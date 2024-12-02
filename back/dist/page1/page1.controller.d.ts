import { HttpService } from "@nestjs/axios";
export declare class Page1Controller {
    private readonly httpService;
    constructor(httpService: HttpService);
    findAll(): any;
    findAll2(): any;
    findAll3(server_name: string): Promise<any>;
}
