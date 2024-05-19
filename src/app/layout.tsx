import type { Metadata } from "next";
import { fonts } from "./fonts";
import "../input.css";
import { Providers } from "@/app/providers";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "@/theme";


export const metadata: Metadata = {
    title: "Umar Farooqi",
    description: "A website about a person called Umar Farooqi",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={fonts.inter.className}>
            <body >
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
