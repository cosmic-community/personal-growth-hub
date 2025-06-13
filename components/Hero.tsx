'use client';

import { motion } from 'framer-motion';
import type { ProductCategory } from '@/types';
import CategoryCard from './CategoryCard';
import { Button } from './ui/Button';
import { CheckCircle } from 'lucide-react';

interface HeroProps {
  categories: ProductCategory[];
}

const trustIndicators = [
  'Confidential & Secure',
  'Licensed Professionals', 
  'Thousands Helped'
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Hero({ categories }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-primary/30 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-primary/10 rounded-full blur-lg animate-pulse-soft"></div>
      
      <div className="container relative z-10 section-padding">
        <motion.div 
          className="text-center mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
            variants={fadeInUp}
          >
            You deserve to be{' '}
            <span className="gradient-text">happy</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance"
            variants={fadeInUp}
          >
            What type of therapy are you looking for?
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={fadeInUp}
          >
            <Button size="lg" className="text-lg px-8 py-4">
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Category Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="text-center"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <p className="text-muted-foreground text-sm mb-6">
            We accept HSA/FSA for individual and Teen therapy
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
            {trustIndicators.map((indicator) => (
              <div key={indicator} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm">{indicator}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}