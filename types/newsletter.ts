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
    status: string;
  };
}

export interface SubscriberStats {
  total: number;
  active: number;
  unsubscribed: number;
  recentSignups: number;
}

export interface NewsletterSignupRequest {
  email: string;
  source?: string;
}

export interface NewsletterSignupResponse {
  success: boolean;
  message: string;
  subscriber?: NewsletterSubscriber;
}

export enum SubscriberStatus {
  ACTIVE = 'active',
  UNSUBSCRIBED = 'unsubscribed',
  PENDING = 'pending'
}

export enum SignupSource {
  NEWSLETTER_SIGNUP = 'newsletter_signup',
  FOOTER = 'footer',
  POPUP = 'popup',
  SIDEBAR = 'sidebar',
  HOMEPAGE = 'homepage',
  BLOG = 'blog',
  PRODUCT_PAGE = 'product_page'
}