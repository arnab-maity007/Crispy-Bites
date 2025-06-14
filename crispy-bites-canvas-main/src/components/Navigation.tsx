
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Chefs', href: '#chefs' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Order', href: '#order' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-playfair font-bold">
              <span className={`transition-colors duration-300 ${
                isScrolled 
                  ? 'text-spice-red' 
                  : 'text-white text-shadow'
              }`}>
                Crispy Bites
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-spice-orange ${
                    isScrolled 
                      ? 'text-elegant-charcoal hover:text-spice-red' 
                      : 'text-white hover:text-spice-gold text-shadow'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Order Now Button */}
          <div className="hidden md:block">
            <a
              href="#order"
              className="spice-button text-white px-6 py-2 rounded-full text-sm font-semibold"
            >
              Order Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled 
                  ? 'text-elegant-charcoal hover:text-spice-red' 
                  : 'text-white hover:text-spice-gold'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 py-4 px-2 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-elegant-charcoal hover:text-spice-red transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#order"
                className="block mt-4 spice-button text-white px-4 py-2 rounded-full text-center font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Order Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
