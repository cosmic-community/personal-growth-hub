'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MatrixColumn {
  id: number;
  x: number;
  chars: string[];
  speed: number;
  opacity: number;
}

const MATRIX_CHARS = 'アカサタナハマヤラワガザダバパイキシチニヒミリヰギジヂビピウクスツヌフムユルグズヅブプエケセテネヘメレヱゲゼデベペオコソトノホモヨロヲゴゾドボポ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

export default function MatrixEasterEgg({ isActive, onDeactivate }: { isActive: boolean; onDeactivate: () => void }) {
  const [columns, setColumns] = useState<MatrixColumn[]>([]);
  const [showWelcome, setShowWelcome] = useState(false);

  const getRandomChar = useCallback((): string => {
    const index = Math.floor(Math.random() * MATRIX_CHARS.length);
    return MATRIX_CHARS[index] || MATRIX_CHARS[0];
  }, []);

  const createColumn = useCallback((id: number, x: number): MatrixColumn => {
    return {
      id,
      x,
      chars: Array(30).fill('').map(() => getRandomChar()),
      speed: 0.5 + Math.random() * 1.5,
      opacity: 0.3 + Math.random() * 0.7
    };
  }, [getRandomChar]);

  useEffect(() => {
    if (!isActive) return;

    // Create initial columns
    const initialColumns: MatrixColumn[] = [];
    const columnWidth = 20;
    const numColumns = Math.ceil((typeof window !== 'undefined' ? window.innerWidth : 1200) / columnWidth);
    
    for (let i = 0; i < numColumns; i++) {
      initialColumns.push(createColumn(i, i * columnWidth));
    }
    
    setColumns(initialColumns);
    setShowWelcome(true);

    // Hide welcome message after 3 seconds
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    // Update characters periodically
    const interval = setInterval(() => {
      setColumns(prev => prev.map(col => ({
        ...col,
        chars: col.chars.map(() => getRandomChar())
      })));
    }, 100);

    // Auto-deactivate after 15 seconds
    const deactivateTimer = setTimeout(() => {
      onDeactivate();
    }, 15000);

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(deactivateTimer);
      clearInterval(interval);
    };
  }, [isActive, createColumn, getRandomChar, onDeactivate]);

  if (!isActive) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[10000] bg-black overflow-hidden"
      >
        {/* Matrix rain columns */}
        {columns.map((column) => (
          <motion.div
            key={column.id}
            className="absolute top-0 text-green-400 font-mono text-sm leading-tight select-none"
            style={{
              left: column.x,
              opacity: column.opacity,
              textShadow: '0 0 5px #00ff00'
            }}
            animate={{
              y: [-30, typeof window !== 'undefined' ? window.innerHeight + 30 : 800]
            }}
            transition={{
              duration: 10 / column.speed,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            {column.chars.map((char, index) => (
              <motion.div
                key={index}
                className="block h-5"
                animate={{
                  opacity: [1, 0.8, 0.6, 0.4, 0.2, 0]
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.05,
                  repeat: Infinity
                }}
              >
                {char}
              </motion.div>
            ))}
          </motion.div>
        ))}

        {/* Welcome message */}
        <AnimatePresence>
          {showWelcome && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
            >
              <motion.div
                animate={{
                  textShadow: [
                    '0 0 5px #00ff00',
                    '0 0 20px #00ff00',
                    '0 0 5px #00ff00'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-green-400 font-mono"
              >
                <h1 className="text-6xl font-bold mb-4">WELCOME NEO</h1>
                <p className="text-xl mb-2">The Matrix has you...</p>
                <p className="text-lg opacity-80">Follow the white rabbit 🐰</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Exit instruction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-green-400 font-mono text-sm text-center"
        >
          <p>Press any key to exit the Matrix...</p>
        </motion.div>

        {/* Click anywhere to exit */}
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={onDeactivate}
          onKeyDown={(e) => {
            e.preventDefault();
            onDeactivate();
          }}
          tabIndex={0}
        />
      </motion.div>
    </AnimatePresence>
  );
}