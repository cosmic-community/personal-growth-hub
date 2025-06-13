'use client';

import { useState, useEffect } from 'react';
import { X, Rocket, Heart } from 'lucide-react';

interface EasterEggProps {}

export default function EasterEgg({}: EasterEggProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [command, setCommand] = useState<string>('');
  const [isRocketFlying, setIsRocketFlying] = useState<boolean>(false);
  const [showFireworks, setShowFireworks] = useState<boolean>(false);

  const handleHeartClick = (): void => {
    setShowModal(true);
  };

  const handleCommand = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    if (command.toLowerCase().trim() === 'cosmic') {
      setShowModal(false);
      setCommand('');
      triggerRocketAnimation();
    } else if (command.toLowerCase().trim() === 'winning') {
      setShowModal(false);
      setCommand('');
      triggerFireworksAnimation();
    } else if (command.toLowerCase().trim() === 'jeff') {
      setShowModal(false);
      setCommand('');
      window.open('https://www.linkedin.com/in/jeffhovinga/', '_blank');
    } else {
      // For future commands, we can add more conditions here
      setCommand('');
    }
  };

  const triggerRocketAnimation = (): void => {
    setIsRocketFlying(true);
    
    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Hide rocket after animation
    setTimeout(() => {
      setIsRocketFlying(false);
    }, 2000);
  };

  const triggerFireworksAnimation = (): void => {
    setShowFireworks(true);
    
    // Hide fireworks after 4 seconds
    setTimeout(() => {
      setShowFireworks(false);
    }, 4000);
  };

  const closeModal = (): void => {
    setShowModal(false);
    setCommand('');
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (showModal) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [showModal]);

  // Generate firework bursts
  const createFireworkBurst = (x: number, y: number, color: string, delay: number) => {
    const particles = [];
    for (let i = 0; i < 12; i++) {
      const angle = (i * 360) / 12;
      particles.push(
        <div
          key={`${x}-${y}-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: x + 'px',
            top: y + 'px',
            backgroundColor: color,
            animation: `fireworkParticle 1.5s ease-out ${delay}s forwards`,
            transform: `rotate(${angle}deg)`,
            transformOrigin: '1px 1px',
          }}
        />
      );
    }
    return particles;
  };

  const fireworkBursts = showFireworks ? [
    ...createFireworkBurst(200, 150, '#ff6b6b', 0),
    ...createFireworkBurst(600, 100, '#4ecdc4', 0.3),
    ...createFireworkBurst(400, 200, '#45b7d1', 0.6),
    ...createFireworkBurst(800, 180, '#f9ca24', 0.9),
    ...createFireworkBurst(300, 120, '#f0932b', 1.2),
    ...createFireworkBurst(700, 250, '#eb4d4b', 1.5),
    ...createFireworkBurst(150, 300, '#6c5ce7', 1.8),
    ...createFireworkBurst(550, 80, '#a29bfe', 2.1),
  ] : [];

  return (
    <>
      {/* Heart Easter Egg Trigger */}
      <button
        onClick={handleHeartClick}
        className="mx-1 group relative transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
        aria-label="Open cosmic command center"
      >
        <Heart 
          size={16} 
          className="text-amber-600 group-hover:text-amber-500 transition-colors cursor-pointer" 
          aria-hidden="true" 
        />
        
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-amber-400 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-200"></div>
      </button>

      {/* Command Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Cosmic Command Center
              </h3>
              <button
                onClick={closeModal}
                className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} className="text-gray-500 dark:text-gray-400" />
              </button>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              What cosmic adventure would you like to embark on?
            </p>
            
            <form onSubmit={handleCommand} className="space-y-4">
              <input
                type="text"
                value={command}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCommand(e.target.value)}
                placeholder="Enter a cosmic command..."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                autoFocus
              />
              
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                  Execute
                </button>
              </div>
            </form>
            
            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                💡 <strong>Hints:</strong> Try "cosmic" for a rocket ride!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Rocket Animation */}
      {isRocketFlying && (
        <div className="fixed inset-0 pointer-events-none z-40">
          <div className="rocket-flight">
            <Rocket 
              size={80} 
              className="text-orange-500 rocket-icon" 
              style={{
                filter: 'drop-shadow(0 0 20px rgba(249, 115, 22, 0.8))'
              }}
            />
          </div>
        </div>
      )}

      {/* Fireworks Animation */}
      {showFireworks && (
        <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
          {fireworkBursts}
        </div>
      )}

      <style jsx>{`
        .rocket-flight {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          animation: rocketFly 2s ease-out forwards;
        }
        
        .rocket-icon {
          animation: rocketSpin 0.5s linear infinite;
        }
        
        @keyframes rocketFly {
          0% {
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%) rotate(0deg) scale(1);
            opacity: 1;
          }
          50% {
            bottom: 50vh;
            left: 50%;
            transform: translateX(-50%) rotate(180deg) scale(1.2);
            opacity: 1;
          }
          100% {
            bottom: 100vh;
            left: 50%;
            transform: translateX(-50%) rotate(360deg) scale(0.8);
            opacity: 0;
          }
        }
        
        @keyframes rocketSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes fireworkParticle {
          0% {
            transform: translateX(0) translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(100px) translateY(-50px) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}