import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import CookieBanner from "@/app/comps/CookieBannner";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Hydrokap',
    description: 'HYDROKAP: Kompleksowe przyłącza wod-kan, roboty ziemne (koparki, walce) w Małopolsce. Solidne fundamenty dla Twojej inwestycji.',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pl">
        <body className={inter.className}>
        {children}
        <CookieBanner />
        </body>
        </html>
    );
}
