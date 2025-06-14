'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageOptimizedProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  quality?: number;
  fit?: 'crop' | 'max' | 'scale' | 'fill';
  loading?: 'lazy' | 'eager';
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export default function ImageOptimized({
  src,
  alt,
  width,
  height,
  className = '',
  quality = 85,
  fit = 'crop',
  loading = 'lazy',
  placeholder,
  onLoad,
  onError,
}: ImageOptimizedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Construct optimized URL if it's from Cosmic/imgix
  const getOptimizedSrc = () => {
    if (src.includes('imgix.cosmicjs.com') || src.includes('imgix')) {
      const params = new URLSearchParams();
      if (width) params.set('w', width.toString());
      if (height) params.set('h', height.toString());
      params.set('fit', fit);
      params.set('auto', 'format,compress');
      params.set('q', quality.toString());
      
      return `${src}?${params.toString()}`;
    }
    return src;
  };

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
      <div className={cn('bg-muted flex items-center justify-center', className)}>
        <span className="text-muted-foreground text-sm">Failed to load image</span>
      </div>
    );
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {isLoading && placeholder && (
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
          style={{ backgroundImage: `url(${placeholder})` }}
        />
      )}
      
      {isLoading && !placeholder && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}

      <img
        src={getOptimizedSrc()}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          className
        )}
      />
    </div>
  );
}