import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import NavBar from '@/app/components/NavBar';

import './globals.css';

const poppins = Poppins({ weight: ['300', '400', '500', '600', '700', '900'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Saurabh Kr. Suryan',
  description: 'Built with ❤️',
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
