'use client';

import { motion } from 'framer-motion';
import { Star, Users, CheckCircle, Award } from 'lucide-react';

interface SocialProofProps {
  variant?: 'compact' | 'detailed' | 'minimal';
  showLogos?: boolean;
}

export default function SocialProof({ variant = 'compact', showLogos = false }: SocialProofProps) {
  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Happy Clients',
      color: 'text-teal-600',
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Average Rating',
      color: 'text-yellow-500',
    },
    {
      icon: CheckCircle,
      value: '95%',
      label: 'Success Rate',
      color: 'text-green-600',
    },
    {
      icon: Award,
      value: '50+',
      label: 'Awards Won',
      color: 'text-purple-600',
    },
  ];

  const testimonials = [
    {
      text: "This platform changed my life. The resources are incredibly professional and effective.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b792?w=100&h=100&fit=crop&auto=format,compress",
    },
    {
      text: "The best investment I've made in my personal development. Highly recommended!",
      author: "Michael Chen",
      role: "Software Engineer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format,compress",
    },
    {
      text: "Professional quality resources that actually work. The results speak for themselves.",
      author: "Emily Rodriguez",
      role: "Therapist",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format,compress",
    },
  ];

  if (variant === 'minimal') {
    return (
      <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="font-semibold">4.9/5</span>
        </div>
        <div className="flex items-center space-x-1">
          <Users className="w-4 h-4 text-teal-600" />
          <span className="font-semibold">10,000+ users</span>
        </div>
        <div className="flex items-center space-x-1">
          <CheckCircle className="w-4 h-4 text-green-600" />
          <span className="font-semibold">Trusted worldwide</span>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="bg-card rounded-lg p-6 shadow-sm group-hover:shadow-lg transition-shadow">
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="bg-card rounded-lg p-6 shadow-sm"
          >
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
              ))}
            </div>
            <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
            <div className="flex items-center space-x-3">
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {showLogos && (
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">Trusted by leading organizations</p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            {/* Add your logo components here */}
            <div className="w-24 h-8 bg-muted rounded"></div>
            <div className="w-24 h-8 bg-muted rounded"></div>
            <div className="w-24 h-8 bg-muted rounded"></div>
            <div className="w-24 h-8 bg-muted rounded"></div>
          </div>
        </div>
      )}
    </div>
  );
}