import type { Metadata } from "next";
import { Montserrat as FontSans } from 'next/font/google';
import "../input.css";
import { cn } from "@/lib/utils";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import NavMenu from "@/components/NavMenu/NavMenu";
import Footer from '@/components/Footer';

const fontSans = FontSans({
    subsets: ['latin'],
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
    <NextThemesProvider
        attribute="class"
        defaultTheme="light"
        // disableTransitionOnChange
    >
        <div className="flex flex-col overflow-x-clip">
            <NavMenu />
            <main id="content" className="flex flex-grow flex-col">{children}</main>
            <Footer />
        </div>
    </NextThemesProvider>
    </body>
    </html>
);
export default RootLayout;
