// export default async function Test1() {

//     const data = await fetch("https://api.vercel.app/blog");
//     const result = await data.json();
    
//     return(
//         <div className="">
//             <ul>
//             {
//                 result?.map((item: any, index: string) => {
//                     return <li key={item.id}>{item.title}</li>
//                 })
//             }
//             </ul>
//         </div>
//     )
// }

export default async function Test1() {

    const data = await fetch("https://api.vercel.app/blog");
    const result = await data.json();
    
    return(
        <div className="">
        {
            result?.map((item: any, index: string) => {
                return(
                    <div className="flex items-start gap-2.5">
                        <div className="flex flex-col w-full max-w-100 leading-1.5 p-4 hover:bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">{item.title}</span>
                            </div>
                            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{item.content}</p>
                        </div>
                    </div>
                );
            })
        }
        </div>
    )
}