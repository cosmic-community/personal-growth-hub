import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'premium';
  inputSize?: 'sm' | 'md' | 'lg' | 'xl';
  hasError?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type, 
    variant = 'default',
    inputSize = 'md',
    hasError = false,
    leftIcon,
    rightIcon,
    ...props 
  }, ref) => {
    return (
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            'flex w-full rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200',
            {
              // Variants
              'border-input bg-background': variant === 'default',
              'border-2 border-primary/20 bg-primary/5 focus-visible:border-primary': variant === 'outline',
              'border-0 bg-muted/50 focus-visible:bg-background': variant === 'ghost',
              'border-2 border-gradient-to-r from-teal-500 to-amber-500 bg-gradient-to-r from-teal-50 to-amber-50 dark:from-teal-950/30 dark:to-amber-950/30': variant === 'premium',
              
              // Sizes
              'h-8 px-2 py-1 text-xs': inputSize === 'sm',
              'h-10 px-3 py-2': inputSize === 'md',
              'h-12 px-4 py-3 text-base': inputSize === 'lg',
              'h-14 px-6 py-4 text-lg': inputSize === 'xl',
              
              // Error state
              'border-red-500 ring-red-500 focus-visible:ring-red-500': hasError,
              
              // Icon padding
              'pl-10': leftIcon && inputSize === 'md',
              'pl-12': leftIcon && inputSize === 'lg',
              'pl-14': leftIcon && inputSize === 'xl',
              'pr-10': rightIcon && inputSize === 'md',
              'pr-12': rightIcon && inputSize === 'lg',
              'pr-14': rightIcon && inputSize === 'xl',
            },
            className
          )}
          ref={ref}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };