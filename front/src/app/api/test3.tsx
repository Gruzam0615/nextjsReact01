export async function GET(server_name: string) {
    console.log("server_name", server_name);

    const headers = new Headers();

    const data = await fetch("http://localhost:4000/page3/test1?server_name="+server_name, {
        method: "GET",
        headers: headers,
    })
    .then((res) => res.json())
    
    return data;
}