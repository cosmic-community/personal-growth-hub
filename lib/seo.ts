import { Metadata } from 'next';
import { SITE_CONFIG } from './constants';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  noIndex?: boolean;
  canonicalUrl?: string;
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = [],
  noIndex = false,
  canonicalUrl,
}: SEOProps): Metadata {
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
    ...tags,
  ].filter(Boolean);

  const metadata: Metadata = {
    title: seoTitle,
    description: seoDescription,
    keywords: allKeywords,
    authors: [{ name: author || SITE_CONFIG.author, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.author,
    publisher: SITE_CONFIG.name,
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      type: type,
      locale: 'en_US',
      url: seoUrl,
      title: title || SITE_CONFIG.name,
      description: seoDescription,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: title || SITE_CONFIG.name,
          type: 'image/jpeg',
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { 
        authors: [author],
      }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: title || SITE_CONFIG.name,
      description: seoDescription,
      creator: '@trueyoutherapy',
      site: '@trueyoutherapy',
      images: [seoImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    category: 'Health & Wellness',
  };

  return metadata;
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}

export function generateArticleStructuredData({
  headline,
  description,
  image,
  author,
  publishedTime,
  modifiedTime,
  url,
  keywords = [],
}: {
  headline: string;
  description: string;
  image?: string;
  author?: string;
  publishedTime: string;
  modifiedTime: string;
  url: string;
  keywords?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: image ? [image] : [SITE_CONFIG.ogImage],
    author: {
      '@type': 'Person',
      name: author || SITE_CONFIG.author,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/logo.png`,
      },
    },
    datePublished: publishedTime,
    dateModified: modifiedTime,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}${url}`,
    },
    keywords: keywords.join(', '),
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    hasPart: {
      '@type': 'WebPageElement',
      isAccessibleForFree: true,
      cssSelector: '.article-content',
    },
  };
}

export function generateProductStructuredData({
  name,
  description,
  image,
  price,
  currency = 'USD',
  availability = 'InStock',
  condition = 'NewCondition',
  brand = SITE_CONFIG.name,
  sku,
  mpn,
  category,
  reviews = [],
}: {
  name: string;
  description: string;
  image?: string;
  price: number;
  currency?: string;
  availability?: string;
  condition?: string;
  brand?: string;
  sku?: string;
  mpn?: string;
  category?: string;
  reviews?: Array<{
    rating: number;
    author: string;
    datePublished: string;
    reviewBody: string;
  }>;
}) {
  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
    : 4.9;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: image ? [image] : [SITE_CONFIG.ogImage],
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    offers: {
      '@type': 'Offer',
      price: price.toString(),
      priceCurrency: currency,
      availability: `https://schema.org/${availability}`,
      itemCondition: `https://schema.org/${condition}`,
      url: SITE_CONFIG.url,
      seller: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
      },
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
    },
    ...(sku && { sku }),
    ...(mpn && { mpn }),
    ...(category && { category }),
    ...(reviews.length > 0 && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: averageRating.toFixed(1),
        reviewCount: reviews.length.toString(),
        bestRating: '5',
        worstRating: '1',
      },
      review: reviews.map(review => ({
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: review.rating.toString(),
          bestRating: '5',
          worstRating: '1',
        },
        author: {
          '@type': 'Person',
          name: review.author,
        },
        datePublished: review.datePublished,
        reviewBody: review.reviewBody,
      })),
    }),
    audience: {
      '@type': 'Audience',
      audienceType: 'Adults seeking mental health support',
    },
    isAccessibleForFree: false,
    hasPart: {
      '@type': 'DigitalDocument',
      encodingFormat: 'application/pdf',
    },
  };
}

export function optimizeImageUrl(url: string, options: {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'auto' | 'webp' | 'jpg' | 'png';
  fit?: 'crop' | 'max' | 'scale' | 'fill';
} = {}): string {
  if (!url) return '';
  
  const {
    width = 800,
    height = 600,
    quality = 85,
    format = 'auto',
    fit = 'crop',
  } = options;
  
  // Check if it's an imgix URL
  if (url.includes('imgix')) {
    const params = new URLSearchParams({
      w: width.toString(),
      h: height.toString(),
      q: quality.toString(),
      fit,
      auto: 'format,compress',
    });
    
    return `${url}?${params.toString()}`;
  }
  
  return url;
}

export const STRUCTURED_DATA_TYPES = {
  ORGANIZATION: 'Organization',
  WEBSITE: 'WebSite',
  ARTICLE: 'Article',
  PRODUCT: 'Product',
  SERVICE: 'Service',
  LOCAL_BUSINESS: 'LocalBusiness',
  FAQ_PAGE: 'FAQPage',
  BREADCRUMB_LIST: 'BreadcrumbList',
  REVIEW: 'Review',
  AGGREGATE_RATING: 'AggregateRating',
} as const;

export const SCHEMA_ORG_URL = 'https://schema.org';