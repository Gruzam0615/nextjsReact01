import { fetchData1, fetchData1B } from "../api/routes";

export default async function Page1() {
    
    const data = await fetchData1B("롱 소드", "검").then(res => res.json())
    const result = data.data.auction_history;
    
    console.log(`data: \n`, data);
    console.log(`result: \n`, result);

    return(
        <>
            <div>
                <h1>PAGE1 Title</h1>
                {
                    result.map((v:any, i:any) => {
                        return (<p key={i}>{v.item_display_name}</p>);
                    })
                }
            </div>
        </>
    );
}