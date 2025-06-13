import { getCategories } from '@/lib/cosmic';
import CategoryCard from '@/components/CategoryCard';
import { Metadata } from 'next';
import { ProductCategory } from '@/types';

export const metadata: Metadata = {
  title: 'Categories - Personal Growth Hub',
  description: 'Explore our categories of personal development resources including mindfulness, relationships, career growth, and more.',
};

export default async function CategoriesPage() {
  let categories: ProductCategory[] = [];

  try {
    categories = await getCategories();
  } catch (error) {
    console.log('No categories found in Cosmic, using default categories');
  }

  // Default categories if none exist in Cosmic
  const defaultCategories: ProductCategory[] = [
    {
      id: '1',
      title: 'Mindfulness & Meditation',
      slug: 'mindfulness-meditation',
      type_slug: 'categories',
      created_at: '2024-01-01T00:00:00Z',
      modified_at: '2024-01-01T00:00:00Z',
      metadata: {
        name: 'Mindfulness & Meditation',
        description: 'Discover inner peace and reduce stress with our comprehensive mindfulness and meditation resources.',
        image: {
          imgix_url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
          url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4'
        }
      }
    },
    {
      id: '2',
      title: 'Relationships & Communication',
      slug: 'relationships-communication',
      type_slug: 'categories',
      created_at: '2024-01-01T00:00:00Z',
      modified_at: '2024-01-01T00:00:00Z',
      metadata: {
        name: 'Relationships & Communication',
        description: 'Build stronger, healthier relationships with proven communication techniques and relationship tools.',
        image: {
          imgix_url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac',
          url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac'
        }
      }
    },
    {
      id: '3',
      title: 'Career & Professional Growth',
      slug: 'career-professional-growth',
      type_slug: 'categories',
      created_at: '2024-01-01T00:00:00Z',
      modified_at: '2024-01-01T00:00:00Z',
      metadata: {
        name: 'Career & Professional Growth',
        description: 'Advance your career and develop professional skills with our expert-designed resources.',
        image: {
          imgix_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
          url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
        }
      }
    },
    {
      id: '4',
      title: 'Anxiety & Stress Management',
      slug: 'anxiety-stress-management',
      type_slug: 'categories',
      created_at: '2024-01-01T00:00:00Z',
      modified_at: '2024-01-01T00:00:00Z',
      metadata: {
        name: 'Anxiety & Stress Management',
        description: 'Learn effective techniques to manage anxiety and stress, and build resilience for life challenges.',
        image: {
          imgix_url: 'https://images.unsplash.com/photo-1499728603263-13726abce5b1',
          url: 'https://images.unsplash.com/photo-1499728603263-13726abce5b1'
        }
      }
    },
    {
      id: '5',
      title: 'Self-Confidence & Self-Esteem',
      slug: 'self-confidence-esteem',
      type_slug: 'categories',
      created_at: '2024-01-01T00:00:00Z',
      modified_at: '2024-01-01T00:00:00Z',
      metadata: {
        name: 'Self-Confidence & Self-Esteem',
        description: 'Build unshakeable confidence and develop a positive self-image with our empowering resources.',
        image: {
          imgix_url: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285',
          url: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285'
        }
      }
    },
    {
      id: '6',
      title: 'Goal Setting & Achievement',
      slug: 'goal-setting-achievement',
      type_slug: 'categories',
      created_at: '2024-01-01T00:00:00Z',
      modified_at: '2024-01-01T00:00:00Z',
      metadata: {
        name: 'Goal Setting & Achievement',
        description: 'Turn your dreams into reality with proven goal-setting strategies and achievement frameworks.',
        image: {
          imgix_url: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
          url: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b'
        }
      }
    }
  ];

  const displayCategories = categories.length > 0 ? categories : defaultCategories;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container-width section-padding py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
            Browse Categories
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive collection of personal development resources, 
            organized by topic to help you find exactly what you need for your growth journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're constantly adding new categories and resources. Let us know what topics you'd like to see!
            </p>
            <a 
              href="mailto:support@personalgrowth.com" 
              className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}