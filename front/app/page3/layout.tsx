export default function Page1Layout({
    children
}: {
    children: React.ReactNode
}) {
    return(
        <div className="container mx-auto">
            {children}
        </div>
    )
}