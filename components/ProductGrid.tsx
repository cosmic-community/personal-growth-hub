'use client';

import { useState } from 'react';
import type { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'featured'>('featured');

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.title.localeCompare(b.title);
      case 'price':
        const priceA = a.metadata?.sale_price || a.metadata?.regular_price || 0;
        const priceB = b.metadata?.sale_price || b.metadata?.regular_price || 0;
        return priceA - priceB;
      case 'featured':
        const featuredA = a.metadata?.is_featured ? 1 : 0;
        const featuredB = b.metadata?.is_featured ? 1 : 0;
        return featuredB - featuredA;
      default:
        return 0;
    }
  });

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-secondary-600">No products found.</p>
      </div>
    );
  }

  return (
    <div>
      {/* Sort Controls */}
      <div className="flex items-center justify-between mb-8">
        <p className="text-secondary-600">
          Showing {products.length} product{products.length !== 1 ? 's' : ''}
        </p>
        
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-sm text-secondary-600">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'featured')}
            className="border border-secondary-200 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="featured">Featured</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}