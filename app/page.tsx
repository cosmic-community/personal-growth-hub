import { getProductCategories, getFeaturedProducts, getFeaturedReviews, getBlogPosts } from '@/lib/cosmic';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturedProducts from '@/components/FeaturedProducts';
import ReviewsSection from '@/components/ReviewsSection';
import BlogSection from '@/components/BlogSection';
import CTASection from '@/components/CTASection';
import TrustBadges from '@/components/TrustBadges';
import FAQ from '@/components/FAQ';
import SectionTransition from '@/components/SectionTransition';

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
      <Hero categories={categories} />
      
      <SectionTransition variant="wave" color="primary" />
      <div className="bg-emerald-50 dark:bg-emerald-950/30">
        <TrustBadges />
      </div>
      <SectionTransition variant="wave" color="primary" flip />
      
      <CategoryGrid categories={categories} />
      
      <SectionTransition variant="curve" color="secondary" />
      <div className="bg-slate-50 dark:bg-slate-950/30">
        <FeaturedProducts products={featuredProducts} />
      </div>
      <SectionTransition variant="curve" color="secondary" flip />
      
      <ReviewsSection reviews={reviews} />
      
      <SectionTransition variant="diagonal" color="accent" />
      <div className="bg-blue-50 dark:bg-blue-950/30">
        <FAQ />
      </div>
      <SectionTransition variant="diagonal" color="accent" flip />
      
      <BlogSection posts={blogPosts} />
      
      <SectionTransition variant="wave" color="primary" />
      <div className="bg-emerald-50 dark:bg-emerald-950/30">
        <CTASection />
      </div>
    </div>
  );
}