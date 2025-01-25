import Link from "next/link";

import { getLists } from "@/app/api/page1";
import { Button, Timeline, TimelineBody, TimelineContent, TimelineItem, TimelinePoint, TimelineTime, TimelineTitle } from "flowbite-react";

export default async function Page2() {
    const lists = await getLists();

    return (
        <div className="">
            <div className="grid grid-cols-3">
                <div></div>
                <div></div>
                <div className="self-center justify-items-end">
                    <Link href={`/page2/write`}>
                        <Button color="gray">작성</Button>
                    </Link>
                </div>
            </div>
            <div className="grid grid-col">
                <Timeline>
                    {
                        lists ?
                        lists.map((list: Page2Interface) => (
                            <Link key={list.id} href={`/page2/${list.id}?title=${list.title}`}>
                                <TimelineItem>
                                    <TimelinePoint />
                                    <TimelineContent>
                                        <TimelineTime>{list.date}</TimelineTime>
                                        <TimelineTitle>{list.title}</TimelineTitle>
                                        <TimelineBody>{list.content}</TimelineBody>
                                    </TimelineContent>
                                </TimelineItem>
                            </Link>
                        )):
                        <Link href={""}>
                            <TimelineItem>
                                    <TimelinePoint />
                                    <TimelineContent>
                                        <TimelineTime></TimelineTime>
                                        <TimelineTitle>No Data</TimelineTitle>
                                        <TimelineBody></TimelineBody>
                                    </TimelineContent>
                                </TimelineItem>
                        </Link>
                    }
                </Timeline>
            </div>
        </div>
    )
}