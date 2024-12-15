export default async function Page({ 
    params,
    searchParams,
}: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [ key: string]: string | string[] | undefined }>
}) {
    const { slug } = await params;

    return(
        <div>
            <h3 className="text-4xl">Slug Page</h3>
            <p>{slug}</p>
        </div>
    )
}