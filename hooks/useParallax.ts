'use client';

import { useCallback, useEffect, useState } from 'react';

interface UseParallaxOptions {
  speed?: number;
  offset?: number;
}

export function useParallax(options: UseParallaxOptions = {}) {
  const { speed = 0.5, offset = 0 } = options;
  const [transform, setTransform] = useState(0);

  const updateTransform = useCallback(() => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * speed + offset;
    setTransform(parallax);
  }, [speed, offset]);

  useEffect(() => {
    window.addEventListener('scroll', updateTransform);
    updateTransform(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', updateTransform);
    };
  }, [updateTransform]);

  return transform;
}