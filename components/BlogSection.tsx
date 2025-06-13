import Link from 'next/link';
import { Calendar, User } from 'lucide-react';
import type { BlogPost } from '@/types';

interface BlogSectionProps {
  posts: BlogPost[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-secondary-50">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Latest Insights & Tips
          </h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto mb-8">
            Evidence-based articles to support your personal growth journey
          </p>
          <Link href="/blog" className="btn-secondary">
            Read All Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="card group hover:shadow-large transition-shadow">
              {/* Featured Image */}
              {post.metadata?.featured_image?.imgix_url && (
                <div className="mb-4 overflow-hidden rounded-xl">
                  <img
                    src={`${post.metadata.featured_image.imgix_url}?w=600&h=300&fit=crop&auto=format,compress`}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              )}

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-secondary-600 text-sm mb-4 line-clamp-3">
                  {post.metadata?.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center text-xs text-secondary-500 space-x-4">
                  {post.metadata?.author && (
                    <div className="flex items-center">
                      <User size={12} className="mr-1" />
                      {post.metadata.author}
                    </div>
                  )}
                  {post.metadata?.publish_date && (
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {formatDate(post.metadata.publish_date)}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}