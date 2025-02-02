import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import NavBar from '@/app/components/NavBar';

import './globals.css';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '900'],
  subsets: ['latin'],
  preload: true,
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Saurabh Kr. Suryan',
  description: ' a tinkerer, perfectionist, who loves over engineering & building beautiful UIs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saurabhsuryan.in',
    title: 'Saurabh Kr. Suryan',
    description: ' a tinkerer, perfectionist, who loves over engineering & building beautiful UIs',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={'dark bg-white dark:bg-gray-950'} lang="en">
      <body className={poppins.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
