"use client";

import Link from "next/link";


import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useAtom } from "jotai";

import { getLists } from "@/app/api/page3";
import { page3PropsAtom } from "@/app/store/page3Atom";
import TimelineComponent from "@/app/components/Timeline";
import { PaginationComponent } from "@/app/components/Pagination";

export default function Page1() {
    const searchParams = useSearchParams();
    const currentPage = searchParams.get("currentpage");
    console.log("currentPage:", currentPage);

    const [ lists, setLists ] = useState([]);
    const [ listsLength, setListsLength ] = useState(0);
    const [ pageRange, setPageRange ] = useState(10);

    useEffect(() => {
        async function getData() {
            const data = await fetch("/blog")
            const result = await data.json()
            setLists(result)
            setListsLength(Math.ceil(result.length / pageRange));
        }
        getData();
    }, [])

    return (
        <>
            <TimelineComponent lists={lists} />
            <PaginationComponent currentPage={currentPage} totalPages={listsLength}/>
        </> 
        
    )
}