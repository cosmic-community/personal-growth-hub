'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { CheckCircle, Shield, Download, Users, Zap, Star, ArrowRight, Lock } from 'lucide-react';

const ConversionOptimizedCTA: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleOrderClick = () => {
    // In a real implementation, this would redirect to your payment processor
    // For demo purposes, we'll just scroll to show the CTA worked
    window.scrollTo({ top: 0, behavior: 'smooth' });
    alert('This would redirect to the secure checkout page. For demo purposes only.');
  };

  return (
    <section id="order-section" className="py-20 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-36 -translate-x-36"></div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl md:text-2xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Join the thousands who have already taken control of their future. 
            Your transformation starts the moment you click "Get Instant Access."
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main CTA Box */}
          <div className="bg-white/95 backdrop-blur-sm text-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl mb-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <CheckCircle className="w-4 h-4 mr-2" />
                Limited Time: Save 76% Today Only
              </div>
              
              <div className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">
                Only $95
                <span className="text-2xl md:text-3xl text-gray-500 line-through ml-4">$149</span>
              </div>
              
              <div className="text-lg text-gray-600 mb-8">
                Complete Video Series + All Bonuses • Lifetime Access
              </div>

              <Button
                onClick={handleOrderClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                size="lg"
                variant="teal"
                className={`text-xl px-12 py-6 mb-6 shadow-2xl transform transition-all duration-300 ${
                  isHovered ? 'scale-105 shadow-3xl' : ''
                }`}
              >
                <Download className="w-6 h-6 mr-3" />
                Get Instant Access Now
                <ArrowRight className={`w-6 h-6 ml-3 transition-transform duration-300 ${
                  isHovered ? 'translate-x-1' : ''
                }`} />
              </Button>

              <div className="flex items-center justify-center text-sm text-gray-500 mb-8">
                <Lock className="w-4 h-4 mr-2" />
                Secure 256-bit SSL encryption • Safe & secure checkout
              </div>
            </div>

            {/* What you get recap */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>5-Hour Professional Video Series ($149 value)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Downloadable Workbooks ($79 value)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Quick-Start Action Guide ($49 value)</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Lifetime Access & Updates ($97 value)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Private Community Access ($29/mo value)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>30-Day Money-Back Guarantee</span>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 border-t pt-6">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-green-500" />
                30-Day Guarantee
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-amber-500" />
                4.9/5 Star Rating
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-blue-500" />
                15,000+ Success Stories
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2 text-purple-500" />
                Instant Download
              </div>
            </div>
          </div>

          {/* Guarantee section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center">
            <Shield className="w-16 h-16 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              100% Risk-Free 30-Day Money-Back Guarantee
            </h3>
            <p className="text-teal-100 leading-relaxed">
              We're so confident you'll love this video series that we offer a full 30-day money-back guarantee. 
              If you're not completely satisfied with your transformation, simply email us and we'll refund 
              every penny - no questions asked. You have nothing to lose and everything to gain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionOptimizedCTA;