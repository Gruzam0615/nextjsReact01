export default function Page1Layout({
    children
}: {
    children: React.ReactNode
}) {
    return(
        <section>
            <nav></nav>
            {children}
        </section>
    );
}