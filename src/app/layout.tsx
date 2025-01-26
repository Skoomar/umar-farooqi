import type { Metadata } from "next";
import { Poppins as FontSans } from 'next/font/google';
import "../input.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/theme-provider";
import NavMenu from "@/components/NavMenu/NavMenu";

const fontSans = FontSans({
    subsets: ['latin'],
    weight: "400",
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: {
        template: "%s | Umar Farooqi",
        default: "Umar Farooqi",
    },
    description: "Umar Farooqi - Software Engineer",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
    <html lang="en" suppressHydrationWarning
          className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
    <body>
    <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
    >
        <NavMenu />
        <main id="content">{children}</main>
    </ThemeProvider>
    </body>
    </html>
);
export default RootLayout;
