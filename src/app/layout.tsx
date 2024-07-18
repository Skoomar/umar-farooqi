import type { Metadata } from "next";
import { Poppins as FontSans, Merriweather as FontSerif } from 'next/font/google';
import "../input.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/theme-provider";
import NavMenu from "@/components/NavMenu/NavMenu";

const fontSans = FontSans({
    subsets: ['latin'],
    weight: "400",
    variable: "--font-sans",
});

const fontSerif = FontSerif({
    subsets: ['latin'],
    weight: "400",
    variable: "--font-serif",
});

export const metadata: Metadata = {
    title: "Umar Farooqi",
    description: "Umar Farooqi - Software Engineer",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontSerif.variable)}>
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
