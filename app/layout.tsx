import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import Provider from './provider';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Home - NextBlog Lite',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' data-arp=''>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
            >
                <Header />
                <main className='flex-1'>
                    <Provider>
                        {children}
                    </Provider>
                </main>
                <Footer />
            </body>
        </html>
    );
}
