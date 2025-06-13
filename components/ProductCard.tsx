'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, Clock, Users } from 'lucide-react';
import type { Product } from '@/types';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const regularPrice = product.metadata?.regular_price || 0;
  const salePrice = product.metadata?.sale_price;
  const hasDiscount = salePrice && salePrice < regularPrice;
  const imageUrl = product.metadata?.product_image?.imgix_url;
  const categoryName = typeof product.metadata?.category === 'object' 
    ? product.metadata.category.title 
    : '';
  
  const discountPercentage = hasDiscount 
    ? Math.round(((regularPrice - (salePrice || 0)) / regularPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
        {/* Image */}
        <div className="relative overflow-hidden">
          {imageUrl ? (
            <img
              src={`${imageUrl}?w=600&h=400&fit=crop&auto=format,compress`}
              alt={product.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-48 bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">No image available</span>
            </div>
          )}
          
          {hasDiscount && (
            <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-2 py-1 rounded-md text-xs font-medium">
              {discountPercentage}% OFF
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {categoryName && (
            <span className="text-xs text-primary font-medium uppercase tracking-wide mb-2">
              {categoryName}
            </span>
          )}
          
          <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
            {product.metadata?.short_description || 'Professional-grade resource for personal growth and development.'}
          </p>

          {/* Meta info */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Clock size={12} />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={12} />
              <span>1000+ Users</span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex items-center" role="img" aria-label="5 star rating">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className="text-yellow-400 fill-current" 
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">(4.9)</span>
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2">
              {hasDiscount ? (
                <>
                  <span className="text-lg font-bold text-primary">
                    ${salePrice}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    ${regularPrice}
                  </span>
                </>
              ) : (
                <span className="text-lg font-bold">
                  ${regularPrice}
                </span>
              )}
            </div>
            
            <Button asChild variant="default" size="sm">
              <Link href={`/products/${product.slug}`}>
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}