import type { Metadata } from "next";
import { Inter as FontSans } from 'next/font/google';
import "../input.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
    subsets: ['latin'],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: "Umar Farooqi",
    description: "A website about a person called Umar Farooqi",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
            <body>
                {children}
            </body>
        </html>
    );
}
