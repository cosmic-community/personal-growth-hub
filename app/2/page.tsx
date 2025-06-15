import { Metadata } from 'next';
import VideoSeriesLanding from '@/components/VideoSeriesLanding';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Transform Your Life in 30 Days - Exclusive Video Series | TrueYou Therapy',
  description: 'Join thousands who have transformed their lives with our proven 5-hour video series. Professional therapy techniques, actionable strategies, and lifetime access. Limited-time offer!',
  keywords: [
    'personal transformation',
    'video series',
    'therapy techniques',
    'self improvement course',
    'life transformation',
    'professional development',
    'mental health resources',
    'exclusive training'
  ],
  openGraph: {
    title: 'Transform Your Life in 30 Days - Exclusive Video Series',
    description: 'Join thousands who have transformed their lives with our proven video series. Professional therapy techniques and actionable strategies.',
    url: `${SITE_CONFIG.url}/2`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: '/landing-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Transform Your Life Video Series',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transform Your Life in 30 Days - Exclusive Video Series',
    description: 'Join thousands who have transformed their lives with our proven video series.',
    images: ['/landing-og-image.jpg'],
  },
  robots: {
    index: false, // Landing page - don't index for SEO
    follow: true,
  },
};

export default function VideoSeriesLandingPage() {
  return (
    <>
      <VideoSeriesLanding />
    </>
  );
}