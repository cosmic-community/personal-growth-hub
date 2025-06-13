import Link from 'next/link';
import { Star } from 'lucide-react';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const regularPrice = product.metadata?.regular_price || 0;
  const salePrice = product.metadata?.sale_price;
  const hasDiscount = salePrice && salePrice < regularPrice;
  const imageUrl = product.metadata?.product_image?.imgix_url;
  const categoryName = typeof product.metadata?.category === 'object' 
    ? product.metadata.category.title 
    : '';

  return (
    <div className="card group hover:shadow-large transition-all duration-300">
      {/* Image */}
      <div className="relative mb-4 overflow-hidden rounded-xl">
        {imageUrl ? (
          <img
            src={`${imageUrl}?w=600&h=400&fit=crop&auto=format,compress`}
            alt={product.title}
            className="w-full h-48 object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-48 bg-secondary-100 flex items-center justify-center">
            <span className="text-secondary-400">No image</span>
          </div>
        )}
        
        {hasDiscount && (
          <div className="absolute top-3 left-3 bg-accent-500 text-white px-2 py-1 rounded-lg text-sm font-medium">
            Save ${regularPrice - (salePrice || 0)}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        {categoryName && (
          <span className="text-xs text-primary-600 font-medium uppercase tracking-wide">
            {categoryName}
          </span>
        )}
        
        <h3 className="text-lg font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
          {product.title}
        </h3>
        
        <p className="text-secondary-600 text-sm mb-4 line-clamp-2">
          {product.metadata?.short_description}
        </p>

        {/* Rating (placeholder - would come from reviews) */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className="text-yellow-400 fill-current" 
              />
            ))}
          </div>
          <span className="text-sm text-secondary-500 ml-2">(4.9)</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {hasDiscount ? (
              <>
                <span className="text-lg font-bold text-primary-600">
                  ${salePrice}
                </span>
                <span className="text-sm text-secondary-400 line-through">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-secondary-900">
                ${regularPrice}
              </span>
            )}
          </div>
          
          <Link 
            href={`/products/${product.slug}`}
            className="btn-primary text-sm"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}