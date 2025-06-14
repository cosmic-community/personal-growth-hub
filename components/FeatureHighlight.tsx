'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureHighlightProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: 'teal' | 'amber' | 'blue' | 'purple' | 'green' | 'red';
  layout?: 'vertical' | 'horizontal';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function FeatureHighlight({
  icon: Icon,
  title,
  description,
  color = 'teal',
  layout = 'vertical',
  size = 'md',
  className = '',
}: FeatureHighlightProps) {
  const colors = {
    teal: {
      icon: 'text-teal-600 bg-teal-100 dark:bg-teal-900/30',
      title: 'text-teal-900 dark:text-teal-100',
    },
    amber: {
      icon: 'text-amber-600 bg-amber-100 dark:bg-amber-900/30',
      title: 'text-amber-900 dark:text-amber-100',
    },
    blue: {
      icon: 'text-blue-600 bg-blue-100 dark:bg-blue-900/30',
      title: 'text-blue-900 dark:text-blue-100',
    },
    purple: {
      icon: 'text-purple-600 bg-purple-100 dark:bg-purple-900/30',
      title: 'text-purple-900 dark:text-purple-100',
    },
    green: {
      icon: 'text-green-600 bg-green-100 dark:bg-green-900/30',
      title: 'text-green-900 dark:text-green-100',
    },
    red: {
      icon: 'text-red-600 bg-red-100 dark:bg-red-900/30',
      title: 'text-red-900 dark:text-red-100',
    },
  };

  const sizes = {
    sm: {
      icon: 'w-8 h-8 p-1.5',
      iconSize: 'w-5 h-5',
      title: 'text-sm font-semibold',
      description: 'text-xs',
    },
    md: {
      icon: 'w-12 h-12 p-3',
      iconSize: 'w-6 h-6',
      title: 'text-lg font-semibold',
      description: 'text-sm',
    },
    lg: {
      icon: 'w-16 h-16 p-4',
      iconSize: 'w-8 h-8',
      title: 'text-xl font-bold',
      description: 'text-base',
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        'group',
        layout === 'horizontal' ? 'flex items-start space-x-4' : 'text-center',
        className
      )}
    >
      {/* Icon */}
      <div className={cn(
        'rounded-lg flex items-center justify-center transition-transform group-hover:scale-110',
        colors[color].icon,
        sizes[size].icon,
        layout === 'vertical' && 'mx-auto mb-4'
      )}>
        <Icon className={sizes[size].iconSize} />
      </div>

      {/* Content */}
      <div className={layout === 'horizontal' ? 'flex-1' : ''}>
        <h3 className={cn(
          'mb-2 transition-colors',
          colors[color].title,
          sizes[size].title
        )}>
          {title}
        </h3>
        <p className={cn(
          'text-muted-foreground leading-relaxed',
          sizes[size].description
        )}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}