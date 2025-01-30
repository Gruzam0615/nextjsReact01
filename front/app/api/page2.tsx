export async function getLists() {
    const result = await fetch("https://api.vercel.app/blog")
    .then((res) => {
        return res.json();
    })
    .catch((err) => {
        return null;
    })
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

    // const result = await fetch("/page2/writePost", options)
    // .then((res) => {
    //     return res.json();
    // })
    // .catch((err) => {
    //     console.log("/page2/writePost Failed...");
    //     return null;
    // })
    
    // return result;
}