'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Sparkles, Heart } from 'lucide-react';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA'
];

export default function KonamiEasterEgg() {
  const [keySequence, setKeySequence] = useState<string[]>([]);
  const [isActive, setIsActive] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.code;
      
      setKeySequence(prev => {
        const newSequence = [...prev, key];
        
        // Keep only the last 10 keys (length of Konami code)
        if (newSequence.length > KONAMI_CODE.length) {
          newSequence.shift();
        }
        
        // Check if the sequence matches the Konami code
        if (newSequence.length === KONAMI_CODE.length) {
          const matches = newSequence.every((k, i) => k === KONAMI_CODE[i]);
          if (matches && !isActive) {
            setIsActive(true);
            setShowMessage(true);
            
            // Hide message after 5 seconds
            setTimeout(() => {
              setShowMessage(false);
            }, 5000);
            
            // Reset after 10 seconds
            setTimeout(() => {
              setIsActive(false);
              setKeySequence([]);
            }, 10000);
          }
        }
        
        return newSequence;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActive]);

  return (
    <>
      {/* Background effect when active */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-50"
          >
            {/* Floating hearts and stars */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: window.innerHeight + 50,
                  rotate: 0,
                  scale: 0
                }}
                animate={{ 
                  y: -50,
                  rotate: 360,
                  scale: [0, 1, 0],
                  x: Math.random() * window.innerWidth
                }}
                transition={{ 
                  duration: 3 + Math.random() * 2,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 3
                }}
                className="absolute"
              >
                {i % 3 === 0 ? (
                  <Heart className="text-pink-500 w-6 h-6" fill="currentColor" />
                ) : i % 3 === 1 ? (
                  <Star className="text-yellow-500 w-6 h-6" fill="currentColor" />
                ) : (
                  <Sparkles className="text-purple-500 w-6 h-6" />
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success message */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
          >
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-6 rounded-xl shadow-2xl text-center max-w-md">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: 3 }}
              >
                <h2 className="text-2xl font-bold mb-2">🎉 Easter Egg Found! 🎉</h2>
                <p className="text-lg mb-2">You discovered the secret!</p>
                <p className="text-sm opacity-90">
                  "The journey of self-discovery begins with a single step... or in this case, a secret code!"
                </p>
              </motion.div>
              
              <motion.div
                className="mt-4 text-xs opacity-75"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                Code: "KONAMI" ⬆⬆⬇⬇⬅➡⬅➡BA
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle indicator when active */}
      <AnimatePresence>
        {isActive && !showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed bottom-4 right-4 z-40 pointer-events-none"
          >
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-2 rounded-full">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}