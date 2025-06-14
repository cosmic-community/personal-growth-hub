import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AuthProvider } from '@/components/AuthProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import ScrollProgress from '@/components/ScrollProgress';
import FloatingActionButton from '@/components/FloatingActionButton';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    default: 'TrueYou Therapy - Transform Your Life with Professional Resources',
    template: '%s | TrueYou Therapy',
  },
  description: 'Access high-quality digital products for personal growth, relationship improvement, and youth development. Professional-grade resources for individual coaching, couples therapy, and teen support.',
  keywords: [
    'personal growth',
    'self-care',
    'relationship tools',
    'youth resources',
    'digital products',
    'therapy resources',
    'mental health',
    'professional development',
    'life coaching',
    'therapeutic consultation',
  ],
  authors: [{ name: 'TrueYou Therapy', url: 'https://trueyoutherapy.com' }],
  creator: 'TrueYou Therapy',
  publisher: 'TrueYou Therapy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://trueyoutherapy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'TrueYou Therapy - Transform Your Life',
    description: 'Professional digital resources for personal development and well-being',
    siteName: 'TrueYou Therapy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TrueYou Therapy - Professional Personal Growth Resources',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrueYou Therapy - Transform Your Life',
    description: 'Professional digital resources for personal development',
    creator: '@trueyoutherapy',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
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
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'health',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#10b981" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://imgix.cosmicjs.com" />
        <link rel="dns-prefetch" href="https://api.cosmicjs.com" />
      </head>
      <body className={`${inter.className} antialiased min-h-screen bg-background text-foreground`}>
        <ThemeProvider defaultTheme="light">
          <AuthProvider>
            <div className="relative flex min-h-screen flex-col">
              <ScrollProgress />
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
              <ExitIntentPopup />
              <FloatingActionButton variant="scroll-to-top" />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}