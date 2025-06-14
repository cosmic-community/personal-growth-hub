export const SITE_CONFIG = {
  name: 'TrueYou Therapy',
  description: 'Transform your life with professional therapeutic resources and personalized consultation services.',
  url: 'https://trueyoutherapy.com',
  ogImage: '/og-image.jpg',
  author: 'TrueYou Therapy Team',
  keywords: [
    'personal growth',
    'therapy',
    'self-development',
    'mental health',
    'relationship tools',
    'youth resources',
    'digital products',
    'consultation services'
  ],
};

export const NAVIGATION_ITEMS = [
  {
    name: 'Products',
    href: '/products',
    hasDropdown: true,
    dropdownItems: [
      { name: 'All Products', href: '/products' },
      { name: 'Video Series', href: '/products/video-series' },
      { name: '1-on-1 Consultation', href: '/products/consultation' },
    ]
  },
  { name: 'Categories', href: '/categories' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/trueyoutherapy',
  facebook: 'https://facebook.com/trueyoutherapy',
  instagram: 'https://instagram.com/trueyoutherapy',
  linkedin: 'https://linkedin.com/company/trueyoutherapy',
  youtube: 'https://youtube.com/@trueyoutherapy',
};

export const CONTACT_INFO = {
  email: 'contact@trueyoutherapy.com',
  phone: '1-800-GROWTH (476-9848)',
  address: 'Available worldwide',
};

export const PRICING_TIERS = [
  {
    id: 'starter',
    name: 'Starter Package',
    description: 'Perfect for individuals beginning their growth journey',
    price: 29,
    period: 'one-time',
    features: [
      { text: 'Access to basic resources', included: true },
      { text: 'Email support', included: true },
      { text: 'Mobile app access', included: true },
      { text: '1-on-1 consultation', included: false },
      { text: 'Priority support', included: false },
    ],
  },
  {
    id: 'professional',
    name: 'Professional Package',
    description: 'Comprehensive tools for serious personal development',
    price: 95,
    originalPrice: 149,
    period: 'one-time',
    features: [
      { text: 'All starter features', included: true },
      { text: '5-hour video series', included: true },
      { text: 'Downloadable workbooks', included: true },
      { text: 'Lifetime updates', included: true },
      { text: '1-on-1 consultation', included: false },
    ],
    isPopular: true,
  },
  {
    id: 'premium',
    name: 'Premium Package',
    description: 'Complete transformation with personal guidance',
    price: 199,
    originalPrice: 299,
    period: 'one-time',
    features: [
      { text: 'All professional features', included: true },
      { text: '1-on-1 consultation (60 min)', included: true },
      { text: 'Personalized action plan', included: true },
      { text: 'Priority support', included: true },
      { text: 'Follow-up session', included: true },
    ],
    isPremium: true,
  },
];

export const TESTIMONIALS = [
  {
    id: '1',
    text: 'This platform changed my life. The resources are incredibly professional and effective.',
    author: 'Sarah Johnson',
    role: 'Marketing Director',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b792?w=100&h=100&fit=crop&auto=format,compress',
    rating: 5,
  },
  {
    id: '2',
    text: 'The best investment I've made in my personal development. Highly recommended!',
    author: 'Michael Chen',
    role: 'Software Engineer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format,compress',
    rating: 5,
  },
  {
    id: '3',
    text: 'Professional quality resources that actually work. The results speak for themselves.',
    author: 'Emily Rodriguez',
    role: 'Therapist',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format,compress',
    rating: 5,
  },
];

export const FAQ_ITEMS = [
  {
    question: 'What types of resources do you offer?',
    answer: 'We offer a comprehensive range of digital resources including video courses, downloadable worksheets, guided exercises, and personalized consultation services. All content is created by licensed professionals.',
  },
  {
    question: 'Are your resources suitable for teenagers?',
    answer: 'Yes, we have specific resources designed for youth and teenagers, covering topics like self-esteem, academic stress, social anxiety, and healthy relationship skills.',
  },
  {
    question: 'How do I access my purchased content?',
    answer: 'After purchase, you'll receive immediate access to your digital content through your personal dashboard. All materials are available for download and can be accessed anytime.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 30-day money-back guarantee. If you're not satisfied with your purchase, contact us within 30 days for a full refund.',
  },
  {
    question: 'Can I schedule multiple consultation sessions?',
    answer: 'Absolutely! While some packages include consultation sessions, you can always book additional sessions at any time through our booking system.',
  },
];

export const TRUST_INDICATORS = [
  'Confidential & Secure',
  'Licensed Professionals',
  'Thousands Helped',
  '30-Day Guarantee',
];

export const FEATURE_HIGHLIGHTS = [
  {
    title: 'Professional Quality',
    description: 'All content created by licensed therapists and certified coaches',
    icon: 'Award',
    color: 'teal' as const,
  },
  {
    title: 'Instant Access',
    description: 'Download and start using your resources immediately after purchase',
    icon: 'Zap',
    color: 'amber' as const,
  },
  {
    title: 'Lifetime Updates',
    description: 'Get access to improved versions and new content at no extra cost',
    icon: 'RefreshCw',
    color: 'blue' as const,
  },
  {
    title: 'Money-Back Guarantee',
    description: '30-day guarantee ensures your satisfaction with every purchase',
    icon: 'Shield',
    color: 'green' as const,
  },
];