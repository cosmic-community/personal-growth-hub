'use client';

import React, { useState } from 'react';
import { Modal } from './ui/Modal';
import { Sparkles, Zap, Brain, Code, Rocket, ArrowRight, Play, CheckCircle } from 'lucide-react';

interface CosmicShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CosmicShowcaseModal({ isOpen, onClose }: CosmicShowcaseModalProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Start with AI",
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      description: "Tell Cosmic AI what kind of website you want to build",
      image: "/api/placeholder/600/400",
      content: "Simply describe your vision: 'I want a personal growth website with blog, products, and coaching services'"
    },
    {
      title: "AI Generates Structure",
      icon: <Sparkles className="w-8 h-8 text-blue-500" />,
      description: "Watch as AI creates your content model, pages, and structure",
      image: "/api/placeholder/600/400",
      content: "Cosmic AI analyzes your requirements and builds the perfect content architecture automatically"
    },
    {
      title: "Choose Your Design",
      icon: <Code className="w-8 h-8 text-green-500" />,
      description: "Select from AI-generated designs or customize your own",
      image: "/api/placeholder/600/400",
      content: "Pick from beautiful, responsive designs tailored to your industry and brand"
    },
    {
      title: "Deploy Instantly",
      icon: <Rocket className="w-8 h-8 text-orange-500" />,
      description: "Your website goes live in minutes, not weeks",
      image: "/api/placeholder/600/400",
      content: "One-click deployment to Vercel, Netlify, or any hosting platform"
    }
  ];

  const features = [
    { text: "AI-powered content generation", icon: <CheckCircle className="w-5 h-5 text-green-500" /> },
    { text: "No-code content management", icon: <CheckCircle className="w-5 h-5 text-green-500" /> },
    { text: "Built-in SEO optimization", icon: <CheckCircle className="w-5 h-5 text-green-500" /> },
    { text: "Responsive design system", icon: <CheckCircle className="w-5 h-5 text-green-500" /> },
    { text: "Real-time collaboration", icon: <CheckCircle className="w-5 h-5 text-green-500" /> },
    { text: "One-click deployment", icon: <CheckCircle className="w-5 h-5 text-green-500" /> }
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      title="Built with Cosmic AI"
    >
      <div className="p-6">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <Zap className="w-3 h-3 text-yellow-900" />
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            This Website Was Built in Minutes
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See how Cosmic's AI-powered platform can help you create professional websites 
            like this one in just a few clicks. No coding required.
          </p>
        </div>

        {/* Interactive Demo */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              How It Works
            </h4>
            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStep 
                      ? 'bg-purple-600' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Current Step */}
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0">
                {steps[currentStep]?.icon}
              </div>
              <div className="flex-1">
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {steps[currentStep]?.title}
                </h5>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {steps[currentStep]?.description}
                </p>
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {steps[currentStep]?.content}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {currentStep + 1} of {steps.length}
              </span>
              <button
                onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                disabled={currentStep === steps.length - 1}
                className="px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:hover:bg-purple-600"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
            Everything You Need to Build Amazing Websites
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                {feature.icon}
                <span className="text-gray-700 dark:text-gray-300">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-center text-white">
          <h4 className="text-xl font-bold mb-2">Ready to Build Your Website?</h4>
          <p className="mb-4 opacity-90">
            Join thousands of creators who've built their dream websites with Cosmic AI
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.cosmicjs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Building Free
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="https://www.cosmicjs.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </a>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            "I built my entire personal coaching website in under 30 minutes. 
            Cosmic AI understood exactly what I needed and delivered beyond my expectations."
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            - Sarah M., Life Coach
          </p>
        </div>
      </div>
    </Modal>
  );
}