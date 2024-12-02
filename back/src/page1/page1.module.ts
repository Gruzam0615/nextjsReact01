import { Module } from "@nestjs/common";
import { Page1Controller } from "./page1.controller";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [HttpModule],
    controllers: [Page1Controller],
    providers: [],
})
export class Page1Module {}