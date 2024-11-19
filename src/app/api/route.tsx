export async function Get() {}

export async function test2b(server_name: string) {
    console.log("server_name", server_name);

    const key = String(process.env.NEXT_PUBLIC_TEST1_API_KEY);
    const headers = new Headers();
    headers.append("x-nxopen-api-key", key);

    const data = await fetch("https://open.api.nexon.com/mabinogi/v1/horn-bugle-world/history?server_name="+server_name, {
        method: "GET",
        headers: headers,
    })
    .then((res) => res.json())
    
    return data;
}