import { createBucketClient } from '@cosmicjs/sdk';
import type { Product, ProductCategory, BlogPost, Review, Page } from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
});

// Fetch all product categories
export async function getProductCategories(): Promise<ProductCategory[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'product-categories' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as ProductCategory[];
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return [];
    }
    console.error('Error fetching product categories:', error);
    throw new Error('Failed to fetch product categories');
  }
}

// Alias for backward compatibility
export const getCategories = getProductCategories;

// Fetch products by category ID
export async function getProductsByCategory(categoryId: string): Promise<Product[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'products',
        'metadata.category': categoryId 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Product[];
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return [];
    }
    console.error('Error fetching products by category:', error);
    return [];
  }
}

// Fetch all products with category data
export async function getProducts(): Promise<Product[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'products' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Product[];
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return [];
    }
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products');
  }
}

// Fetch featured products
export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'products',
        'metadata.is_featured': true 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Product[];
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return [];
    }
    console.error('Error fetching featured products:', error);
    throw new Error('Failed to fetch featured products');
  }
}

// Fetch single product by slug
export async function getProduct(slug: string): Promise<Product | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'products',
        slug
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object as Product;
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return null;
    }
    console.error('Error fetching product:', error);
    throw new Error('Failed to fetch product');
  }
}

// Fetch blog posts
export async function getBlogPosts(limit?: number): Promise<BlogPost[]> {
  try {
    const query = cosmic.objects
      .find({ type: 'blog-posts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .sort('-created_at');
    
    if (limit) {
      query.limit(limit);
    }
    
    const response = await query;
    return response.objects as BlogPost[];
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return [];
    }
    console.error('Error fetching blog posts:', error);
    throw new Error('Failed to fetch blog posts');
  }
}

// Alias for backward compatibility
export const getPosts = getBlogPosts;

// Fetch single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'blog-posts',
        slug
      })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.object as BlogPost;
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return null;
    }
    console.error('Error fetching blog post:', error);
    throw new Error('Failed to fetch blog post');
  }
}

// Fetch featured reviews
export async function getFeaturedReviews(): Promise<Review[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'reviews',
        'metadata.is_featured': true 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Review[];
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return [];
    }
    console.error('Error fetching featured reviews:', error);
    throw new Error('Failed to fetch featured reviews');
  }
}

// Fetch page by slug
export async function getPage(slug: string): Promise<Page | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'pages',
        slug
      })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.object as Page;
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return null;
    }
    console.error('Error fetching page:', error);
    throw new Error('Failed to fetch page');
  }
}