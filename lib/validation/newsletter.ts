export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validate email format
 */
export function validateEmail(email: string): ValidationResult {
  if (!email || typeof email !== 'string') {
    return {
      isValid: false,
      error: 'Email is required'
    };
  }

  const trimmedEmail = email.trim();
  
  if (trimmedEmail.length === 0) {
    return {
      isValid: false,
      error: 'Email is required'
    };
  }

  if (trimmedEmail.length > 254) {
    return {
      isValid: false,
      error: 'Email address is too long'
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return {
      isValid: false,
      error: 'Please enter a valid email address'
    };
  }

  return { isValid: true };
}

/**
 * Validate signup source
 */
export function validateSource(source: string): ValidationResult {
  if (!source || typeof source !== 'string') {
    return {
      isValid: false,
      error: 'Source is required'
    };
  }

  const validSources = [
    'website signup',
    'newsletter_signup',
    'footer',
    'popup', 
    'sidebar', 
    'homepage', 
    'blog', 
    'product_page'
  ];

  if (!validSources.includes(source)) {
    return {
      isValid: false,
      error: 'Invalid signup source'
    };
  }

  return { isValid: true };
}

/**
 * Sanitize email input
 */
export function sanitizeEmail(email: string): string {
  if (!email || typeof email !== 'string') {
    return '';
  }
  
  return email.trim().toLowerCase();
}

/**
 * Validate newsletter signup request
 */
export function validateNewsletterSignup(data: any): ValidationResult {
  if (!data || typeof data !== 'object') {
    return {
      isValid: false,
      error: 'Invalid request data'
    };
  }

  const emailValidation = validateEmail(data.email);
  if (!emailValidation.isValid) {
    return emailValidation;
  }

  if (data.source) {
    const sourceValidation = validateSource(data.source);
    if (!sourceValidation.isValid) {
      return sourceValidation;
    }
  }

  return { isValid: true };
}