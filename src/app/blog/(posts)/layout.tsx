export default function BlogPostLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className=" px-10 md:px-[20rem] pb-20">
            {children}
        </div>
    );
}
