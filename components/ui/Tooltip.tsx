'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
  className?: string;
  delayDuration?: number;
}

export function Tooltip({
  children,
  content,
  side = 'top',
  align = 'center',
  className,
  delayDuration = 300,
}: TooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout>();

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delayDuration);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      {isVisible && (
        <div
          className={cn(
            'absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-md shadow-lg whitespace-nowrap animate-in fade-in-0 zoom-in-95 duration-200',
            {
              'bottom-full left-1/2 transform -translate-x-1/2 mb-2': side === 'top' && align === 'center',
              'bottom-full left-0 mb-2': side === 'top' && align === 'start',
              'bottom-full right-0 mb-2': side === 'top' && align === 'end',
              'top-full left-1/2 transform -translate-x-1/2 mt-2': side === 'bottom' && align === 'center',
              'top-full left-0 mt-2': side === 'bottom' && align === 'start',
              'top-full right-0 mt-2': side === 'bottom' && align === 'end',
              'right-full top-1/2 transform -translate-y-1/2 mr-2': side === 'left' && align === 'center',
              'right-full top-0 mr-2': side === 'left' && align === 'start',
              'right-full bottom-0 mr-2': side === 'left' && align === 'end',
              'left-full top-1/2 transform -translate-y-1/2 ml-2': side === 'right' && align === 'center',
              'left-full top-0 ml-2': side === 'right' && align === 'start',
              'left-full bottom-0 ml-2': side === 'right' && align === 'end',
            },
            className
          )}
        >
          {content}
          {/* Arrow */}
          <div
            className={cn('absolute w-2 h-2 bg-gray-900 transform rotate-45', {
              'top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2': side === 'top' && align === 'center',
              'top-full left-2 transform -translate-y-1/2': side === 'top' && align === 'start',
              'top-full right-2 transform -translate-y-1/2': side === 'top' && align === 'end',
              'bottom-full left-1/2 transform -translate-x-1/2 translate-y-1/2': side === 'bottom' && align === 'center',
              'bottom-full left-2 transform translate-y-1/2': side === 'bottom' && align === 'start',
              'bottom-full right-2 transform translate-y-1/2': side === 'bottom' && align === 'end',
              'left-full top-1/2 transform translate-x-1/2 -translate-y-1/2': side === 'left',
              'right-full top-1/2 transform -translate-x-1/2 -translate-y-1/2': side === 'right',
            })}
          />
        </div>
      )}
    </div>
  );
}