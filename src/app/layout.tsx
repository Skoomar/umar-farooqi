import type { Metadata } from "next";
// import { Inter as FontSans } from 'next/font/google';
import { Merriweather as FontSerif } from 'next/font/google';
import "../input.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/theme-provider";
import NavMenu from "@/components/NavMenu/NavMenu";

const fontSerif = FontSerif({
    subsets: ['latin'],
    weight: "400",
    variable: "--font-serif",
});

export const metadata: Metadata = {
    title: "Umar Farooqi",
    description: "A website about a person called Umar Farooqi",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning className={cn("min-h-screen bg-background font-serif antialiased", fontSerif.variable)}>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <NavMenu />
                    <main id='content'>{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
}
