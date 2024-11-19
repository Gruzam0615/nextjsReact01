type Test2Props = {
    server_name: string;
}

export default async function Test2({ server_name }: Test2Props) {
    const headers = new Headers();
        headers.append("x-nxopen-api-key", String(process.env.TEST1_API_KEY));

    const data = await fetch("https://open.api.nexon.com/mabinogi/v1/horn-bugle-world/history?server_name="+server_name, {
        method: "GET",
        headers: headers,
    });
    const result = await data.json();
    
    return(
        <tbody>
        {
            result.horn_bugle_world_history?.map((item: any, index: string) => {
                return(
                    <tr id={index}>
                        <td>{item.character_name}</td>
                        <td>{item.message.replace(`${item.character_name} : `, "")}</td>
                        <td>{item.date_send}</td>
                    </tr>                    
                );
            })
        }          
        </tbody>
    );
}