'use client';

import React from 'react';
import { CheckCircle, Brain, Heart, Target, Users, Zap, Shield } from 'lucide-react';

const BenefitsList: React.FC = () => {
  const benefits = [
    {
      icon: Brain,
      title: 'Rewire Your Mindset',
      description: 'Learn powerful cognitive techniques used by professional therapists to eliminate limiting beliefs and negative thought patterns.',
      color: 'teal'
    },
    {
      icon: Heart,
      title: 'Build Emotional Intelligence',
      description: 'Master your emotions, develop self-awareness, and create deeper, more meaningful relationships with others.',
      color: 'red'
    },
    {
      icon: Target,
      title: 'Achieve Your Goals',
      description: 'Discover the proven framework that helps you set, pursue, and achieve meaningful goals that align with your values.',
      color: 'amber'
    },
    {
      icon: Users,
      title: 'Improve Relationships',
      description: 'Transform how you communicate, resolve conflicts, and build trust with family, friends, and colleagues.',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Boost Confidence',
      description: 'Develop unshakeable self-confidence and inner strength that helps you tackle any challenge life throws at you.',
      color: 'purple'
    },
    {
      icon: Shield,
      title: 'Stress-Proof Your Life',
      description: 'Learn practical techniques to manage stress, anxiety, and overwhelm while maintaining your mental well-being.',
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      teal: 'bg-teal-100 text-teal-600 border-teal-200',
      red: 'bg-red-100 text-red-600 border-red-200',
      amber: 'bg-amber-100 text-amber-600 border-amber-200',
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      green: 'bg-green-100 text-green-600 border-green-200'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600 border-gray-200';
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What You'll Achieve in Just 30 Days
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven video series addresses the core areas that matter most for lasting personal transformation.
            Here's what thousands of our students have achieved:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-2xl ${getColorClasses(benefit.color)} flex items-center justify-center mb-6 border-2`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Results Timeline */}
        <div className="bg-gradient-to-r from-teal-50 to-amber-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Your Transformation Timeline
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                24h
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">First 24 Hours</h4>
              <p className="text-sm text-gray-600">Immediate clarity and motivation boost</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                7d
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Week 1</h4>
              <p className="text-sm text-gray-600">New positive habits forming</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                14d
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Week 2</h4>
              <p className="text-sm text-gray-600">Noticeable confidence increase</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                30d
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Month 1</h4>
              <p className="text-sm text-gray-600">Complete mindset transformation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsList;