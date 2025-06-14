'use client';

import { useState, useEffect, useCallback } from 'react';

interface UseExitIntentOptions {
  delay?: number; // Minimum time on page before showing popup (in milliseconds)
  aggressive?: boolean; // Show on any mouse leave event
  sensitivity?: number; // Sensitivity for detecting exit intent
}

interface UseExitIntentReturn {
  isTriggered: boolean;
  dismiss: () => void;
  reset: () => void;
}

export function useExitIntent(options: UseExitIntentOptions = {}): UseExitIntentReturn {
  const { delay = 10000, aggressive = false, sensitivity = 20 } = options;
  
  const [isTriggered, setIsTriggered] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [hasBeenOnPageLongEnough, setHasBeenOnPageLongEnough] = useState(false);

  // Check if popup was already shown in this session
  useEffect(() => {
    const hasShown = sessionStorage.getItem('exitIntentPopupShown');
    if (hasShown) {
      setIsDismissed(true);
    }
  }, []);

  // Set timer for minimum time on page
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasBeenOnPageLongEnough(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // Don't trigger if already dismissed or not enough time has passed
    if (isDismissed || !hasBeenOnPageLongEnough || isTriggered) {
      return;
    }

    // Check if mouse is leaving from the top of the page (typical exit intent)
    const shouldTrigger = aggressive || 
      (e.clientY <= sensitivity && e.clientX >= 0);

    if (shouldTrigger) {
      setIsTriggered(true);
    }
  }, [isDismissed, hasBeenOnPageLongEnough, isTriggered, aggressive, sensitivity]);

  const dismiss = useCallback(() => {
    setIsTriggered(false);
    setIsDismissed(true);
    // Remember that popup was shown in this session
    sessionStorage.setItem('exitIntentPopupShown', 'true');
  }, []);

  const reset = useCallback(() => {
    setIsTriggered(false);
    setIsDismissed(false);
    setHasBeenOnPageLongEnough(false);
    sessionStorage.removeItem('exitIntentPopupShown');
  }, []);

  // Add event listener for mouse leave
  useEffect(() => {
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseLeave]);

  return {
    isTriggered,
    dismiss,
    reset,
  };
}