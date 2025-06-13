import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ProductCategory } from '@/types';

interface CategoryCardProps {
  category: ProductCategory;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const backgroundColor = category.metadata?.background_color || '#4a5568';
  const iconUrl = category.metadata?.icon?.imgix_url;
  const subtitle = category.metadata?.subtitle || '';

  return (
    <Link href={`/categories/${category.slug}`}>
      <div 
        className="category-card h-96 relative group"
        style={{ backgroundColor }}
      >
        {/* Background Image */}
        {iconUrl && (
          <div className="absolute inset-0">
            <img
              src={`${iconUrl}?w=600&h=800&fit=crop&auto=format,compress`}
              alt={category.title}
              className="w-full h-full object-cover"
            />
            <div className="gradient-overlay"></div>
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-2">
              {category.title}
            </h3>
            <p className="text-lg opacity-90 mb-4">
              {subtitle}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm opacity-75">
              {category.metadata?.description?.substring(0, 50)}...
            </span>
            <ArrowRight 
              size={24} 
              className="transition-transform group-hover:translate-x-1" 
            />
          </div>
        </div>
      </div>
    </Link>
  );
}