import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Personal Growth Hub - Transform Your Life with Professional Resources',
  description: 'Access high-quality digital products for personal growth, relationship improvement, and youth development. Professional-grade resources for individual coaching, couples therapy, and teen support.',
  keywords: 'personal growth, self-care, relationship tools, youth resources, digital products, therapy resources',
  authors: [{ name: 'Personal Growth Hub' }],
  openGraph: {
    title: 'Personal Growth Hub - Transform Your Life',
    description: 'Professional digital resources for personal development and well-being',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Growth Hub',
    description: 'Professional digital resources for personal development',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}