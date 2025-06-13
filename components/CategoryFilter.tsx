'use client';

import { useState } from 'react';
import type { ProductCategory } from '@/types';

interface CategoryFilterProps {
  categories: ProductCategory[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            selectedCategory === 'all'
              ? 'bg-primary-600 text-white'
              : 'bg-white text-secondary-600 border border-secondary-200 hover:bg-secondary-50'
          }`}
        >
          All Products
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.slug)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === category.slug
                ? 'bg-primary-600 text-white'
                : 'bg-white text-secondary-600 border border-secondary-200 hover:bg-secondary-50'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>
    </div>
  );
}