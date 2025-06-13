import { getPosts } from '@/lib/cosmic';
import { Metadata } from 'next';
import Link from 'next/link';
import { BlogPost } from '@/types';

export const metadata: Metadata = {
  title: 'Blog - Personal Growth Hub',
  description: 'Read our latest articles on personal development, mental health, mindfulness, and life improvement strategies.',
};

export default async function BlogPage() {
  let posts: BlogPost[] = [];

  try {
    posts = await getPosts();
  } catch (error) {
    console.log('No blog posts found in Cosmic, using default content');
  }

  // Default blog posts if none exist in Cosmic
  const defaultPosts: BlogPost[] = [
    {
      id: '1',
      title: '5 Simple Mindfulness Techniques for Busy Professionals',
      slug: '5-mindfulness-techniques-busy-professionals',
      created_at: '2024-01-15T10:00:00Z',
      modified_at: '2024-01-15T10:00:00Z',
      metadata: {
        title: '5 Simple Mindfulness Techniques for Busy Professionals',
        content: 'Discover practical mindfulness techniques that fit into your busy schedule and help reduce stress throughout your workday.',
        excerpt: 'Discover practical mindfulness techniques that fit into your busy schedule and help reduce stress throughout your workday.',
        featured_image: {
          imgix_url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
          url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4'
        },
        author: 'Dr. Sarah Johnson',
        read_time: 5
      }
    },
    {
      id: '2',
      title: 'The Science of Habit Formation: How to Build Lasting Change',
      slug: 'science-habit-formation-lasting-change',
      created_at: '2024-01-12T14:30:00Z',
      modified_at: '2024-01-12T14:30:00Z',
      metadata: {
        title: 'The Science of Habit Formation: How to Build Lasting Change',
        content: 'Learn the psychological principles behind habit formation and discover evidence-based strategies for creating positive changes that stick.',
        excerpt: 'Learn the psychological principles behind habit formation and discover evidence-based strategies for creating positive changes that stick.',
        featured_image: {
          imgix_url: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
          url: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b'
        },
        author: 'Dr. Michael Chen',
        read_time: 8
      }
    },
    {
      id: '3',
      title: 'Overcoming Imposter Syndrome: A Therapist\'s Guide',
      slug: 'overcoming-imposter-syndrome-therapist-guide',
      created_at: '2024-01-10T09:15:00Z',
      modified_at: '2024-01-10T09:15:00Z',
      metadata: {
        title: 'Overcoming Imposter Syndrome: A Therapist\'s Guide',
        content: 'Understanding imposter syndrome and practical strategies to build genuine confidence and self-worth in your personal and professional life.',
        excerpt: 'Understanding imposter syndrome and practical strategies to build genuine confidence and self-worth in your personal and professional life.',
        featured_image: {
          imgix_url: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285',
          url: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285'
        },
        author: 'Dr. Emily Rodriguez',
        read_time: 6
      }
    },
    {
      id: '4',
      title: 'The Art of Setting Boundaries: Protecting Your Mental Health',
      slug: 'art-setting-boundaries-mental-health',
      created_at: '2024-01-08T16:45:00Z',
      modified_at: '2024-01-08T16:45:00Z',
      metadata: {
        title: 'The Art of Setting Boundaries: Protecting Your Mental Health',
        content: 'Learn how to set healthy boundaries in relationships and work to protect your mental health and improve your quality of life.',
        excerpt: 'Learn how to set healthy boundaries in relationships and work to protect your mental health and improve your quality of life.',
        featured_image: {
          imgix_url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac',
          url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac'
        },
        author: 'Dr. James Wilson',
        read_time: 7
      }
    },
    {
      id: '5',
      title: 'Managing Anxiety in Uncertain Times: Evidence-Based Strategies',
      slug: 'managing-anxiety-uncertain-times-strategies',
      created_at: '2024-01-05T11:20:00Z',
      modified_at: '2024-01-05T11:20:00Z',
      metadata: {
        title: 'Managing Anxiety in Uncertain Times: Evidence-Based Strategies',
        content: 'Practical, research-backed techniques for managing anxiety and building resilience during challenging and uncertain periods.',
        excerpt: 'Practical, research-backed techniques for managing anxiety and building resilience during challenging and uncertain periods.',
        featured_image: {
          imgix_url: 'https://images.unsplash.com/photo-1499728603263-13726abce5b1',
          url: 'https://images.unsplash.com/photo-1499728603263-13726abce5b1'
        },
        author: 'Dr. Lisa Thompson',
        read_time: 9
      }
    },
    {
      id: '6',
      title: 'The Power of Gratitude: More Than Just Positive Thinking',
      slug: 'power-gratitude-positive-thinking',
      created_at: '2024-01-03T13:10:00Z',
      modified_at: '2024-01-03T13:10:00Z',
      metadata: {
        title: 'The Power of Gratitude: More Than Just Positive Thinking',
        content: 'Explore the scientific benefits of gratitude practice and learn practical ways to incorporate thankfulness into your daily routine.',
        excerpt: 'Explore the scientific benefits of gratitude practice and learn practical ways to incorporate thankfulness into your daily routine.',
        featured_image: {
          imgix_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
          url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
        },
        author: 'Dr. Amanda Foster',
        read_time: 5
      }
    }
  ];

  const displayPosts = posts.length > 0 ? posts : defaultPosts;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container-width section-padding py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
            Personal Growth Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Insights, strategies, and expert advice to support your personal development journey. 
            All articles are written by licensed professionals and based on evidence-based practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {displayPosts.map((post, index) => (
            <article 
              key={post.id} 
              className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`${index === 0 ? 'md:flex' : ''}`}>
                <div className={`${index === 0 ? 'md:w-1/2' : ''}`}>
                  <img
                    src={`${post.metadata?.featured_image?.imgix_url}?w=${index === 0 ? '800' : '400'}&h=${index === 0 ? '400' : '300'}&fit=crop&auto=format,compress`}
                    alt={post.title}
                    className="w-full h-48 md:h-64 object-cover"
                  />
                </div>
                <div className={`p-6 ${index === 0 ? 'md:w-1/2' : ''}`}>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span>{post.metadata?.author}</span>
                    <span className="mx-2">•</span>
                    <span>{formatDate(post.created_at)}</span>
                    <span className="mx-2">•</span>
                    <span>{post.metadata?.read_time} min read</span>
                  </div>
                  <h2 className={`font-bold text-secondary-900 dark:text-white mb-3 ${
                    index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'
                  }`}>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.metadata?.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-primary-50 dark:bg-gray-800 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
            Never Miss an Article
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Get our latest personal development insights delivered straight to your inbox. 
            Join thousands of readers who start their week with our thoughtful content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}