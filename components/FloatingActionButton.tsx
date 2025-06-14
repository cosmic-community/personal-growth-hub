'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, ArrowUp } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/Button';

interface FloatingActionButtonProps {
  variant?: 'contact' | 'scroll-to-top' | 'help';
  position?: 'bottom-right' | 'bottom-left';
}

export default function FloatingActionButton({ 
  variant = 'contact', 
  position = 'bottom-right' 
}: FloatingActionButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
  };

  if (variant === 'scroll-to-top') {
    return (
      <motion.div
        className={`fixed ${positionClasses[position]} z-50`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full shadow-lg bg-primary hover:bg-primary/90"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </motion.div>
    );
  }

  if (variant === 'help') {
    return (
      <motion.div
        className={`fixed ${positionClasses[position]} z-50`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          className="w-12 h-12 rounded-full shadow-lg bg-amber-600 hover:bg-amber-600/90"
          size="icon"
        >
          <MessageCircle className="w-5 h-5" />
        </Button>
      </motion.div>
    );
  }

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      {/* Action buttons */}
      {isOpen && (
        <motion.div
          className="absolute bottom-16 right-0 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              className="w-12 h-12 rounded-full shadow-lg bg-green-600 hover:bg-green-600/90"
              size="icon"
            >
              <Phone className="w-5 h-5" />
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              className="w-12 h-12 rounded-full shadow-lg bg-blue-600 hover:bg-blue-600/90"
              size="icon"
            >
              <Mail className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      )}

      {/* Main button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full shadow-lg bg-primary hover:bg-primary/90"
          size="icon"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </motion.div>
    </div>
  );
}