import { Module } from "@nestjs/common";
import { Page2Controller } from "./page2.controller";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [HttpModule],
    controllers: [Page2Controller],
    providers: [],
})
export class Page2Module {}