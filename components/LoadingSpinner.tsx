'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spin' | 'pulse' | 'bounce' | 'dots' | 'bars';
  className?: string;
  color?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  variant = 'spin',
  className = '',
  color = 'currentColor'
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  if (variant === 'spin') {
    return (
      <motion.div
        className={cn('border-2 border-current border-t-transparent rounded-full', sizeClasses[size], className)}
        style={{ color }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
    );
  }

  if (variant === 'pulse') {
    return (
      <motion.div
        className={cn('rounded-full bg-current', sizeClasses[size], className)}
        style={{ color }}
        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    );
  }

  if (variant === 'bounce') {
    return (
      <motion.div
        className={cn('rounded-full bg-current', sizeClasses[size], className)}
        style={{ color }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
      />
    );
  }

  if (variant === 'dots') {
    return (
      <div className={cn('flex space-x-1', className)}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={cn('rounded-full bg-current', size === 'sm' ? 'w-1 h-1' : size === 'md' ? 'w-2 h-2' : size === 'lg' ? 'w-3 h-3' : 'w-4 h-4')}
            style={{ color }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'bars') {
    return (
      <div className={cn('flex space-x-1', className)}>
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className={cn('bg-current', size === 'sm' ? 'w-1 h-4' : size === 'md' ? 'w-1 h-6' : size === 'lg' ? 'w-2 h-8' : 'w-2 h-12')}
            style={{ color }}
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    );
  }

  return null;
}