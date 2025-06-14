import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getCategories, getProductsByCategory } from '@/lib/cosmic';
import ProductGrid from '@/components/ProductGrid';
import { ProductCategory, Product } from '@/types';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const categories = await getCategories();
    return categories.map((category) => ({
      slug: category.slug,
    }));
  } catch (error) {
    console.error('Error generating static params for categories:', error);
    return [];
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const categories = await getCategories();
    const category = categories.find((cat) => cat.slug === slug);
    
    if (!category) {
      return {
        title: 'Category Not Found - TrueYou Therapy',
        description: 'The requested category could not be found.',
      };
    }

    return {
      title: `${category.metadata?.name || category.title} - TrueYou Therapy`,
      description: category.metadata?.description || `Explore our ${category.title} resources for personal growth and development.`,
    };
  } catch (error) {
    return {
      title: 'Category - TrueYou Therapy',
      description: 'Personal development resources and tools.',
    };
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  
  let category: ProductCategory | null = null;
  let products: Product[] = [];

  try {
    const categories = await getCategories();
    category = categories.find((cat) => cat.slug === slug) || null;
    
    if (category) {
      products = await getProductsByCategory(category.id);
    }
  } catch (error) {
    console.error('Error fetching category data:', error);
  }

  // Handle default categories for common slugs
  if (!category) {
    const defaultCategories: Record<string, ProductCategory> = {
      'mindfulness-meditation': {
        id: 'mindfulness',
        title: 'Mindfulness & Meditation',
        slug: 'mindfulness-meditation',
        type_slug: 'product-categories',
        created_at: new Date().toISOString(),
        modified_at: new Date().toISOString(),
        metadata: {
          name: 'Mindfulness & Meditation',
          description: 'Discover inner peace and reduce stress with our comprehensive mindfulness and meditation resources. Learn techniques to stay present, manage anxiety, and develop emotional awareness.',
          image: {
            imgix_url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
            url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4'
          }
        }
      },
      'relationships-communication': {
        id: 'relationships',
        title: 'Relationships & Communication',
        slug: 'relationships-communication',
        type_slug: 'product-categories',
        created_at: new Date().toISOString(),
        modified_at: new Date().toISOString(),
        metadata: {
          name: 'Relationships & Communication',
          description: 'Build stronger, healthier relationships with proven communication techniques and relationship tools. Learn to express needs, resolve conflicts, and deepen connections.',
          image: {
            imgix_url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac',
            url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac'
          }
        }
      },
      'individual-coaching': {
        id: 'coaching',
        title: 'Individual Coaching',
        slug: 'individual-coaching',
        type_slug: 'product-categories',
        created_at: new Date().toISOString(),
        modified_at: new Date().toISOString(),
        metadata: {
          name: 'Individual Coaching',
          description: 'One-on-one coaching sessions and self-guided resources for personal development. Set goals, overcome obstacles, and create lasting positive change in your life.',
          image: {
            imgix_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
            url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
          }
        }
      },
      'relationship-tools': {
        id: 'tools',
        title: 'Relationship Tools',
        slug: 'relationship-tools',
        type_slug: 'product-categories',
        created_at: new Date().toISOString(),
        modified_at: new Date().toISOString(),
        metadata: {
          name: 'Relationship Tools',
          description: 'Practical tools and resources for improving relationships. Includes conversation guides, conflict resolution worksheets, and relationship assessment tools.',
          image: {
            imgix_url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac',
            url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac'
          }
        }
      },
      'youth-resources': {
        id: 'youth',
        title: 'Youth Resources',
        slug: 'youth-resources',
        type_slug: 'product-categories',
        created_at: new Date().toISOString(),
        modified_at: new Date().toISOString(),
        metadata: {
          name: 'Youth Resources',
          description: 'Age-appropriate resources for teenagers and young adults. Covers topics like identity development, peer relationships, academic stress, and future planning.',
          image: {
            imgix_url: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285',
            url: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285'
          }
        }
      }
    };

    category = defaultCategories[slug] || null;
  }

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-teal-600/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            {category.metadata?.image && (
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src={`${category.metadata.image.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
                  alt={category.metadata.name || category.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {category.metadata?.name || category.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {category.metadata?.description || `Explore our ${category.title} resources for personal growth and development.`}
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container">
          {products.length > 0 ? (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Available Resources</h2>
                <p className="text-muted-foreground">
                  Discover our curated collection of {category.metadata?.name || category.title} resources.
                </p>
              </div>
              <ProductGrid products={products} />
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Resources Coming Soon</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're working on adding new {category.metadata?.name || category.title} resources to our collection. 
                Check back soon or subscribe to our newsletter to be notified when new content is available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/products"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Browse All Products
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-semibold hover:bg-accent transition-colors"
                >
                  Request Custom Content
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore More Categories</h2>
            <p className="text-muted-foreground">
              Discover other areas of personal development that might interest you.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Mindfulness & Meditation', slug: 'mindfulness-meditation' },
              { name: 'Relationships & Communication', slug: 'relationships-communication' },
              { name: 'Individual Coaching', slug: 'individual-coaching' },
              { name: 'Relationship Tools', slug: 'relationship-tools' },
              { name: 'Youth Resources', slug: 'youth-resources' }
            ]
              .filter(cat => cat.slug !== slug)
              .map((relatedCategory) => (
                <a
                  key={relatedCategory.slug}
                  href={`/categories/${relatedCategory.slug}`}
                  className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium hover:bg-accent transition-colors"
                >
                  {relatedCategory.name}
                </a>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}