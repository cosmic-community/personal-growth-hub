'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, Users, TrendingUp } from 'lucide-react';

const SocialProofBanner: React.FC = () => {
  const [currentProof, setCurrentProof] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const proofItems = [
    {
      icon: Users,
      text: "Join 15,000+ people who have transformed their lives",
      color: "text-teal-600"
    },
    {
      icon: TrendingUp,
      text: "98% success rate • Average 4.9/5 stars from 2,847 reviews",
      color: "text-amber-600"
    },
    {
      icon: CheckCircle,
      text: "Featured in Psychology Today • Created by licensed therapists",
      color: "text-green-600"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentProof((prev) => (prev + 1) % proofItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [proofItems.length]);

  const currentItem = proofItems[currentProof];
  const Icon = currentItem.icon;

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-3 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className={`flex items-center justify-center text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Icon className={`w-5 h-5 mr-2 ${currentItem.color}`} />
          <span className="text-sm md:text-base font-medium">
            {currentItem.text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SocialProofBanner;