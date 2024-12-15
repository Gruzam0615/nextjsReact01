import Link from "next/link";

import { getLists } from "@/app/api/page1";
import { Timeline, TimelineBody, TimelineContent, TimelineItem, TimelinePoint, TimelineTime, TimelineTitle } from "flowbite-react";

export default async function Page1() {
    const lists = await getLists();

    return (       
        <Timeline>
            {
                lists.map((list: any) => (
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
                ))
            }
        </Timeline>
    )
}