export async function getLists() {
    const data = await fetch("https://api.vercel.app/blog")
    const result = await data.json()
    return result;
}

export async function WritePostApi(param: any) {
    console.log("requested WritePostApi");
    console.log(param);
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(param),
    }

    const data = await fetch("/page2/writePost", options);
    // const result = await data.json();
    // return result;
}