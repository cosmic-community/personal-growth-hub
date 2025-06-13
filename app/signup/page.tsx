'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/AuthProvider';

interface Quote {
  text: string;
  author: string;
}

const inspirationalQuotes: Quote[] = [
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb"
  },
  {
    text: "Your future self will thank you for starting today.",
    author: "Unknown"
  },
  {
    text: "Every expert was once a beginner.",
    author: "Helen Hayes"
  },
  {
    text: "The journey of self-discovery starts with a single step.",
    author: "Unknown"
  },
  {
    text: "Courage is not the absence of fear, but action in spite of it.",
    author: "Mark Twain"
  },
  {
    text: "You are capable of amazing things.",
    author: "Unknown"
  },
  {
    text: "Growth happens when you step outside your comfort zone.",
    author: "Unknown"
  },
  {
    text: "Your potential is endless.",
    author: "Unknown"
  }
];

const defaultQuote: Quote = {
  text: "Your journey to growth starts here.",
  author: "Unknown"
};

function getRandomQuote(): Quote {
  if (inspirationalQuotes.length === 0) {
    return defaultQuote;
  }
  const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);
  return inspirationalQuotes[randomIndex] ?? defaultQuote;
}

export default function SignupPage(): JSX.Element {
  const [currentQuote, setCurrentQuote] = useState<Quote>(defaultQuote);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const router = useRouter();
  const { signup } = useAuth();

  useEffect(() => {
    setCurrentQuote(getRandomQuote());
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      await signup({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
      });
      
      router.push('/profile');
    } catch (error) {
      setErrors({
        submit: error instanceof Error ? error.message : 'An error occurred during signup'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean): void => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Quote and Image */}
      <div className="hidden lg:flex lg:flex-1 relative bg-gradient-to-br from-primary to-teal-600 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?w=800&h=1200&fit=crop&auto=format,compress"
            alt="Person starting their journey"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-teal-600/80" />
        
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white">
          <div className="max-w-md text-center">
            <blockquote className="text-2xl font-light leading-relaxed mb-6">
              "{currentQuote.text}"
            </blockquote>
            <cite className="text-lg font-medium opacity-90">
              — {currentQuote.author}
            </cite>
          </div>
          
          <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-white/10 animate-pulse" />
          <div className="absolute bottom-12 right-12 w-16 h-16 rounded-full bg-white/5 animate-pulse delay-1000" />
          <div className="absolute top-1/3 right-8 w-8 h-8 rounded-full bg-white/20 animate-pulse delay-500" />
        </div>
      </div>

      {/* Right side - Signup Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold gradient-text">Create Your Account</h1>
            <p className="mt-2 text-muted-foreground">
              Start your personal growth journey today
            </p>
          </div>

          <Card className="p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-background text-foreground ${
                      errors.firstName ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="First name"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-background text-foreground ${
                      errors.lastName ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="Last name"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-background text-foreground ${
                    errors.email ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className={`w-full px-3 py-2 pr-10 border rounded-md shadow-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-background text-foreground ${
                      errors.password ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className={`w-full px-3 py-2 pr-10 border rounded-md shadow-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-background text-foreground ${
                      errors.confirmPassword ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Terms Agreement */}
              <div>
                <div className="flex items-start">
                  <input
                    id="agreeTerms"
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-border rounded mt-1"
                  />
                  <label htmlFor="agreeTerms" className="ml-2 block text-sm text-muted-foreground">
                    I agree to the{' '}
                    <a href="#" className="text-teal-600 hover:text-teal-500 font-medium">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-teal-600 hover:text-teal-500 font-medium">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                {errors.agreeTerms && (
                  <p className="mt-1 text-sm text-red-600">{errors.agreeTerms}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </Button>

              {errors.submit && (
                <p className="text-sm text-red-600 text-center">{errors.submit}</p>
              )}
            </form>

            {/* Sign In Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link href="/login" className="font-medium text-teal-600 hover:text-teal-500">
                  Sign in
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}