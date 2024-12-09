"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Modal({
    data,
    className
}: {
    data: any
    className?:string
}) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const data2 = searchParams.get("item")

    const closeModal = () => {
        router.back();
    }
    

    return(
        <div>
            <h1>Modal Page</h1>           
            <div className={className || ""}>
                {data2}
            </div>
            <button onClick={() => { closeModal() }}>Close Modal</button>
        </div>
    )
}