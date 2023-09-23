import './globals.css';
import type { Metadata } from 'next';
import { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import { Roboto } from 'next/font/google';

export const metadata: Metadata = {
  title: 'E-Commerce Sport Shop',
  description: 'Website sell affordable and quality sports equipment',
  keywords: 'Sport, bo',
};

const roboto: NextFontWithVariable = Roboto({
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body className="font-roboto">{children}</body>
    </html>
  );
}
