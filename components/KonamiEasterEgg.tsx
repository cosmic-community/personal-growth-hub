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
      // Prevent the command box from appearing during the easter egg
      if (isActive) {
        event.preventDefault();
      }
      
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
            event.preventDefault(); // Prevent any command boxes from appearing
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

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, [isActive]);

  // Disable browser shortcuts and command palette during easter egg
  useEffect(() => {
    if (isActive) {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Prevent common browser shortcuts that might interfere
        if (e.metaKey || e.ctrlKey) {
          e.preventDefault();
          e.stopPropagation();
        }
      };

      const handleContextMenu = (e: Event) => {
        e.preventDefault();
      };

      document.addEventListener('keydown', handleKeyDown, { capture: true });
      document.addEventListener('contextmenu', handleContextMenu);

      return () => {
        document.removeEventListener('keydown', handleKeyDown, { capture: true });
        document.removeEventListener('contextmenu', handleContextMenu);
      };
    }
  }, [isActive]);

  return (
    <>
      {/* Full screen overlay to ensure animations are visible */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-[9999] bg-black/5"
            style={{ backdropFilter: 'blur(1px)' }}
          >
            {/* Floating hearts and stars */}
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                  y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 50,
                  rotate: 0,
                  scale: 0
                }}
                animate={{ 
                  y: -100,
                  rotate: [0, 180, 360],
                  scale: [0, 1.2, 1, 0.8, 0],
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)
                }}
                transition={{ 
                  duration: 4 + Math.random() * 3,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 2,
                  ease: "easeInOut"
                }}
                className="absolute"
              >
                {i % 3 === 0 ? (
                  <Heart className="text-pink-500 w-8 h-8 drop-shadow-lg" fill="currentColor" />
                ) : i % 3 === 1 ? (
                  <Star className="text-yellow-400 w-8 h-8 drop-shadow-lg" fill="currentColor" />
                ) : (
                  <Sparkles className="text-purple-500 w-8 h-8 drop-shadow-lg" />
                )}
              </motion.div>
            ))}

            {/* Rainbow gradient overlay animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 via-blue-500/20 via-green-500/20 via-yellow-500/20 to-red-500/20"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success message with higher z-index */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: -50 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10000] pointer-events-none"
          >
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(236, 72, 153, 0.5)",
                  "0 0 40px rgba(147, 51, 234, 0.7)",
                  "0 0 20px rgba(236, 72, 153, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-6 rounded-2xl shadow-2xl text-center max-w-md border-2 border-white/20 backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.6, repeat: 4 }}
              >
                <h2 className="text-3xl font-bold mb-3">🎉 Easter Egg Found! 🎉</h2>
                <p className="text-xl mb-3">You discovered the secret!</p>
                <p className="text-sm opacity-90 leading-relaxed">
                  "The journey of self-discovery begins with a single step... or in this case, a secret code!"
                </p>
              </motion.div>
              
              <motion.div
                className="mt-4 text-xs opacity-75 font-mono bg-black/20 rounded-lg p-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Code: "KONAMI" ⬆⬆⬇⬇⬅➡⬅➡BA
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Magical sparkle indicator when active but message hidden */}
      <AnimatePresence>
        {isActive && !showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed bottom-6 right-6 z-[9998] pointer-events-none"
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-full shadow-lg"
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}