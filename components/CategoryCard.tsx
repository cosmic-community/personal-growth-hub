'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ProductCategory } from '@/types';

interface CategoryCardProps {
  category: ProductCategory;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const backgroundColor = category.metadata?.background_color || '#475569';
  const iconUrl = category.metadata?.icon?.imgix_url;
  const subtitle = category.metadata?.subtitle || '';

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Link 
        href={`/categories/${category.slug}`}
        className="block h-96 rounded-2xl overflow-hidden relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        style={{ backgroundColor }}
      >
        {/* Background Image */}
        {iconUrl && (
          <div className="absolute inset-0">
            <img
              src={`${iconUrl}?w=600&h=800&fit=crop&auto=format,compress`}
              alt={category.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/40 to-black/70"></div>
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
          <div className="flex-1 flex flex-col justify-center">
            <motion.h3 
              className="text-3xl font-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {category.title}
            </motion.h3>
            <motion.p 
              className="text-lg opacity-90 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {subtitle}
            </motion.p>
          </div>

          <motion.div 
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-sm opacity-75 line-clamp-2 max-w-[200px]">
              {category.metadata?.description}
            </span>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-amber-600/80 transition-colors">
              <ArrowRight 
                size={20} 
                className="transition-transform group-hover:translate-x-1" 
              />
            </div>
          </motion.div>
        </div>

        {/* Hover overlay with accent color */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Link>
    </motion.div>
  );
}