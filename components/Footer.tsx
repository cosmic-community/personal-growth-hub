import Link from 'next/link';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
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

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-width section-padding">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="text-2xl font-bold text-white mb-4 block">
                Personal Growth Hub
              </Link>
              <p className="text-secondary-300 mb-4">
                Professional digital resources for personal development, relationship improvement, and youth growth.
              </p>
              <div className="flex items-center text-secondary-300 text-sm">
                <Heart size={16} className="mr-2 text-primary-400" />
                Trusted by thousands worldwide
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-white font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-secondary-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-secondary-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-secondary-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="border-t border-secondary-700 mt-8 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-secondary-300 text-sm">
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                contact@personalgrowth.com
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                1-800-GROWTH (476-9848)
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                Available worldwide
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-secondary-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm">
              © {new Date().getFullYear()} Personal Growth Hub. All rights reserved.
            </p>
            <p className="text-secondary-400 text-sm mt-4 md:mt-0">
              Made with ❤️ for your personal growth journey
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}