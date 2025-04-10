import '../globals.css'

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className='page'>
            {children}
            <footer />
        </section>
    )
}