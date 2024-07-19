export default function BlogPostLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className=" px-10 py-10 sm:px-20 md:px-32 lg:px-52 lg:py-14 xl:px-80 2xl:px-[30rem]">
            {children}
        </div>
    );
}
