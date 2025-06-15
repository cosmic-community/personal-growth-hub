'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  results: string;
}

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Mitchell',
      role: 'Marketing Executive',
      content: 'I was skeptical at first, but this video series completely changed my life. Within 2 weeks, I felt more confident than I had in years. The techniques are practical and actually work.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b792?w=100&h=100&fit=crop&auto=format,compress',
      results: 'Increased confidence by 300%'
    },
    {
      id: '2',
      name: 'David Chen',
      role: 'Small Business Owner',
      content: 'After struggling with anxiety for years, this program gave me the tools I needed. I can now handle stress without it overwhelming me. Best investment I have ever made!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format,compress',
      results: 'Reduced anxiety by 80%'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      role: 'Teacher & Mother',
      content: 'The relationship techniques transformed how I interact with my family and students. My marriage is stronger than ever, and I feel like a better parent and teacher.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format,compress',
      results: 'Improved relationships dramatically'
    },
    {
      id: '4',
      name: 'Marcus Johnson',
      role: 'Software Developer',
      content: 'I was stuck in a rut for months. This video series helped me break through my mental barriers and land my dream job. The mindset shifts are incredible.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format,compress',
      results: 'Achieved career breakthrough'
    },
    {
      id: '5',
      name: 'Lisa Thompson',
      role: 'Nurse',
      content: 'Working in healthcare is stressful, but these techniques helped me manage burnout and find joy in my work again. I feel mentally stronger and more resilient.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&auto=format,compress',
      results: 'Overcame workplace burnout'
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Real People, Real Results
          </h2>
          <p className="text-xl text-gray-600">
            Here's what our students are saying about their transformation:
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100 to-amber-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>

            <div className="relative z-10">
              {/* Quote icon */}
              <Quote className="w-12 h-12 text-teal-600 mb-6 opacity-50" />

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                ))}
              </div>

              {/* Testimonial content */}
              <blockquote className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed font-medium">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Results badge */}
              <div className="inline-block bg-gradient-to-r from-teal-600 to-amber-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-8">
                ✨ {currentTestimonial.results}
              </div>

              {/* Author info */}
              <div className="flex items-center">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-white shadow-lg"
                />
                <div>
                  <div className="font-bold text-gray-900 text-lg">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-gray-600">
                    {currentTestimonial.role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <Button
            onClick={goToPrevious}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            onClick={goToNext}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-teal-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-teal-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
            <div className="text-sm text-gray-500 mt-1">From 2,847 reviews</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-amber-600 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
            <div className="text-sm text-gray-500 mt-1">Life transformation within 30 days</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">15,000+</div>
            <div className="text-gray-600">Lives Changed</div>
            <div className="text-sm text-gray-500 mt-1">And counting every day</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;