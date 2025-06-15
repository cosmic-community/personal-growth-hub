'use client';

import { useState } from 'react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { Send, CheckCircle, User, Mail as MailIcon, MessageSquare, Tag } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real implementation, you would send this to your backend API
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <Card className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50"></div>
        <div className="relative p-12 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle size={40} className="text-white" />
          </div>
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Message Sent Successfully!
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Thank you for reaching out! Our expert team will respond within 4 hours with personalized guidance.
          </p>
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4 mb-6">
            <p className="text-sm font-medium text-green-800">
              🎉 You're one step closer to transformation!
            </p>
          </div>
          <Button 
            onClick={() => setIsSubmitted(false)} 
            variant="outline"
            className="group hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 hover:text-white transition-all duration-300"
          >
            <Send size={16} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Send Another Message
          </Button>
        </div>
      </Card>
    );
  }

  const getFieldIcon = (fieldName: string) => {
    switch (fieldName) {
      case 'name': return User;
      case 'email': return MailIcon;
      case 'subject': return Tag;
      case 'message': return MessageSquare;
      default: return User;
    }
  };

  return (
    <Card className="relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-semibold mb-3 text-primary">
                Full Name *
              </label>
              <div className="relative">
                <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                  focusedField === 'name' ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  <User size={20} />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background/50 ${
                    focusedField === 'name' ? 'border-primary scale-105' : 'border-border hover:border-primary/50'
                  }`}
                  placeholder="Your full name"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-semibold mb-3 text-primary">
                Email Address *
              </label>
              <div className="relative">
                <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                  focusedField === 'email' ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  <MailIcon size={20} />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background/50 ${
                    focusedField === 'email' ? 'border-primary scale-105' : 'border-border hover:border-primary/50'
                  }`}
                  placeholder="your@email.com"
                />
              </div>
            </div>
          </div>

          {/* Subject Field */}
          <div className="relative">
            <label htmlFor="subject" className="block text-sm font-semibold mb-3 text-primary">
              How can we help you? *
            </label>
            <div className="relative">
              <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                focusedField === 'subject' ? 'text-primary' : 'text-muted-foreground'
              }`}>
                <Tag size={20} />
              </div>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocusedField('subject')}
                onBlur={() => setFocusedField(null)}
                required
                className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background/50 appearance-none cursor-pointer ${
                  focusedField === 'subject' ? 'border-primary scale-105' : 'border-border hover:border-primary/50'
                }`}
              >
                <option value="">Select your main interest...</option>
                <option value="general">General Question</option>
                <option value="products">Product Information</option>
                <option value="consultation">Schedule Consultation</option>
                <option value="video-series">Video Series Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="urgent">Urgent Support Needed</option>
              </select>
            </div>
          </div>

          {/* Message Field */}
          <div className="relative">
            <label htmlFor="message" className="block text-sm font-semibold mb-3 text-primary">
              Tell us more about your situation *
            </label>
            <div className="relative">
              <div className={`absolute left-4 top-6 transition-colors duration-300 ${
                focusedField === 'message' ? 'text-primary' : 'text-muted-foreground'
              }`}>
                <MessageSquare size={20} />
              </div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                required
                rows={6}
                className={`w-full pl-12 pr-4 py-6 border-2 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background/50 resize-none ${
                  focusedField === 'message' ? 'border-primary scale-105' : 'border-border hover:border-primary/50'
                }`}
                placeholder="Share your goals, challenges, or questions. The more details you provide, the better we can help you on your transformation journey..."
              />
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="bg-gradient-to-r from-primary/5 to-purple-600/5 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              🔒 Your information is completely secure and will never be shared with third parties. 
              We respect your privacy and are committed to helping you succeed.
            </p>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 group transition-all duration-300 hover:scale-105 hover:shadow-2xl" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                Sending Your Message...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Send size={20} className="mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Send Message & Start Your Journey
              </div>
            )}
          </Button>

          {/* Response Time Guarantee */}
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              <CheckCircle size={16} className="mr-2" />
              Guaranteed response within 4 hours
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
}