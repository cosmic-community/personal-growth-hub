import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AuthProvider } from '@/components/AuthProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExitIntentPopup from '@/components/ExitIntentPopup';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'TrueYou Therapy - Transform Your Life with Professional Resources',
  description: 'Access high-quality digital products for personal growth, relationship improvement, and youth development. Professional-grade resources for individual coaching, couples therapy, and teen support.',
  keywords: 'personal growth, self-care, relationship tools, youth resources, digital products, therapy resources',
  authors: [{ name: 'TrueYou Therapy' }],
  creator: 'TrueYou Therapy',
  publisher: 'TrueYou Therapy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://trueyoutherapy.com',
    title: 'TrueYou Therapy - Transform Your Life',
    description: 'Professional digital resources for personal development and well-being',
    siteName: 'TrueYou Therapy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrueYou Therapy',
    description: 'Professional digital resources for personal development',
    creator: '@trueyoutherapy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <AuthProvider>
            <div className="min-h-screen flex flex-col bg-background">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
              <ExitIntentPopup />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}