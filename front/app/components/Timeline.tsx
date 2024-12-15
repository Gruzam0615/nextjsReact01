"use client";

import { Timeline, TimelineBody, TimelineContent, TimelineItem, TimelinePoint, TimelineTime, TimelineTitle } from "flowbite-react";
import Link from "next/link";

export default function TimelineComponent(props: any) {
    return (
        <Timeline>
            {
                props.lists.map((list: any) => {
                    return(
                    <Link key={list.id} href={`/page3/${list.id}?title=${list.title}`}>
                        <TimelineItem>
                            <TimelinePoint />
                            <TimelineContent>
                                <TimelineTime>{list.date}</TimelineTime>
                                <TimelineTitle>{list.title}</TimelineTitle>
                                <TimelineBody>{list.content}</TimelineBody>
                            </TimelineContent>
                        </TimelineItem>
                    </Link>
                    )
                })
            }
        </Timeline>
    );
}