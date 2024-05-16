import type { Metadata } from "next";
import { fonts } from "./fonts";
import "../input.css";
import { Providers } from "@/app/providers";


export const metadata: Metadata = {
    title: "Umar Farooqi",
    description: "A website about a person called Umar Farooqi",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={fonts.inter.className}>
            <body >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
