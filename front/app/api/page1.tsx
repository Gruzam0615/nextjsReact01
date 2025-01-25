export async function getLists() {
    // const data = await fetch("https://api.vercel.app/blog")
    // const result = await data.json()
    // return result;
    const result = await fetch("https://api.vercel.app/blog")
    .then((res) => {
        return res.json()
    })
    .catch((err) => {
        return null;
    })
    return result;
}