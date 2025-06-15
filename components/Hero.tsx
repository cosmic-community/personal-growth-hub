'use client';

import { motion } from 'framer-motion';
import KonamiEasterEgg from './KonamiEasterEgg';
import { Button } from './ui/Button';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const trustIndicators = [
  'Confidential & Secure',
  'Licensed Professionals', 
  'Thousands Helped'
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Konami Code Easter Egg */}
      <KonamiEasterEgg />
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-primary/5"></div>
      
      {/* Floating Elements with bolder accent colors */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-teal-500/40 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-amber-500/50 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-primary/25 rounded-full blur-lg animate-pulse-soft"></div>
      <div className="absolute top-1/3 right-1/4 w-14 h-14 bg-teal-500/35 rounded-full blur-lg animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      
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
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            You deserve to be{' '}
            <span className="gradient-text">happy</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            Professional mental health resources and personalized therapy consultations to help you thrive.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <Link href="/products">
              <Button size="lg" className="text-lg px-8 py-4">
                Explore Services
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="text-center"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        >
          <p className="text-muted-foreground text-sm mb-6">
            We accept HSA/FSA for individual and Teen therapy
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
            {trustIndicators.map((indicator, index) => (
              <div key={indicator} className="flex items-center gap-2">
                <CheckCircle size={16} className={`flex-shrink-0 ${
                  index === 0 ? 'text-teal-600' : 
                  index === 1 ? 'text-amber-600' : 'text-primary'
                }`} />
                <span className="text-sm">{indicator}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}