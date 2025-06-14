
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Our Chefs', href: '#chefs' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const menuHighlights = [
    'Butter Chicken',
    'Paneer Tikka Masala',
    'Hakka Noodles',
    'Chilli Chicken',
    'Tandoori Chicken',
    'Biryani'
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/crispybites', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/crispybites', color: 'hover:text-pink-600' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/crispybites', color: 'hover:text-red-600' }
  ];

  return (
    <footer className="bg-elegant-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-playfair font-bold text-spice-gold mb-4">
              Crispy Bites
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Where spice meets soul. Experience the authentic flavors of North Indian and Chinese cuisine in the heart of Rohini, Delhi.
            </p>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-spice-red flex-shrink-0" />
                <span>Sector 17, Rohini, New Delhi - 110089</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-spice-red flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-spice-red flex-shrink-0" />
                <span>info@crispybites.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-spice-red flex-shrink-0" />
                <span>Mon-Sun: 11:00 AM - 11:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-playfair font-bold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-spice-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Highlights */}
          <div>
            <h4 className="text-xl font-playfair font-bold text-white mb-4">
              Popular Dishes
            </h4>
            <ul className="space-y-2">
              {menuHighlights.map((dish) => (
                <li key={dish}>
                  <a
                    href="#menu"
                    className="text-gray-300 hover:text-spice-gold transition-colors duration-300"
                  >
                    {dish}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-xl font-playfair font-bold text-white mb-4">
              Stay Connected
            </h4>
            <p className="text-gray-300 mb-4">
              Follow us on social media for the latest updates and mouth-watering food photos!
            </p>
            
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-spice-red hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h5 className="font-semibold mb-2">Get Special Offers</h5>
              <p className="text-sm text-gray-300 mb-3">
                Subscribe to get exclusive deals and updates
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-700 rounded text-sm focus:outline-none focus:ring-2 focus:ring-spice-red"
                />
                <button className="bg-spice-red px-4 py-2 rounded text-sm font-semibold hover:bg-spice-red/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Awards & Certifications */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-12 h-12 bg-spice-red rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold">★</span>
              </div>
              <p className="text-sm text-gray-300">4.8 Star Rating</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-spice-orange rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold">✓</span>
              </div>
              <p className="text-sm text-gray-300">FSSAI Certified</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-spice-gold rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold">♡</span>
              </div>
              <p className="text-sm text-gray-300">1000+ Happy Customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Crispy Bites Restaurant. All rights reserved.
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-400">
              Made with <Heart className="w-4 h-4 text-spice-red fill-current" /> for food lovers in Delhi
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
