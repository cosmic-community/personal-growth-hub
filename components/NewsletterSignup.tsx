'use client';

import { useState } from 'react';
import { Mail, Check, AlertCircle, Loader2 } from 'lucide-react';

interface NewsletterSignupProps {
  source?: string;
}

export function NewsletterSignup({ source = 'website signup' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;

    setIsLoading(true);
    setError(null);
    
    try {
      console.log('Submitting newsletter signup:', { email, source });
      
      const response = await fetch('/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          source: source
        }),
      });

      const data = await response.json();
      console.log('API response:', { status: response.status, data });

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setIsSubmitted(true);
      setEmail('');

      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err: any) {
      console.error('Newsletter signup error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred while subscribing. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <Check size={20} />
        <span className="font-medium">Thank you for subscribing to our newsletter!</span>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full pl-10 pr-4 py-3 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Email address"
            disabled={isLoading}
          />
        </div>
        <button 
          type="submit" 
          disabled={isLoading || !email.trim()}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap flex items-center gap-2 justify-center"
        >
          {isLoading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Subscribing...
            </>
          ) : (
            'Subscribe'
          )}
        </button>
      </form>

      {error && (
        <div className="mt-3 flex items-center gap-2 text-destructive bg-destructive/10 p-3 rounded-lg border border-destructive/20">
          <AlertCircle size={18} />
          <span className="text-sm">{error}</span>
        </div>
      )}
      
      <p className="text-xs text-muted-foreground mt-2 text-center">
        We respect your privacy and will never spam you.
      </p>
    </div>
  );
}