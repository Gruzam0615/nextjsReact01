export default async function Test1() {

    const data = await fetch("https://api.vercel.app/blog");
    const result = await data.json();
    
    return(
        <div>
            <ul>
            {
                result?.map((item: any, index: string) => {
                    return <li key={item.id}>{item.title}</li>
                })
            }
            </ul>
        </div>
    )
}