import Link from 'next/link';
import type { Product } from '@/types';
import ProductCard from './ProductCard';

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-secondary-50">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Featured Resources
          </h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto mb-8">
            Our most popular tools and courses, trusted by thousands
          </p>
          <Link href="/products" className="btn-secondary">
            View All Products
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}