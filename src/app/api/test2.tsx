type Data = {
    horn_bugle_world_histroy: any,
}

export default async function Test2({ server_name }: string) {
    const headers = new Headers();
        headers.append("x-nxopen-api-key", String(process.env.TEST1_API_KEY));

    const data = await fetch("https://open.api.nexon.com/mabinogi/v1/horn-bugle-world/history?server_name="+server_name, {
        method: "GET",
        headers: headers,
    });
    const result = await data.json();
    
    return(
        <div>
            <ul>
            {
                result.horn_bugle_world_history?.map((item: any, index: string) => {
                    return <li key={index}>{item.message}</li>
                })
            }
            </ul>            
        </div>
    );
}