'use client';

import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';
import { NewsletterSignup } from './NewsletterSignup';
import EasterEgg from './EasterEgg';
import { CosmicShowcaseModal } from './CosmicShowcaseModal';
import { useState } from 'react';

export default function Footer() {
  const [showCosmicModal, setShowCosmicModal] = useState(false);

  const footerLinks = {
    products: [
      { name: 'Individual Coaching', href: '/categories/individual-coaching' },
      { name: 'Relationship Tools', href: '/categories/relationship-tools' },
      { name: 'Youth Resources', href: '/categories/youth-resources' },
      { name: 'All Products', href: '/products' },
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-muted/30 border-t border-border">
        <div className="container">
          {/* Newsletter Section */}
          <div className="py-12 border-b border-border">
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex items-center justify-center mb-4">
                <Send className="w-8 h-8 text-teal-600 mr-3" />
                <h3 className="text-2xl font-bold">Stay Connected</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Get weekly insights, tips, and resources delivered to your inbox. 
                Join thousands on their personal growth journey.
              </p>
              <NewsletterSignup source="footer signup" />
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Brand */}
              <div className="lg:col-span-2">
                <Link 
                  href="/" 
                  className="text-2xl font-bold gradient-text mb-4 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  Personal Growth Hub
                </Link>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Professional digital resources for personal development, relationship improvement, 
                  and youth growth. Trusted by professionals and individuals worldwide.
                </p>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Heart size={16} className="mr-2 text-amber-600" aria-hidden="true" />
                  Trusted by thousands worldwide
                </div>
              </div>

              {/* Products */}
              <div>
                <h4 className="font-semibold mb-4 text-foreground flex items-center">
                  <span className="w-1 h-6 bg-teal-600 mr-2 rounded"></span>
                  Products
                </h4>
                <ul className="space-y-2">
                  {footerLinks.products.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-muted-foreground hover:text-teal-600 transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-semibold mb-4 text-foreground flex items-center">
                  <span className="w-1 h-6 bg-amber-600 mr-2 rounded"></span>
                  Support
                </h4>
                <ul className="space-y-2">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-muted-foreground hover:text-amber-600 transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-semibold mb-4 text-foreground">Company</h4>
                <ul className="space-y-2">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="border-t border-border mt-8 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-muted-foreground text-sm">
                <div className="flex items-center">
                  <Mail size={16} className="mr-2 flex-shrink-0 text-teal-600" aria-hidden="true" />
                  <a 
                    href="mailto:contact@personalgrowth.com"
                    className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    contact@personalgrowth.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone size={16} className="mr-2 flex-shrink-0 text-amber-600" aria-hidden="true" />
                  <a 
                    href="tel:1-800-476-9848"
                    className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    1-800-GROWTH (476-9848)
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2 flex-shrink-0 text-primary" aria-hidden="true" />
                  <span>Available worldwide</span>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-border mt-8 pt-8 flex flex-col items-center space-y-4 text-sm text-muted-foreground">
              <p className="text-center">
                © {currentYear} Personal Growth Hub. All rights reserved.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">
                <div className="flex items-center">
                  <span>Made with</span>
                  <EasterEgg />
                  <span>for your personal growth journey</span>
                </div>
                <span className="hidden sm:inline mx-2">•</span>
                <div className="flex items-center">
                  <span>Built with</span>
                  <button
                    onClick={() => setShowCosmicModal(true)}
                    className="mx-1 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-semibold transition-colors inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    <Sparkles className="w-4 h-4 mr-1" />
                    Cosmic
                  </button>
                  <span>AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <CosmicShowcaseModal 
        isOpen={showCosmicModal}
        onClose={() => setShowCosmicModal(false)}
      />
    </>
  );
}