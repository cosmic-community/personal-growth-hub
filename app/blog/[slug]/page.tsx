import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cosmic } from '@/lib/cosmic';
import { BlogPost } from '@/types';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'blog-posts', slug })
      .props(['id', 'title', 'slug', 'content', 'metadata', 'created_at'])
      .depth(1);
    return response.object;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.metadata?.title || post.title} - Personal Growth Hub`,
    description: post.metadata?.excerpt || post.metadata?.description || 'Read this insightful article on personal development.',
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

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
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span>{post.metadata?.author}</span>
              <span className="mx-2">•</span>
              <span>{formatDate(post.created_at)}</span>
              <span className="mx-2">•</span>
              <span>{post.metadata?.read_time} min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
              {post.metadata?.title || post.title}
            </h1>
            {post.metadata?.excerpt && (
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {post.metadata.excerpt}
              </p>
            )}
          </div>

          {/* Featured Image */}
          {post.metadata?.featured_image?.imgix_url && (
            <div className="mb-12">
              <img
                src={`${post.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
                alt={post.title}
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg prose-secondary dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content || post.metadata?.content || '' }} />
          </div>

          {/* Author Bio */}
          {post.metadata?.author && (
            <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                About {post.metadata.author}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Licensed therapist and personal development expert with years of experience helping people transform their lives.
              </p>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}