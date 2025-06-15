import { getProductCategories, getFeaturedProducts, getFeaturedReviews, getBlogPosts } from '@/lib/cosmic';
import { generateSEOMetadata } from '@/lib/seo';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturedProducts from '@/components/FeaturedProducts';
import ReviewsSection from '@/components/ReviewsSection';
import BlogSection from '@/components/BlogSection';
import CTASection from '@/components/CTASection';
import TrustBadges from '@/components/TrustBadges';
import FAQ from '@/components/FAQ';
import SectionTransition from '@/components/SectionTransition';
import { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Professional Mental Health Resources & Licensed Therapy Consultations',
  description: 'Transform your mental health with evidence-based digital resources, expert video courses, and personalized consultations with licensed therapists. Trusted by thousands worldwide.',
  keywords: [
    'online therapy resources',
    'mental health consultation',
    'licensed therapist',
    'digital therapy tools',
    'evidence-based therapy',
    'personal development',
    'mental wellness programs',
    'therapeutic video courses',
    'anxiety management',
    'depression support',
    'relationship counseling',
    'self-help therapy materials'
  ],
  type: 'website',
  url: '/',
});

export default async function HomePage() {
  // Fetch all data in parallel for better performance
  const [categories, featuredProducts, reviews, blogPosts] = await Promise.all([
    getProductCategories(),
    getFeaturedProducts(),
    getFeaturedReviews(),
    getBlogPosts(3),
  ]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with primary keywords */}
      <section itemScope itemType="https://schema.org/WebPage">
        <Hero categories={categories} />
      </section>
      
      <SectionTransition variant="wave" color="primary" />
      <section className="bg-emerald-50 dark:bg-emerald-950/30" aria-labelledby="trust-indicators">
        <h2 id="trust-indicators" className="sr-only">Trust Indicators and Certifications</h2>
        <TrustBadges />
      </section>
      <SectionTransition variant="wave" color="primary" flip />
      
      {/* Category Section with semantic markup */}
      <section aria-labelledby="therapy-categories" itemScope itemType="https://schema.org/ItemList">
        <h2 id="therapy-categories" className="sr-only">Mental Health Therapy Categories</h2>
        <CategoryGrid categories={categories} />
      </section>
      
      <SectionTransition variant="curve" color="secondary" />
      <section className="bg-slate-50 dark:bg-slate-950/30" aria-labelledby="featured-products">
        <h2 id="featured-products" className="sr-only">Featured Mental Health Products and Services</h2>
        <FeaturedProducts products={featuredProducts} />
      </section>
      <SectionTransition variant="curve" color="secondary" flip />
      
      {/* Reviews Section for social proof */}
      <section aria-labelledby="client-reviews" itemScope itemType="https://schema.org/Organization">
        <h2 id="client-reviews" className="sr-only">Client Reviews and Testimonials</h2>
        <ReviewsSection reviews={reviews} />
      </section>
      
      <SectionTransition variant="diagonal" color="accent" />
      <section className="bg-blue-50 dark:bg-blue-950/30" aria-labelledby="frequently-asked-questions">
        <h2 id="frequently-asked-questions" className="sr-only">Frequently Asked Questions About Our Mental Health Services</h2>
        <FAQ />
      </section>
      <SectionTransition variant="diagonal" color="accent" flip />
      
      {/* Blog Section for content marketing */}
      <section aria-labelledby="mental-health-blog">
        <h2 id="mental-health-blog" className="sr-only">Latest Mental Health Articles and Resources</h2>
        <BlogSection posts={blogPosts} />
      </section>
      
      <SectionTransition variant="wave" color="primary" />
      <section className="bg-emerald-50 dark:bg-emerald-950/30" aria-labelledby="call-to-action">
        <h2 id="call-to-action" className="sr-only">Start Your Mental Health Journey Today</h2>
        <CTASection />
      </section>
    </div>
  );
}