export async function getLists() {
    const data = await fetch("https://api.vercel.app/blog")
    const result = await data.json()
    return result;
}