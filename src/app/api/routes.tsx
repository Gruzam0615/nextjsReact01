export const dynamic = "force-dynamic";
// export async function GET(request:Request) {}

export async function SearchItemHistoryFromAuction(itemName : string, auctionItemCategory : string) {
    if(auctionItemCategory === undefined || auctionItemCategory == "") {
        const res = await fetch(`https://open.api.nexon.com/mabinogi/v1/auction/history?item_name=${itemName}`, {
            headers:{
                "x-nxopen-api-key": String(process.env.NEXT_PUBLIC_TEST1_API_KEY)
            }
        })
        const data = await res.json()
    
        return Response.json({ data });
    }
    else {
        const res = await fetch(`https://open.api.nexon.com/mabinogi/v1/auction/history?auction_item_category=${auctionItemCategory}&item_name=${itemName}`, {
            headers:{
                "x-nxopen-api-key": String(process.env.NEXT_PUBLIC_TEST1_API_KEY)
            }
        })
        const data = await res.json()
    
        return Response.json({ data });
    }    
}

export async function SearchItemListFromAuction(itemName : string, auctionItemCategory : string) {
    if(auctionItemCategory === undefined || auctionItemCategory == "") {
        const res = await fetch(`https://open.api.nexon.com/mabinogi/v1/auction/list?item_name=${itemName}`, {
            headers:{
                "x-nxopen-api-key": String(process.env.NEXT_PUBLIC_TEST1_API_KEY)
            }
        })
        const data = await res.json()
    
        return Response.json({ data });
    }
    else {
        const res = await fetch(`https://open.api.nexon.com/mabinogi/v1/auction/list?auction_item_category=${auctionItemCategory}&item_name=${itemName}`, {
            headers:{
                "x-nxopen-api-key": String(process.env.NEXT_PUBLIC_TEST1_API_KEY)
            }
        })
        const data = await res.json()
    
        return Response.json({ data });
    }    
}