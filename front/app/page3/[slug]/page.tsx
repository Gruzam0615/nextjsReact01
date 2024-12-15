import { page3PropsAtom } from "@/app/store/page3Atom";

export default async function Page({ 
    params,
    searchParams,
}: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [title: string]: string | string[] | undefined }>
}) {
    const { slug } = await params;
    const filters = await searchParams;

    return(
        <div>
            <h3 className="text-4xl">{filters.title}</h3>
            <p>{slug}</p>
        </div>
    )
}