import { SITE_CONFIG, CONTACT_INFO } from '@/lib/constants';

export interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  logo: string;
  image: string[];
  telephone: string;
  email: string;
  address: {
    '@type': string;
    addressCountry: string;
    addressRegion: string;
  };
  sameAs: string[];
  potentialAction: {
    '@type': string;
    target: string;
    'query-input': string;
  };
  areaServed: string;
  serviceType: string[];
  priceRange: string;
  availableLanguage: string[];
}

export interface WebsiteSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  potentialAction: {
    '@type': string;
    target: {
      '@type': string;
      urlTemplate: string;
    };
    'query-input': string;
  };
  publisher: {
    '@type': string;
    name: string;
    logo: {
      '@type': string;
      url: string;
    };
  };
}

export interface LocalBusinessSchema {
  '@context': string;
  '@type': string[];
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  image: string[];
  priceRange: string;
  paymentAccepted: string[];
  currenciesAccepted: string;
  areaServed: string;
  serviceType: string[];
  hasOfferCatalog: {
    '@type': string;
    name: string;
    itemListElement: Array<{
      '@type': string;
      itemOffered: {
        '@type': string;
        name: string;
        description: string;
      };
    }>;
  };
  aggregateRating: {
    '@type': string;
    ratingValue: string;
    reviewCount: string;
    bestRating: string;
    worstRating: string;
  };
  openingHours: string[];
  contactPoint: {
    '@type': string;
    telephone: string;
    email: string;
    contactType: string;
    availableLanguage: string[];
    areaServed: string;
  };
}

export interface ProductSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  image: string[];
  brand: {
    '@type': string;
    name: string;
  };
  offers: {
    '@type': string;
    price: string;
    priceCurrency: string;
    availability: string;
    validFrom: string;
    priceValidUntil: string;
    seller: {
      '@type': string;
      name: string;
    };
  };
  aggregateRating?: {
    '@type': string;
    ratingValue: string;
    reviewCount: string;
    bestRating: string;
    worstRating: string;
  };
  category: string;
  audience: {
    '@type': string;
    audienceType: string;
  };
}

export interface BlogPostSchema {
  '@context': string;
  '@type': string;
  headline: string;
  description: string;
  image: string[];
  author: {
    '@type': string;
    name: string;
    url?: string;
  };
  publisher: {
    '@type': string;
    name: string;
    logo: {
      '@type': string;
      url: string;
    };
  };
  datePublished: string;
  dateModified: string;
  mainEntityOfPage: {
    '@type': string;
    '@id': string;
  };
  articleSection: string;
  keywords: string[];
  wordCount?: number;
  inLanguage: string;
}

export interface ServiceSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  provider: {
    '@type': string;
    name: string;
    url: string;
  };
  areaServed: string;
  availableChannel: {
    '@type': string;
    serviceUrl: string;
    serviceName: string;
  };
  category: string;
  termsOfService: string;
  hoursAvailable: {
    '@type': string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
  };
  offers: {
    '@type': string;
    price: string;
    priceCurrency: string;
    description: string;
  };
}

export interface FAQPageSchema {
  '@context': string;
  '@type': string;
  mainEntity: Array<{
    '@type': string;
    name: string;
    acceptedAnswer: {
      '@type': string;
      text: string;
    };
  }>;
}

export function getStructuredData() {
  const organization: OrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    image: [`${SITE_CONFIG.url}/og-image.jpg`, `${SITE_CONFIG.url}/logo.png`],
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressRegion: 'Worldwide',
    },
    sameAs: [
      'https://twitter.com/trueyoutherapy',
      'https://facebook.com/trueyoutherapy',
      'https://linkedin.com/company/trueyoutherapy',
      'https://instagram.com/trueyoutherapy',
    ],
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    areaServed: 'Worldwide',
    serviceType: [
      'Mental Health Services',
      'Therapy Resources',
      'Personal Development',
      'Professional Consultation',
      'Digital Wellness Tools',
    ],
    priceRange: '$29-$299',
    availableLanguage: ['English'],
  };

  const website: WebsiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/logo.png`,
      },
    },
  };

  const localBusiness: LocalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HealthAndBeautyBusiness', 'MedicalBusiness'],
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    image: [`${SITE_CONFIG.url}/og-image.jpg`],
    priceRange: '$29-$299',
    paymentAccepted: ['Credit Card', 'PayPal', 'HSA', 'FSA'],
    currenciesAccepted: 'USD',
    areaServed: 'Worldwide',
    serviceType: [
      'Online Therapy Resources',
      'Mental Health Consultation',
      'Digital Wellness Programs',
      'Therapeutic Video Courses',
      'Personal Development Tools',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Mental Health and Therapy Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '1-on-1 Consultation',
            description: 'Professional mental health consultation with licensed therapists',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Video Course Series',
            description: 'Comprehensive video courses on mental health and personal development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digital Therapy Resources',
            description: 'Evidence-based digital tools and worksheets for mental wellness',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1247',
      bestRating: '5',
      worstRating: '1',
    },
    openingHours: ['Mo-Fr 09:00-18:00'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT_INFO.phone,
      email: CONTACT_INFO.email,
      contactType: 'Customer Service',
      availableLanguage: ['English'],
      areaServed: 'Worldwide',
    },
  };

  return {
    organization,
    website,
    localBusiness,
  };
}

export function getProductStructuredData(product: any): ProductSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.metadata?.description || product.metadata?.short_description || '',
    image: product.metadata?.product_image?.imgix_url ? [
      `${product.metadata.product_image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`
    ] : [],
    brand: {
      '@type': 'Brand',
      name: SITE_CONFIG.name,
    },
    offers: {
      '@type': 'Offer',
      price: (product.metadata?.sale_price || product.metadata?.regular_price || 0).toString(),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString(),
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(), // 1 year from now
      seller: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    category: 'Mental Health Resources',
    audience: {
      '@type': 'Audience',
      audienceType: 'Adults seeking mental health support',
    },
  };
}

export function getBlogPostStructuredData(post: any): BlogPostSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metadata?.excerpt || '',
    image: post.metadata?.featured_image?.imgix_url ? [
      `${post.metadata.featured_image.imgix_url}?w=1200&h=630&fit=crop&auto=format,compress`
    ] : [],
    author: {
      '@type': 'Person',
      name: post.metadata?.author || 'TrueYou Therapy Team',
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
    datePublished: post.created_at,
    dateModified: post.modified_at,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/blog/${post.slug}`,
    },
    articleSection: 'Mental Health',
    keywords: SITE_CONFIG.keywords,
    inLanguage: 'en-US',
  };
}

export function getServiceStructuredData(): ServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Mental Health Consultation Services',
    description: 'Professional 1-on-1 consultation sessions with licensed mental health professionals',
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    areaServed: 'Worldwide',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE_CONFIG.url}/products/consultation`,
      serviceName: 'Online Video Consultation',
    },
    category: 'Mental Health Services',
    termsOfService: `${SITE_CONFIG.url}/terms`,
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    offers: {
      '@type': 'Offer',
      price: '145',
      priceCurrency: 'USD',
      description: '60-minute professional consultation session',
    },
  };
}

export function getFAQStructuredData(faqs: Array<{ question: string; answer: string }>): FAQPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}