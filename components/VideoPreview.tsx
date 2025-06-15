'use client';

import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const VideoPreview: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleCloseClick = () => {
    setIsPlaying(false);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {!isPlaying ? (
        <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=450&fit=crop&auto=format,compress"
            alt="Video preview - Transform your life"
            className="w-full h-64 md:h-96 object-cover opacity-70"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              onClick={handlePlayClick}
              variant="teal"
              size="lg"
              className="bg-white/90 text-teal-600 hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl"
            >
              <Play className="w-8 h-8 mr-2" />
              Watch Free Preview
            </Button>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl font-bold mb-2">Free Preview: "Breaking Through Your Mental Barriers"</h3>
            <p className="text-gray-200">See how our proven techniques work in just 3 minutes</p>
          </div>
        </div>
      ) : (
        <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
          <button
            onClick={handleCloseClick}
            className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="aspect-video bg-gray-900 flex items-center justify-center">
            <iframe
              src="https://player.vimeo.com/video/example?autoplay=1"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Video Series Preview"
            />
          </div>
        </div>
      )}
      
      <div className="mt-6 text-center">
        <p className="text-gray-600 mb-2">🎥 Watch this 3-minute preview to see why our approach works</p>
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
          <span>✓ No email required</span>
          <span>✓ Instant access</span>
          <span>✓ Real results preview</span>
        </div>
      </div>
    </div>
  );
};

export default VideoPreview;