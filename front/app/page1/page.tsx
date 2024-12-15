import Link from "next/link";

import { getLists } from "@/app/api/page1";

export default async function Page1() {
    const lists = await getLists();

    return(
        <div>
            <h1 className="text-6xl">Page1</h1>
            <ul>
                {lists.map((list: any) => (
                    <li key={list.id}>
                        <Link href={`/page1/${list.id}`}>
                            {list.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}