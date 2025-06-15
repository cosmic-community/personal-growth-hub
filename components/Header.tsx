'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, User, ShoppingBag, ChevronDown } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/Button';
import { useAuth } from './AuthProvider';

interface NavigationItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: Array<{
    name: string;
    href: string;
  }>;
}

export default function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isProductsOpen, setIsProductsOpen] = useState<boolean>(false);
  const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation: NavigationItem[] = [
    { 
      name: 'Products', 
      href: '/products',
      hasDropdown: true,
      dropdownItems: [
        { name: 'All Products', href: '/products' },
        { name: 'Video Series', href: '/products/video-series' },
        { name: '1-on-1 Consultation', href: '/products/consultation' },
      ]
    },
    { name: 'Blog', href: '/blog' },
    { 
      name: 'About', 
      href: '/about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Our Story', href: '/about' },
        { name: 'Mission', href: '/about/mission' },
        { name: 'Team', href: '/about/team' },
        { name: 'Careers', href: '/careers' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  const handleDropdownMouseEnter = (dropdownType: 'products' | 'about'): void => {
    if (dropdownType === 'products') {
      setIsProductsOpen(true);
      setIsAboutOpen(false);
    } else if (dropdownType === 'about') {
      setIsAboutOpen(true);
      setIsProductsOpen(false);
    }
  };

  const handleDropdownMouseLeave = (): void => {
    setIsProductsOpen(false);
    setIsAboutOpen(false);
  };

  const handleLogout = (): void => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect shadow-sm border-b border-teal-600/10' 
          : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              TrueYou Therapy
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={item.hasDropdown ? () => handleDropdownMouseEnter(item.name.toLowerCase() as 'products' | 'about') : undefined}
                onMouseLeave={item.hasDropdown ? handleDropdownMouseLeave : undefined}
              >
                {item.hasDropdown ? (
                  <>
                    <button
                      className="flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-expanded={item.name === 'Products' ? isProductsOpen : isAboutOpen}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <ChevronDown 
                        size={16} 
                        className={`ml-1 transition-transform duration-200 ${
                          (item.name === 'Products' ? isProductsOpen : isAboutOpen) ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {((item.name === 'Products' && isProductsOpen) || (item.name === 'About' && isAboutOpen)) && (
                      <div className="absolute top-full left-0 mt-0 w-56 bg-popover border border-border rounded-md shadow-lg animate-fade-in">
                        <div className="py-1">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                              onClick={() => {
                                setIsProductsOpen(false);
                                setIsAboutOpen(false);
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" aria-label="Shopping cart" className="hover:bg-amber-600/10">
              <ShoppingBag size={18} />
            </Button>
            
            {user ? (
              <>
                <Link href="/profile">
                  <Button variant="ghost" size="sm" aria-label="User profile" className="hover:bg-teal-600/10">
                    <User size={18} />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleLogout}
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="outline" size="sm" className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm" variant="amber">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        onClick={() => {
                          if (item.name === 'Products') {
                            setIsProductsOpen(!isProductsOpen);
                            setIsAboutOpen(false);
                          } else if (item.name === 'About') {
                            setIsAboutOpen(!isAboutOpen);
                            setIsProductsOpen(false);
                          }
                        }}
                        aria-expanded={item.name === 'Products' ? isProductsOpen : isAboutOpen}
                      >
                        {item.name}
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${
                            (item.name === 'Products' ? isProductsOpen : isAboutOpen) ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      {((item.name === 'Products' && isProductsOpen) || (item.name === 'About' && isAboutOpen)) && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsProductsOpen(false);
                                setIsAboutOpen(false);
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                {user ? (
                  <>
                    <Link href="/profile" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="teal" className="justify-start w-full">
                        Profile
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      className="justify-start w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="teal" className="justify-start w-full">
                        Login
                      </Button>
                    </Link>
                    <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="amber" className="justify-start w-full">
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}