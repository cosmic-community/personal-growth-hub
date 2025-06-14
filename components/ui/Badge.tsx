import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'premium' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  pulse?: boolean;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', pulse = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          {
            // Variants
            'border-transparent bg-primary text-primary-foreground': variant === 'default',
            'border-transparent bg-secondary text-secondary-foreground': variant === 'secondary',
            'border-transparent bg-destructive text-destructive-foreground': variant === 'destructive',
            'text-foreground': variant === 'outline',
            'border-transparent bg-green-500 text-white': variant === 'success',
            'border-transparent bg-yellow-500 text-white': variant === 'warning',
            'border-transparent bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg': variant === 'premium',
            'border-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white shadow-lg': variant === 'gradient',
            
            // Sizes
            'px-2 py-0.5 text-xs': size === 'sm',
            'px-2.5 py-0.5 text-sm': size === 'md',
            'px-3 py-1 text-base': size === 'lg',
            
            // Animation
            'animate-pulse': pulse,
          },
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };