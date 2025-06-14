'use client';

import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'particles' | 'waves' | 'gradient' | 'geometric';
  className?: string;
}

export default function AnimatedBackground({ variant = 'particles', className = '' }: AnimatedBackgroundProps) {
  if (variant === 'particles') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * 100 + '%'],
              x: [null, Math.random() * 100 + '%'],
              scale: [null, Math.random() * 0.5 + 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'waves') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(52, 211, 153, 0.1)" />
              <stop offset="100%" stopColor="rgba(52, 211, 153, 0.05)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,400 C300,300 600,500 1200,400 L1200,800 L0,800 Z"
            fill="url(#wave-gradient)"
            initial={{ d: "M0,400 C300,300 600,500 1200,400 L1200,800 L0,800 Z" }}
            animate={{
              d: [
                "M0,400 C300,300 600,500 1200,400 L1200,800 L0,800 Z",
                "M0,450 C300,350 600,550 1200,450 L1200,800 L0,800 Z",
                "M0,400 C300,300 600,500 1200,400 L1200,800 L0,800 Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'gradient') {
    return (
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 ${className}`}
        animate={{
          background: [
            'linear-gradient(45deg, rgba(52, 211, 153, 0.1), transparent, rgba(161, 98, 7, 0.1))',
            'linear-gradient(45deg, rgba(161, 98, 7, 0.1), transparent, rgba(52, 211, 153, 0.1))',
            'linear-gradient(45deg, rgba(52, 211, 153, 0.1), transparent, rgba(161, 98, 7, 0.1))',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    );
  }

  if (variant === 'geometric') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-primary/10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            initial={{ rotate: 0, scale: 0.5, opacity: 0.3 }}
            animate={{
              rotate: 360,
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>
    );
  }

  return null;
}