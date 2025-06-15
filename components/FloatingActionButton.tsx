'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './ui/Button';

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickMessages = [
    "I'd like to schedule a consultation",
    "Tell me more about your programs",
    "I need help getting started",
    "What's the best option for me?"
  ];

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Quick Message Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 w-80 bg-card border border-border rounded-2xl shadow-2xl z-50 p-6 animate-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg">Quick Message</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0"
            >
              <X size={16} />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4">
            Select a quick message or scroll down to use the full contact form:
          </p>
          
          <div className="space-y-2">
            {quickMessages.map((message, index) => (
              <button
                key={index}
                onClick={() => {
                  // Scroll to contact form
                  const contactSection = document.querySelector('form');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                    // Pre-fill the message
                    const messageTextarea = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
                    if (messageTextarea) {
                      messageTextarea.value = message;
                      messageTextarea.focus();
                    }
                  }
                  setIsOpen(false);
                }}
                className="w-full text-left p-3 text-sm bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors duration-200 group"
              >
                <div className="flex items-center">
                  <Send size={14} className="mr-2 text-primary group-hover:translate-x-1 transition-transform duration-200" />
                  {message}
                </div>
              </button>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-border">
            <Button
              onClick={() => {
                const contactSection = document.querySelector('form');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
                setIsOpen(false);
              }}
              className="w-full bg-gradient-to-r from-primary to-purple-600"
            >
              Go to Full Contact Form
            </Button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full shadow-2xl z-50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-3xl group ${
          isOpen ? 'rotate-45' : 'hover:rotate-12'
        }`}
      >
        {isOpen ? (
          <X size={24} className="transition-transform duration-300" />
        ) : (
          <MessageCircle size={24} className="group-hover:scale-110 transition-transform duration-300" />
        )}
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 animate-ping opacity-20"></div>
      </button>

      {/* Tooltip */}
      {!isOpen && (
        <div className="fixed bottom-8 right-24 bg-card border border-border px-3 py-2 rounded-lg shadow-lg z-40 text-sm font-medium animate-in fade-in-0 slide-in-from-right-2 duration-300">
          Need help? Click to message us!
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2">
            <div className="w-2 h-2 bg-card border-r border-b border-border rotate-45"></div>
          </div>
        </div>
      )}
    </>
  );
}