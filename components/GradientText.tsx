'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  gradient?: 'primary' | 'secondary' | 'rainbow' | 'sunset' | 'ocean' | 'forest';
  className?: string;
  animate?: boolean;
}

export default function GradientText({ 
  children, 
  gradient = 'primary', 
  className = '',
  animate = false 
}: GradientTextProps) {
  const gradients = {
    primary: 'bg-gradient-to-r from-teal-600 to-emerald-600',
    secondary: 'bg-gradient-to-r from-amber-600 to-orange-600',
    rainbow: 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600',
    sunset: 'bg-gradient-to-r from-orange-600 via-red-500 to-pink-600',
    ocean: 'bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-600',
    forest: 'bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600',
  };

  const content = (
    <span
      className={cn(
        gradients[gradient],
        'bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </span>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
}