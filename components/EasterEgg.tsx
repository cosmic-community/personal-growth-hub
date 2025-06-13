'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { X, Rocket, Heart } from 'lucide-react';

interface EasterEggProps {}

interface PongGame {
  canvas: HTMLCanvasElement | null;
  context: CanvasRenderingContext2D | null;
  ballX: number;
  ballY: number;
  ballSpeedX: number;
  ballSpeedY: number;
  playerY: number;
  computerY: number;
  playerScore: number;
  computerScore: number;
  gameRunning: boolean;
  paddleHeight: number;
  paddleWidth: number;
  ballSize: number;
}

export default function EasterEgg({}: EasterEggProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [command, setCommand] = useState<string>('');
  const [isRocketFlying, setIsRocketFlying] = useState<boolean>(false);
  const [showFireworks, setShowFireworks] = useState<boolean>(false);
  const [showSoccerGoal, setShowSoccerGoal] = useState<boolean>(false);
  const [showPongGame, setShowPongGame] = useState<boolean>(false);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<PongGame>({
    canvas: null,
    context: null,
    ballX: 400,
    ballY: 200,
    ballSpeedX: 5,
    ballSpeedY: 3,
    playerY: 150,
    computerY: 150,
    playerScore: 0,
    computerScore: 0,
    gameRunning: false,
    paddleHeight: 100,
    paddleWidth: 10,
    ballSize: 10
  });
  const animationFrameRef = useRef<number | null>(null);
  const keysRef = useRef<{[key: string]: boolean}>({});

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
    } else if (command.toLowerCase().trim() === 'goal') {
      setShowModal(false);
      setCommand('');
      triggerSoccerGoalAnimation();
    } else if (command.toLowerCase().trim() === 'pong') {
      setShowModal(false);
      setCommand('');
      triggerPongGame();
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

  const triggerSoccerGoalAnimation = (): void => {
    setShowSoccerGoal(true);
    
    // Hide soccer goal animation after 3 seconds
    setTimeout(() => {
      setShowSoccerGoal(false);
    }, 3000);
  };

  const triggerPongGame = (): void => {
    setShowPongGame(true);
  };

  const closePongGame = (): void => {
    setShowPongGame(false);
    gameRef.current.gameRunning = false;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    // Reset game state
    gameRef.current.ballX = 400;
    gameRef.current.ballY = 200;
    gameRef.current.ballSpeedX = 5;
    gameRef.current.ballSpeedY = 3;
    gameRef.current.playerY = 150;
    gameRef.current.computerY = 150;
    gameRef.current.playerScore = 0;
    gameRef.current.computerScore = 0;
  };

  const closeModal = (): void => {
    setShowModal(false);
    setCommand('');
  };

  // Initialize Pong game
  const initPongGame = useCallback((): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    gameRef.current.canvas = canvas;
    gameRef.current.context = context;
    gameRef.current.gameRunning = true;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 400;

    gameLoop();
  }, []);

  // Game loop
  const gameLoop = useCallback((): void => {
    if (!gameRef.current.gameRunning || !gameRef.current.context || !gameRef.current.canvas) return;

    const game = gameRef.current;
    const ctx = game.context;
    const canvas = game.canvas;

    if (!ctx || !canvas) return;

    // Clear canvas
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update player paddle
    if (keysRef.current['ArrowUp'] && game.playerY > 0) {
      game.playerY -= 8;
    }
    if (keysRef.current['ArrowDown'] && game.playerY < canvas.height - game.paddleHeight) {
      game.playerY += 8;
    }

    // Update computer paddle (AI)
    const computerCenter = game.computerY + game.paddleHeight / 2;
    const ballCenter = game.ballY;
    
    if (computerCenter < ballCenter - 35) {
      game.computerY += 6;
    } else if (computerCenter > ballCenter + 35) {
      game.computerY -= 6;
    }

    // Keep computer paddle in bounds
    if (game.computerY < 0) game.computerY = 0;
    if (game.computerY > canvas.height - game.paddleHeight) {
      game.computerY = canvas.height - game.paddleHeight;
    }

    // Update ball position
    game.ballX += game.ballSpeedX;
    game.ballY += game.ballSpeedY;

    // Ball collision with top and bottom walls
    if (game.ballY <= 0 || game.ballY >= canvas.height - game.ballSize) {
      game.ballSpeedY = -game.ballSpeedY;
    }

    // Ball collision with player paddle
    if (
      game.ballX <= game.paddleWidth + game.ballSize &&
      game.ballY >= game.playerY &&
      game.ballY <= game.playerY + game.paddleHeight
    ) {
      game.ballSpeedX = -game.ballSpeedX;
      const deltaY = game.ballY - (game.playerY + game.paddleHeight / 2);
      game.ballSpeedY = deltaY * 0.1;
    }

    // Ball collision with computer paddle
    if (
      game.ballX >= canvas.width - game.paddleWidth - game.ballSize &&
      game.ballY >= game.computerY &&
      game.ballY <= game.computerY + game.paddleHeight
    ) {
      game.ballSpeedX = -game.ballSpeedX;
      const deltaY = game.ballY - (game.computerY + game.paddleHeight / 2);
      game.ballSpeedY = deltaY * 0.1;
    }

    // Ball goes off screen (scoring)
    if (game.ballX < 0) {
      game.computerScore++;
      resetBall();
    } else if (game.ballX > canvas.width) {
      game.playerScore++;
      resetBall();
    }

    // Draw everything
    drawGame();

    // Continue game loop
    animationFrameRef.current = requestAnimationFrame(gameLoop);
  }, []);

  const resetBall = (): void => {
    const game = gameRef.current;
    game.ballX = 400;
    game.ballY = 200;
    game.ballSpeedX = game.ballSpeedX > 0 ? -5 : 5;
    game.ballSpeedY = (Math.random() - 0.5) * 6;
  };

  const drawGame = (): void => {
    const game = gameRef.current;
    const ctx = game.context;
    const canvas = game.canvas;
    
    if (!ctx || !canvas) return;

    // Draw center line
    ctx.setLineDash([5, 15]);
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw paddles
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, game.playerY, game.paddleWidth, game.paddleHeight);
    ctx.fillRect(canvas.width - game.paddleWidth, game.computerY, game.paddleWidth, game.paddleHeight);

    // Draw ball
    ctx.fillRect(game.ballX, game.ballY, game.ballSize, game.ballSize);

    // Draw scores
    ctx.font = '36px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(game.playerScore.toString(), canvas.width / 4, 50);
    ctx.fillText(game.computerScore.toString(), (canvas.width / 4) * 3, 50);

    // Draw instructions
    ctx.font = '16px Arial';
    ctx.fillText('Use ↑↓ arrow keys to move', canvas.width / 2, canvas.height - 20);
  };

  // Keyboard event handlers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      keysRef.current[e.key] = true;
    };

    const handleKeyUp = (e: KeyboardEvent): void => {
      keysRef.current[e.key] = false;
    };

    if (showPongGame) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, [showPongGame]);

  // Initialize game when Pong modal opens
  useEffect(() => {
    if (showPongGame) {
      setTimeout(() => {
        initPongGame();
      }, 100);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [showPongGame, initPongGame]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        if (showPongGame) {
          closePongGame();
        } else {
          closeModal();
        }
      }
    };

    if (showModal || showPongGame) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [showModal, showPongGame]);

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
                💡 <strong>Hints:</strong> Try "cosmic" for a rocket ride, "goal" for a soccer animation, or "pong" for a retro game!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Pong Game Modal */}
      {showPongGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm">
          <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 p-6 w-full max-w-4xl mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-white">
                🏓 Cosmic Pong
              </h3>
              <button
                onClick={closePongGame}
                className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                aria-label="Close Pong game"
              >
                <X size={24} className="text-gray-400" />
              </button>
            </div>
            
            <div className="flex justify-center">
              <canvas
                ref={canvasRef}
                className="border-2 border-gray-600 rounded-lg"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-gray-400 text-sm">
                Use ↑↓ arrow keys to control your paddle. First to 10 points wins!
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

      {/* Soccer Goal Animation */}
      {showSoccerGoal && (
        <div className="fixed inset-0 pointer-events-none z-40 flex items-center justify-center">
          <div className="soccer-field">
            {/* Soccer Goal Net */}
            <div className="goal-net">
              <div className="goal-post left-post"></div>
              <div className="goal-post right-post"></div>
              <div className="crossbar"></div>
              <div className="net-lines">
                <div className="net-line vertical-1"></div>
                <div className="net-line vertical-2"></div>
                <div className="net-line vertical-3"></div>
                <div className="net-line horizontal-1"></div>
                <div className="net-line horizontal-2"></div>
                <div className="net-line horizontal-3"></div>
              </div>
            </div>
            
            {/* Soccer Ball */}
            <div className="soccer-ball">⚽</div>
            
            {/* Goal Text */}
            <div className="goal-text">GOAL!</div>
          </div>
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
        
        .soccer-field {
          position: relative;
          width: 400px;
          height: 300px;
          animation: soccerFieldAppear 0.5s ease-out forwards;
        }
        
        .goal-net {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 120px;
          height: 80px;
          border: 3px solid #ffffff;
          border-right: none;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          animation: goalNetShake 0.8s ease-out 1.2s;
        }
        
        .goal-post {
          position: absolute;
          background: #ffffff;
          border-radius: 2px;
        }
        
        .left-post {
          left: -3px;
          top: -3px;
          width: 6px;
          height: 86px;
        }
        
        .right-post {
          right: -3px;
          top: -3px;
          width: 6px;
          height: 86px;
        }
        
        .crossbar {
          left: -3px;
          top: -3px;
          width: 126px;
          height: 6px;
        }
        
        .net-lines {
          position: absolute;
          inset: 0;
        }
        
        .net-line {
          position: absolute;
          background: rgba(255, 255, 255, 0.6);
        }
        
        .vertical-1 {
          left: 30px;
          top: 0;
          width: 1px;
          height: 100%;
        }
        
        .vertical-2 {
          left: 60px;
          top: 0;
          width: 1px;
          height: 100%;
        }
        
        .vertical-3 {
          left: 90px;
          top: 0;
          width: 1px;
          height: 100%;
        }
        
        .horizontal-1 {
          left: 0;
          top: 25px;
          width: 100%;
          height: 1px;
        }
        
        .horizontal-2 {
          left: 0;
          top: 50px;
          width: 100%;
          height: 1px;
        }
        
        .horizontal-3 {
          left: 0;
          top: 75px;
          width: 100%;
          height: 1px;
        }
        
        .soccer-ball {
          position: absolute;
          left: 50px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 30px;
          animation: ballKick 1.5s ease-out forwards;
        }
        
        .goal-text {
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 36px;
          font-weight: bold;
          color: #ffffff;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
          animation: goalTextAppear 0.5s ease-out 1.5s both;
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
        
        @keyframes soccerFieldAppear {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes ballKick {
          0% {
            left: 50px;
            transform: translateY(-50%) rotate(0deg) scale(1);
          }
          50% {
            left: 200px;
            transform: translateY(-70px) rotate(720deg) scale(1.2);
          }
          100% {
            left: 350px;
            transform: translateY(-50%) rotate(1440deg) scale(0.8);
          }
        }
        
        @keyframes goalNetShake {
          0%, 100% {
            transform: translateY(-50%) translateX(0);
          }
          25% {
            transform: translateY(-50%) translateX(-3px);
          }
          75% {
            transform: translateY(-50%) translateX(3px);
          }
        }
        
        @keyframes goalTextAppear {
          0% {
            opacity: 0;
            transform: translateX(-50%) scale(0.5);
          }
          50% {
            opacity: 1;
            transform: translateX(-50%) scale(1.2);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) scale(1);
          }
        }
      `}</style>
    </>
  );
}