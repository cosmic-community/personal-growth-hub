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
import { SITE_CONFIG } from '@/lib/constants';
import { getStructuredData } from '@/lib/structured-data';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'TrueYou Therapy - Transform Your Life with Professional Mental Health Resources',
    template: '%s | TrueYou Therapy - Professional Mental Health Support',
  },
  description: 'Access evidence-based digital therapy resources, video courses, and 1-on-1 consultations with licensed mental health professionals. Transform your life with proven therapeutic techniques and personalized support.',
  keywords: [
    'mental health therapy',
    'online therapy resources',
    'digital mental health tools',
    'licensed therapist consultation',
    'evidence-based therapy',
    'personal development therapy',
    'relationship counseling tools',
    'anxiety management resources',
    'depression support tools',
    'self-help therapy materials',
    'therapeutic worksheets',
    'mental wellness programs',
    'professional therapy guidance',
    'telehealth mental health',
    'cognitive behavioral therapy tools'
  ],
  authors: [{ name: 'TrueYou Therapy', url: SITE_CONFIG.url }],
  creator: 'TrueYou Therapy',
  publisher: 'TrueYou Therapy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'TrueYou Therapy - Professional Mental Health Resources & Therapy Tools',
    description: 'Transform your mental health with evidence-based digital resources, expert video courses, and personalized consultations with licensed therapists.',
    siteName: 'TrueYou Therapy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TrueYou Therapy - Professional Mental Health Resources and Licensed Therapist Consultations',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrueYou Therapy - Transform Your Mental Health',
    description: 'Evidence-based digital therapy resources and licensed professional consultations',
    creator: '@trueyoutherapy',
    site: '@trueyoutherapy',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-snippet': 160,
    },
  },
  verification: {
    google: 'your-google-search-console-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  category: 'Health & Wellness',
  classification: 'Mental Health Services',
  other: {
    'theme-color': '#10b981',
    'color-scheme': 'light dark',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = getStructuredData();

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#10b981" />
        <meta name="color-scheme" content="light dark" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="TrueYou Therapy" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://imgix.cosmicjs.com" />
        <link rel="dns-prefetch" href="https://api.cosmicjs.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.organization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.website) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.localBusiness) }}
        />
        
        {/* Google Analytics - Replace with your actual GA4 ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased min-h-screen bg-background text-foreground`}>
        <ThemeProvider defaultTheme="light">
          <AuthProvider>
            <div className="relative flex min-h-screen flex-col">
              <ScrollProgress />
              <Header />
              <main className="flex-1" role="main">
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