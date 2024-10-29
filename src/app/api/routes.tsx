export const dynamic = "force-dynamic";
// export async function GET(request:Request) {}

export async function fetchData1() {
    const res = await fetch("https://open.api.nexon.com/mabinogi/v1/auction/history?auction_item_category=검&item_name=롱 소드", {
        headers:{
            "x-nxopen-api-key": String(process.env.TEST1_API_KEY)
        }
    })
    const data = await res.json()

    return Response.json({ data });
}

export async function fetchData1B(itemName : string, auctionItemCategory : string) {
    const res = await fetch(`https://open.api.nexon.com/mabinogi/v1/auction/history?auction_item_category=${auctionItemCategory}&item_name=${itemName}`, {
        headers:{
            "x-nxopen-api-key": String(process.env.TEST1_API_KEY)
        }
    })
    const data = await res.json()

    return Response.json({ data });
}