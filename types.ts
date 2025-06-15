// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type_slug?: string;
  created_at: string;
  modified_at: string;
}

// Product Categories
interface ProductCategory extends CosmicObject {
  type_slug: 'product-categories';
  metadata: {
    name: string;
    description?: string;
    subtitle?: string;
    background_color?: string;
    icon?: {
      url: string;
      imgix_url: string;
    };
    image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Products
interface Product extends CosmicObject {
  type_slug: 'products';
  metadata: {
    name: string;
    description: string;
    short_description?: string;
    regular_price: number;
    sale_price?: number;
    product_image?: {
      url: string;
      imgix_url: string;
    };
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    category?: ProductCategory | string;
    download_file?: {
      url: string;
    };
    is_featured?: boolean;
  };
}

// Blog Posts
interface BlogPost extends CosmicObject {
  type_slug: 'blog-posts';
  metadata: {
    title: string;
    content: string;
    excerpt?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    author?: string;
    publish_date?: string;
    read_time?: number;
    tags?: string[];
  };
}

// Reviews
interface Review extends CosmicObject {
  type_slug: 'reviews';
  metadata: {
    customer_name: string;
    review_text: string;
    rating?: {
      key: string;
      value: string;
    };
    product?: Product;
    location?: string;
    is_featured?: boolean;
  };
}

// Pages
interface Page extends CosmicObject {
  type_slug: 'pages';
  metadata: {
    title: string;
    content: string;
    page_type?: {
      key: string;
      value: string;
    };
  };
}

// API Response types
interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards
function isProduct(obj: CosmicObject): obj is Product {
  return obj.type_slug === 'products';
}

function isProductCategory(obj: CosmicObject): obj is ProductCategory {
  return obj.type_slug === 'product-categories';
}

function isBlogPost(obj: CosmicObject): obj is BlogPost {
  return obj.type_slug === 'blog-posts';
}

function isReview(obj: CosmicObject): obj is Review {
  return obj.type_slug === 'reviews';
}

function isPage(obj: CosmicObject): obj is Page {
  return obj.type_slug === 'pages';
}

export type {
  CosmicObject,
  Product,
  ProductCategory,
  BlogPost,
  Review,
  Page,
  CosmicResponse,
};

export {
  isProduct,
  isProductCategory,
  isBlogPost,
  isReview,
  isPage,
};