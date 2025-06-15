'use client';

import Head from 'next/head';
import { SITE_CONFIG } from '@/lib/constants';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  structuredData?: object;
  canonicalUrl?: string;
  noIndex?: boolean;
}

export default function SEOHead({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  structuredData,
  canonicalUrl,
  noIndex = false,
}: SEOHeadProps) {
  const seoTitle = title 
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} - ${SITE_CONFIG.description}`;
  
  const seoDescription = description || SITE_CONFIG.description;
  const seoImage = image || SITE_CONFIG.ogImage;
  const seoUrl = url ? `${SITE_CONFIG.url}${url}` : SITE_CONFIG.url;
  const canonical = canonicalUrl || seoUrl;
  
  const allKeywords = [
    ...SITE_CONFIG.keywords,
    ...keywords,
  ].filter(Boolean).join(', ');

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={author || SITE_CONFIG.author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title || SITE_CONFIG.name} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:locale" content="en_US" />
      
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {author && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@trueyoutherapy" />
      <meta name="twitter:creator" content="@trueyoutherapy" />
      <meta name="twitter:title" content={title || SITE_CONFIG.name} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#10b981" />
      <meta name="msapplication-TileColor" content="#10b981" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      {/* Preconnect to improve performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://imgix.cosmicjs.com" />
      <link rel="dns-prefetch" href="https://api.cosmicjs.com" />
    </Head>
  );
}