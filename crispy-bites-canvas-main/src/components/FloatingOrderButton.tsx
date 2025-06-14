
import { useState, useEffect } from 'react';
import { ShoppingCart, Phone } from 'lucide-react';

const FloatingOrderButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Order Button */}
      <a
        href="#order"
        className="group relative"
      >
        <div className="spice-button text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse">
          <ShoppingCart className="w-6 h-6" />
        </div>
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-elegant-black text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Order Now
        </div>
      </a>

      {/* Call Button */}
      <a
        href="tel:+919876543210"
        className="group relative"
      >
        <div className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
          <Phone className="w-6 h-6" />
        </div>
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-elegant-black text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Call Us
        </div>
      </a>
    </div>
  );
};

export default FloatingOrderButton;
