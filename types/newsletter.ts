// Newsletter and subscriber type definitions

export interface NewsletterSubscriber {
  id: string;
  title: string;
  slug: string;
  created_at: string;
  modified_at: string;
  metadata: {
    email: string;
    signup_date: string;
    source: string;
    status: 'active' | 'unsubscribed' | 'pending';
  };
}

export interface SubscriberStats {
  total: number;
  active: number;
  unsubscribed: number;
  recentSignups: number;
}

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export interface CosmicError extends Error {
  status?: number;
  code?: string;
  details?: any;
}

export interface NewsletterSignupData {
  email: string;
  source?: string;
}