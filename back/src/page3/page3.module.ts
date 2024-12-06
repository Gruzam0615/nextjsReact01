import { Module } from "@nestjs/common";
import { Page3Controller } from "./page3.controller";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [HttpModule],
    controllers: [Page3Controller],
    providers: [],
})
export class Page3Module {}