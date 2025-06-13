import { getProductCategories, getFeaturedProducts, getFeaturedReviews, getBlogPosts } from '@/lib/cosmic';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturedProducts from '@/components/FeaturedProducts';
import ReviewsSection from '@/components/ReviewsSection';
import BlogSection from '@/components/BlogSection';
import CTASection from '@/components/CTASection';
import TrustBadges from '@/components/TrustBadges';
import FAQ from '@/components/FAQ';

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
      <TrustBadges />
      <CategoryGrid categories={categories} />
      <FeaturedProducts products={featuredProducts} />
      <ReviewsSection reviews={reviews} />
      <FAQ />
      <BlogSection posts={blogPosts} />
      <CTASection />
    </div>
  );
}