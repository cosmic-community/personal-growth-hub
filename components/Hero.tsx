import type { ProductCategory } from '@/types';
import CategoryCard from './CategoryCard';

interface HeroProps {
  categories: ProductCategory[];
}

export default function Hero({ categories }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 hero-pattern min-h-screen flex items-center">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-accent-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container-width section-padding py-20 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-900 mb-6 text-balance">
            You deserve to be{' '}
            <span className="text-gradient">happy</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto text-balance">
            What type of therapy are you looking for?
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-secondary-500 text-sm mb-4">
            We accept HSA/FSA for individual and Teen therapy
          </p>
          <div className="flex items-center justify-center space-x-8 text-secondary-400">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm">Confidential & Secure</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm">Licensed Professionals</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm">Thousands Helped</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}