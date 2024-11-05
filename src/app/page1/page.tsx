"use client";

import Search from "@/app/fragments/search";

import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";

import { searchKeywordAtom, searchResultAtom } from "../fragments/primitiveAtoms";

import { SearchItemHistoryFromAuction } from "@/app/api/routes";

export default function Page1() {
    // const data = await SearchItemHistoryFromAuction("부러진 통나무", "").then(res => res.json())
    // const result = data.data.auction_history;

    // console.log(`data: \n`, data);
    // console.log(`result: \n`, result);

    const result = useAtomValue(searchResultAtom);
    const resultViewSize = 10; // result 를 한번에 몇 개씩 보여줄 건지
    const resultCursor = 0; // result cursor


    return(
        <>
            <div>
                <h1>PAGE1 Title</h1>
                <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                    <Search placeholder="Search items" queryname="item_name" />
                </div>
                {
                    result.length != 0?
                    result.map((v:any, i:any) => {
                        return (<p key={i}>{v.item_display_name}</p>);
                    })
                    :
                    <p>검색 결과가 없습니다.</p>
                }
                <pre>
                
                </pre>
            </div>
        </>
    );
}