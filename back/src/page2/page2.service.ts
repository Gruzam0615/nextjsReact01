import { Injectable } from "@nestjs/common";
import { Page2, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class Page2Service {
    constructor(private prisma: PrismaService) {}

    async page2(
        page2WhereUniqueInput: Prisma.Page2WhereUniqueInput
    ): Promise<Page2 | null> {
        return this.prisma.page2.findUnique({
            where: page2WhereUniqueInput,
        });
    }    

    async createPost(data: Prisma.Page2CreateInput): Promise<Page2> {
        if(data.created == "" || undefined) {
            data.created = new Date().toISOString();
            data.updated = data.created;
        }

        return this.prisma.page2.create({
            data
        });
    }
}