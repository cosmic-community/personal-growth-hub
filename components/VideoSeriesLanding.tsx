'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import VideoPreview from './VideoPreview';
import BenefitsList from './BenefitsList';
import TestimonialsCarousel from './TestimonialsCarousel';
import SocialProofBanner from './SocialProofBanner';
import UrgencyTimer from './UrgencyTimer';
import ConversionOptimizedCTA from './ConversionOptimizedCTA';
import { CheckCircle, Star, Users, Clock, Shield, Award, Zap, Target } from 'lucide-react';

const VideoSeriesLanding: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToOrder = () => {
    document.getElementById('order-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      {/* Social Proof Banner */}
      <SocialProofBanner />
      
      {/* Hero Section */}
      <section className="relative px-4 pt-12 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-amber-600/5"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
              <Clock className="w-4 h-4 mr-2" />
              Limited Time Offer - Ends Soon!
            </div>
            
            <h1 className={`text-4xl md:text-6xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Transform Your Life in{' '}
              <span className="bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent">
                Just 30 Days
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Join over <strong>15,000 people</strong> who have already transformed their lives with our exclusive 
              <strong> 5-hour professional video series</strong> - created by licensed therapists and proven to work.
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Button 
                onClick={scrollToOrder}
                size="lg" 
                variant="teal" 
                className="text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Get Instant Access - $95 <span className="line-through text-teal-200 ml-2">$149</span>
              </Button>
              <div className="flex items-center text-gray-500">
                <Shield className="w-5 h-5 mr-2" />
                30-Day Money-Back Guarantee
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Instant Download
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Lifetime Access
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Professional Quality
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                15,000+ Success Stories
              </div>
            </div>
          </div>

          {/* Video Preview */}
          <VideoPreview />
        </div>
      </section>

      {/* Urgency Timer */}
      <UrgencyTimer />

      {/* Problem/Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Are You Tired of Feeling Stuck?
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Struggling with self-doubt and limiting beliefs
                </p>
                <p className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Feeling overwhelmed by life's challenges
                </p>
                <p className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Unable to break negative thought patterns
                </p>
                <p className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Lacking clear direction and purpose
                </p>
                <p className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Wasting money on therapy that doesn't work
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Imagine If You Could...
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  Wake up every day with confidence and clarity
                </p>
                <p className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  Transform negative thoughts into positive action
                </p>
                <p className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  Build unshakeable self-esteem and inner strength
                </p>
                <p className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  Create meaningful relationships and connections
                </p>
                <p className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  Live with purpose and achieve your dreams
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsList />

      {/* Social Proof Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Join 15,000+ People Who Have Already Transformed Their Lives
          </h2>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-teal-100">Lives Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-teal-100">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-teal-100">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5 Hours</div>
              <div className="text-teal-100">Life-Changing Content</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* What You Get Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Here's Everything You Get for Just $95
            </h2>
            <p className="text-xl text-gray-600">
              (Valued at over $400 - Save 76% Today Only!)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                5-Hour Professional Video Series
              </h3>
              <p className="text-gray-600 mb-4">
                Step-by-step transformation modules created by licensed therapists
              </p>
              <div className="text-right text-teal-600 font-semibold">
                Value: $149
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Downloadable Workbooks
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive exercises and tools to track your progress
              </p>
              <div className="text-right text-amber-600 font-semibold">
                Value: $79
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quick-Start Action Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Get results in the first 24 hours with our rapid implementation guide
              </p>
              <div className="text-right text-purple-600 font-semibold">
                Value: $49
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Lifetime Access & Updates
              </h3>
              <p className="text-gray-600 mb-4">
                Keep forever, plus receive all future updates at no extra cost
              </p>
              <div className="text-right text-green-600 font-semibold">
                Value: $97
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Private Community Access
              </h3>
              <p className="text-gray-600 mb-4">
                Connect with others on the same journey for support and accountability
              </p>
              <div className="text-right text-blue-600 font-semibold">
                Value: $29/month
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                30-Day Money-Back Guarantee
              </h3>
              <p className="text-gray-600 mb-4">
                Try it risk-free. If you're not completely satisfied, get your money back
              </p>
              <div className="text-right text-red-600 font-semibold">
                Priceless
              </div>
            </div>
          </div>

          <div className="text-center mt-12 p-8 bg-gradient-to-r from-teal-600 to-amber-600 text-white rounded-2xl">
            <div className="text-3xl font-bold mb-2">Total Value: $403+</div>
            <div className="text-xl mb-4">Your Price Today: Only $95</div>
            <div className="text-2xl font-bold">You Save: $308 (76% OFF)</div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <ConversionOptimizedCTA />

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How quickly will I see results?
              </h3>
              <p className="text-gray-600">
                Most people report feeling more confident and clear-headed within the first 24-48 hours. 
                Significant life changes typically occur within the first 2-3 weeks of consistent application.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Is this suitable for my specific situation?
              </h3>
              <p className="text-gray-600">
                Our video series addresses universal human challenges like self-doubt, anxiety, relationship issues, 
                and lack of direction. The techniques work regardless of your background, age, or current situation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What if I don't have time to watch 5 hours of videos?
              </h3>
              <p className="text-gray-600">
                The series is broken into digestible 15-30 minute modules. You can watch at your own pace, 
                and many people see results after just the first module. Plus, you have lifetime access.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What makes this different from free content online?
              </h3>
              <p className="text-gray-600">
                This is professional-grade content created by licensed therapists with proven results. 
                It's structured, comprehensive, and designed for real transformation - not just inspiration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">TrueYou Therapy</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional therapeutic resources designed to help you transform your life 
              and unlock your true potential.
            </p>
          </div>
          <div className="flex justify-center space-x-8 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms of Service</a>
            <a href="/contact" className="hover:text-white">Contact Us</a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-400">
            © 2024 TrueYou Therapy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VideoSeriesLanding;