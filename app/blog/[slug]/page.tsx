import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getBlogPosts, getBlogPost } from '@/lib/cosmic';
import { BlogPost } from '@/types';
import { Clock, User, Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params for blog posts:', error);
    return [];
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const post = await getBlogPost(slug);
    
    if (!post) {
      return {
        title: 'Post Not Found - TrueYou Therapy Blog',
        description: 'The requested blog post could not be found.',
      };
    }

    return {
      title: `${post.title} - TrueYou Therapy Blog`,
      description: post.metadata?.excerpt || post.metadata?.content?.substring(0, 160) + '...' || 'Read the latest insights on personal development and mental health.',
      openGraph: {
        title: post.title,
        description: post.metadata?.excerpt || 'Personal development insights from TrueYou Therapy',
        images: post.metadata?.featured_image?.imgix_url ? [
          {
            url: `${post.metadata.featured_image.imgix_url}?w=1200&h=630&fit=crop&auto=format,compress`,
            width: 1200,
            height: 630,
            alt: post.title,
          }
        ] : [],
      },
    };
  } catch (error) {
    return {
      title: 'Blog Post - TrueYou Therapy',
      description: 'Personal development insights and resources.',
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  
  let post: BlogPost | null = null;

  try {
    post = await getBlogPost(slug);
  } catch (error) {
    console.error('Error fetching blog post:', error);
  }

  // Handle default blog posts for common slugs if not found in Cosmic
  if (!post) {
    const defaultPosts: Record<string, BlogPost> = {
      '5-mindfulness-techniques-busy-professionals': {
        id: '1',
        title: '5 Simple Mindfulness Techniques for Busy Professionals',
        slug: '5-mindfulness-techniques-busy-professionals',
        type_slug: 'blog-posts',
        created_at: '2024-01-15T10:00:00Z',
        modified_at: '2024-01-15T10:00:00Z',
        metadata: {
          title: '5 Simple Mindfulness Techniques for Busy Professionals',
          content: `
            <p>In today's fast-paced work environment, finding time for mindfulness can seem impossible. However, incorporating simple mindfulness techniques into your daily routine can significantly reduce stress and improve your overall well-being. Here are five practical techniques that busy professionals can use anywhere, anytime.</p>

            <h2>1. The 3-Minute Breathing Space</h2>
            <p>This technique, developed by mindfulness expert Jon Kabat-Zinn, requires just three minutes and can be done at your desk, in your car, or anywhere you need a quick reset.</p>
            <ul>
              <li><strong>Minute 1:</strong> Awareness - Notice what's happening in your mind and body right now</li>
              <li><strong>Minute 2:</strong> Gathering - Focus your attention on your breath</li>
              <li><strong>Minute 3:</strong> Expanding - Widen your awareness to include your whole body and surroundings</li>
            </ul>

            <h2>2. Mindful Transitions</h2>
            <p>Use the moments between meetings or tasks as opportunities for mindfulness. Before opening your laptop or entering a meeting room, take three conscious breaths and set an intention for the upcoming activity.</p>

            <h2>3. The STOP Technique</h2>
            <p>When you feel overwhelmed or stressed, use this acronym:</p>
            <ul>
              <li><strong>S</strong> - Stop what you're doing</li>
              <li><strong>T</strong> - Take a breath</li>
              <li><strong>O</strong> - Observe your thoughts, feelings, and surroundings</li>
              <li><strong>P</strong> - Proceed with awareness</li>
            </ul>

            <h2>4. Mindful Email Checking</h2>
            <p>Instead of constantly checking email throughout the day, designate specific times for email review. Before opening your inbox, take a moment to center yourself and approach your emails with intention rather than reaction.</p>

            <h2>5. Walking Meditation</h2>
            <p>Turn your walk to the coffee shop, parking lot, or even bathroom into a mindfulness practice. Focus on the sensation of your feet touching the ground, the rhythm of your steps, and the movement of your body through space.</p>

            <h2>Making It Stick</h2>
            <p>The key to building a sustainable mindfulness practice is consistency, not duration. Start with just one technique and practice it daily for a week before adding another. Remember, even 30 seconds of mindfulness is better than none at all.</p>

            <p>Research shows that regular mindfulness practice can reduce stress hormones, improve focus, and increase job satisfaction. By incorporating these simple techniques into your workday, you're investing in both your immediate well-being and long-term success.</p>
          `,
          excerpt: 'Discover practical mindfulness techniques that fit into your busy schedule and help reduce stress throughout your workday.',
          featured_image: {
            imgix_url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
            url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4'
          },
          author: 'Dr. Sarah Johnson',
          read_time: 5
        }
      },
      'science-habit-formation-lasting-change': {
        id: '2',
        title: 'The Science of Habit Formation: How to Build Lasting Change',
        slug: 'science-habit-formation-lasting-change',
        type_slug: 'blog-posts',
        created_at: '2024-01-12T14:30:00Z',
        modified_at: '2024-01-12T14:30:00Z',
        metadata: {
          title: 'The Science of Habit Formation: How to Build Lasting Change',
          content: `
            <p>Understanding how habits form is the key to creating lasting positive changes in your life. Research in neuroscience and psychology has revealed fascinating insights into the habit loop and how we can harness it for personal growth.</p>

            <h2>The Habit Loop</h2>
            <p>Every habit consists of three components, known as the habit loop:</p>
            <ol>
              <li><strong>Cue (Trigger):</strong> The environmental signal that initiates the behavior</li>
              <li><strong>Routine (Behavior):</strong> The actual behavior or action</li>
              <li><strong>Reward:</strong> The benefit or satisfaction gained from the behavior</li>
            </ol>

            <h2>The Neuroscience Behind Habits</h2>
            <p>When we repeat a behavior in the same context, our brains form neural pathways that make the behavior increasingly automatic. The basal ganglia, a region deep in the brain, takes over routine behaviors, freeing up the prefrontal cortex for more complex decision-making.</p>

            <h2>The 21-Day Myth</h2>
            <p>Contrary to popular belief, habits don't form in exactly 21 days. Research by Dr. Phillippa Lally found that it takes an average of 66 days for a new behavior to become automatic, with a range of 18 to 254 days depending on the complexity of the habit and individual differences.</p>

            <h2>Strategies for Building New Habits</h2>

            <h3>1. Start Small</h3>
            <p>Begin with the smallest version of your desired habit. Want to read more? Start with one page. Want to exercise? Start with one push-up. Small wins build momentum and confidence.</p>

            <h3>2. Stack Your Habits</h3>
            <p>Use existing habits as triggers for new ones. After I [existing habit], I will [new habit]. For example: "After I pour my morning coffee, I will write one journal entry."</p>

            <h3>3. Design Your Environment</h3>
            <p>Make good habits easier and bad habits harder by changing your environment. Want to eat healthier? Put fruits on the counter and hide junk food. Want to read more? Leave books visible and hide your phone.</p>

            <h3>4. Focus on Identity</h3>
            <p>Instead of focusing on what you want to achieve, focus on who you want to become. Ask yourself: "What would a healthy person do?" or "What would an organized person do?"</p>

            <h2>Breaking Bad Habits</h2>
            <p>Breaking bad habits is often harder than building new ones because the neural pathways are already established. The key is to identify the cue and reward, then substitute a different routine:</p>
            <ul>
              <li>Keep the same cue</li>
              <li>Keep the same reward</li>
              <li>Change the routine</li>
            </ul>

            <h2>The Role of Motivation vs. Discipline</h2>
            <p>Motivation gets you started, but systems and environment design keep you going. Don't rely on willpower alone – create systems that make success inevitable.</p>

            <h2>Tracking Progress</h2>
            <p>What gets measured gets managed. Track your habits using:</p>
            <ul>
              <li>Habit tracking apps</li>
              <li>Simple calendars with X's for completed days</li>
              <li>Journal entries</li>
              <li>Physical tokens or counters</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Building lasting habits is a skill that improves with practice. By understanding the science behind habit formation and applying evidence-based strategies, you can create positive changes that stick. Remember: you don't rise to the level of your goals, you fall to the level of your systems.</p>
          `,
          excerpt: 'Learn the psychological principles behind habit formation and discover evidence-based strategies for creating positive changes that stick.',
          featured_image: {
            imgix_url: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
            url: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b'
          },
          author: 'Dr. Michael Chen',
          read_time: 8
        }
      }
    };

    post = defaultPosts[slug] || null;
  }

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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-teal-600/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link 
                href="/blog"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Blog
              </Link>
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground mb-8">
                {post.metadata?.author && (
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{post.metadata.author}</span>
                  </div>
                )}
                
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{formatDate(post.created_at)}</span>
                </div>
                
                {post.metadata?.read_time && (
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{post.metadata.read_time} min read</span>
                  </div>
                )}
              </div>
              
              {post.metadata?.excerpt && (
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  {post.metadata.excerpt}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.metadata?.featured_image && (
        <section className="py-8">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={`${post.metadata.featured_image.imgix_url}?w=1200&h=675&fit=crop&auto=format,compress`}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
              {post.metadata?.content ? (
                <div dangerouslySetInnerHTML={{ __html: post.metadata.content }} />
              ) : (
                <div>
                  <p>This article is currently being prepared. Check back soon for the full content!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      {post.metadata?.author && (
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-background rounded-lg p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">About {post.metadata.author}</h3>
                    <p className="text-muted-foreground">
                      {post.metadata.author} is a licensed mental health professional specializing in evidence-based 
                      therapeutic approaches. With years of experience in clinical practice and content creation, 
                      they are passionate about making mental health resources accessible to everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Articles */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a href="/blog/overcoming-imposter-syndrome-therapist-guide" className="group">
                <div className="bg-muted rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-teal-600/20"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      Overcoming Imposter Syndrome: A Therapist's Guide
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      Understanding imposter syndrome and practical strategies to build genuine confidence.
                    </p>
                  </div>
                </div>
              </a>
              
              <a href="/blog/art-setting-boundaries-mental-health" className="group">
                <div className="bg-muted rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      The Art of Setting Boundaries: Protecting Your Mental Health
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      Learn how to set healthy boundaries in relationships and work.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                View All Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}