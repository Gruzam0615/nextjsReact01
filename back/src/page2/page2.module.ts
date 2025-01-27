import { Module } from "@nestjs/common";
import { Page2Controller } from "./page2.controller";
import { HttpModule } from "@nestjs/axios";
import { Page2Service } from "./page2.service";
import { PrismaService } from "src/prisma.service";

@Module({
    imports: [HttpModule],
    controllers: [Page2Controller],
    providers: [Page2Service, PrismaService],
    exports: [Page2Service],
})
export class Page2Module {}