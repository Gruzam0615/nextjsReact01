"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export function Test2() {

    const [ result, setResult ] =  useState([]);
    const router = useRouter();

    const openProductModal = (item: any) => {
        router.push(`/page2/spec?item=${item}`);
    }

    useEffect(() => {
        async function fetchData() {
            let data = await fetch("/pokemon");
            let res = await data.json();
            setResult(res);
        }
        fetchData();
    }, []);   
    
    return(
        <div className="">
        {
            result?.map((item: any, index: number) => {
                return(
                    <div className="flex items-start gap-2.5" key={String(index)} onClick={() => { openProductModal(item) }}>
                        <div className="flex flex-col w-full max-w-100 leading-1.5 p-4 hover:bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">{`No.${index + 1} ${item.name}`}</span>
                            </div>
                            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{item.type}</p>
                        </div>
                    </div>
                );
            })
        }
        </div>
    )
}