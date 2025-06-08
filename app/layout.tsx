import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import { Inter, Poppins, Merriweather } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['600'], variable: '--font-poppins' });
const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-merriweather' });


export const metadata: Metadata = {
  title: 'Ripple - the new age tweeter',
  description: 'Ripple is a new age tweeter, that is better than the bird that died anyways',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${merriweather.variable}`}>
      <body>
        <Navbar />
        <main className="ml-64 p-6">{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
