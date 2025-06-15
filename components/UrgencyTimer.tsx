'use client';

import React, { useState, useEffect } from 'react';
import { Clock, AlertCircle } from 'lucide-react';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const UrgencyTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 0, minutes: 0, seconds: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Set timer to 24 hours from now
    const endTime = new Date().getTime() + (24 * 60 * 60 * 1000);
    
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = endTime - now;
      
      if (distance > 0) {
        const hours = Math.floor(distance / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
      } else {
        // Reset timer when it reaches 0
        const newEndTime = new Date().getTime() + (24 * 60 * 60 * 1000);
        const newDistance = newEndTime - now;
        const hours = Math.floor(newDistance / (1000 * 60 * 60));
        const minutes = Math.floor((newDistance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((newDistance % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    return time.toString().padStart(2, '0');
  };

  return (
    <div className={`bg-gradient-to-r from-red-600 to-red-700 text-white py-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <AlertCircle className="w-6 h-6 mr-2 animate-pulse" />
            <h3 className="text-xl md:text-2xl font-bold">
              Special Launch Price Ends In:
            </h3>
          </div>
          
          <div className="flex items-center justify-center space-x-4 md:space-x-8 mb-4">
            <div className="text-center">
              <div className="bg-white text-red-600 rounded-lg px-3 py-2 md:px-4 md:py-3 text-2xl md:text-4xl font-bold min-w-[60px] md:min-w-[80px]">
                {formatTime(timeLeft.hours)}
              </div>
              <div className="text-sm md:text-base mt-1 font-medium">Hours</div>
            </div>
            
            <div className="text-2xl md:text-4xl font-bold">:</div>
            
            <div className="text-center">
              <div className="bg-white text-red-600 rounded-lg px-3 py-2 md:px-4 md:py-3 text-2xl md:text-4xl font-bold min-w-[60px] md:min-w-[80px]">
                {formatTime(timeLeft.minutes)}
              </div>
              <div className="text-sm md:text-base mt-1 font-medium">Minutes</div>
            </div>
            
            <div className="text-2xl md:text-4xl font-bold">:</div>
            
            <div className="text-center">
              <div className="bg-white text-red-600 rounded-lg px-3 py-2 md:px-4 md:py-3 text-2xl md:text-4xl font-bold min-w-[60px] md:min-w-[80px]">
                {formatTime(timeLeft.seconds)}
              </div>
              <div className="text-sm md:text-base mt-1 font-medium">Seconds</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <Clock className="w-4 h-4 mr-2" />
            <p className="text-sm md:text-base">
              After the timer ends, the price goes back to $149
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyTimer;