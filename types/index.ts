// Re-export all types from other type files
export * from './newsletter';

// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  title: string;
  slug: string;
  created_at: string;
  modified_at: string;
  metadata: Record<string, any>;
}

// Product types
export interface Product extends CosmicObject {
  metadata: {
    name: string;
    description: string;
    price: number;
    image?: {
      imgix_url: string;
      alt?: string;
    };
    category?: ProductCategory;
    is_featured?: boolean;
    features?: string[];
    testimonials?: Review[];
  };
}

export interface ProductCategory extends CosmicObject {
  metadata: {
    name: string;
    description?: string;
    image?: {
      imgix_url: string;
      alt?: string;
    };
  };
}

// Blog post types
export interface BlogPost extends CosmicObject {
  metadata: {
    title: string;
    excerpt: string;
    content: string;
    featured_image?: {
      imgix_url: string;
      alt?: string;
    };
    author?: string;
    category?: string;
    tags?: string[];
    published_date: string;
  };
}

// Review types
export interface Review extends CosmicObject {
  metadata: {
    reviewer_name: string;
    reviewer_title?: string;
    reviewer_image?: {
      imgix_url: string;
      alt?: string;
    };
    rating: number;
    review_text: string;
    product?: Product;
    is_featured?: boolean;
  };
}

// Page types
export interface Page extends CosmicObject {
  metadata: {
    title: string;
    content: string;
    seo_title?: string;
    seo_description?: string;
    featured_image?: {
      imgix_url: string;
      alt?: string;
    };
  };
}