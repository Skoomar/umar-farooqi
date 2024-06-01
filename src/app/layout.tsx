import type { Metadata } from "next";
import { Inter as FontSans } from 'next/font/google';
import "../input.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/theme-provider";

const fontSans = FontSans({
    subsets: ['latin'],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Umar Farooqi",
    description: "A website about a person called Umar Farooqi",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {/* TODO: should <NavMenu> be in here?*/}
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
