import { getProducts, getProductCategories } from '@/lib/cosmic';
import { Metadata } from 'next';
import ProductGrid from '@/components/ProductGrid';
import CategoryFilter from '@/components/CategoryFilter';

export const metadata: Metadata = {
  title: 'Digital Products - Personal Growth Hub',
  description: 'Browse our complete collection of professional digital resources for personal development, relationship improvement, and youth growth.',
};

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getProductCategories(),
  ]);

  return (
    <div className="min-h-screen bg-secondary-50 py-12">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Digital Products
          </h1>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Professional-grade resources created by licensed therapists and coaches
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilter categories={categories} />

        {/* Products Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
}