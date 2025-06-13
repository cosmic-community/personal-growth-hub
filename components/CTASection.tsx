import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function CTASection() {
  const benefits = [
    'Instant access to all resources',
    'Professional-grade content',
    'Money-back guarantee',
    'Lifetime updates included'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-600 dark:to-primary-700 text-gray-900 dark:text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-gray-900 dark:border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-gray-900 dark:border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-gray-900 dark:border-white rounded-full"></div>
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands who have found their path to happiness and personal growth
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-left">
                <CheckCircle size={20} className="mr-3 text-green-600 dark:text-green-300 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products" 
              className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Products
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-primary-600 transition-colors"
            >
              Learn More
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="mt-8 text-sm opacity-75">
            <p>Trusted by 10,000+ people worldwide • 30-day money-back guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
}