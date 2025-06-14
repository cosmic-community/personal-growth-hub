'use client';

import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { cn } from '@/lib/utils';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  period?: string;
  features: PricingFeature[];
  ctaText?: string;
  ctaLink?: string;
  isPopular?: boolean;
  isPremium?: boolean;
  className?: string;
  onSelect?: () => void;
}

export default function PricingCard({
  title,
  description,
  price,
  originalPrice,
  period = 'one-time',
  features,
  ctaText = 'Get Started',
  ctaLink,
  isPopular = false,
  isPremium = false,
  className = '',
  onSelect,
}: PricingCardProps) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'relative bg-card rounded-2xl border shadow-lg p-8 h-full flex flex-col',
        {
          'border-primary shadow-primary/20 scale-105': isPopular,
          'border-gradient-to-br from-purple-500 to-pink-500 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20': isPremium,
        },
        className
      )}
    >
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge variant="premium" className="px-4 py-1">
            <Star className="w-3 h-3 mr-1" />
            Most Popular
          </Badge>
        </div>
      )}

      {/* Premium badge */}
      {isPremium && (
        <div className="absolute -top-3 right-4">
          <Badge variant="gradient" className="px-3 py-1">
            <Zap className="w-3 h-3 mr-1" />
            Premium
          </Badge>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-6">{description}</p>
        
        {/* Pricing */}
        <div className="relative">
          {originalPrice && (
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-lg text-muted-foreground line-through">
                ${originalPrice}
              </span>
              <Badge variant="success" size="sm">
                {discount}% OFF
              </Badge>
            </div>
          )}
          <div className="flex items-baseline justify-center">
            <span className="text-4xl font-bold text-foreground">${price}</span>
            {period !== 'one-time' && (
              <span className="text-muted-foreground ml-1">/{period}</span>
            )}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="flex-1 mb-8">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Check 
                className={cn(
                  'w-5 h-5 mt-0.5 flex-shrink-0',
                  feature.included 
                    ? 'text-green-600' 
                    : 'text-muted-foreground opacity-50'
                )} 
              />
              <span 
                className={cn(
                  'text-sm',
                  feature.included 
                    ? 'text-foreground' 
                    : 'text-muted-foreground line-through'
                )}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <Button
        onClick={onSelect}
        className={cn(
          'w-full',
          isPopular && 'bg-primary hover:bg-primary/90',
          isPremium && 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
        )}
        size="lg"
      >
        {ctaText}
      </Button>

      {/* Guarantee */}
      <p className="text-center text-xs text-muted-foreground mt-4">
        30-day money-back guarantee
      </p>
    </motion.div>
  );
}