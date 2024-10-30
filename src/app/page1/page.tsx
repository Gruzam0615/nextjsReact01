import Search from "@/app/fragments/search";

import { fetchData1, fetchData1B } from "@/app/api/routes";

export default async function Page1() {
    
    const data = await fetchData1B("부러진 통나무", "둔기").then(res => res.json())
    const result = data.data.auction_history;
    
    // console.log(`data: \n`, data);
    // console.log(`result: \n`, result);

    return(
        <>
            <div>
                <h1>PAGE1 Title</h1>
                <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                    <Search placeholder="Search items" queryname="item_name" />
                </div>
                {
                    result?
                    result.map((v:any, i:any) => {
                        return (<p key={i}>{v.item_display_name}</p>);
                    })
                    :
                    <p>검색 결과가 없습니다.</p>
                }
            </div>
        </>
    );
}