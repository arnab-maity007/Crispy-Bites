
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  
  const quotes = [
    "Good food is the foundation of genuine happiness.",
    "Eating is a necessity, but cooking is an art.",
    "Food tastes better when you eat it with your loved ones.",
  ];

  const foodImages = [
    'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80', // Indian curry
    'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80', // Chinese noodles
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80', // Indian biryani
    'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80', // Chinese dim sum
    'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80', // Indian tandoori
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % foodImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [foodImages.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Images */}
      <div className="absolute inset-0">
        {foodImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
      </div>

      {/* Animated Food Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 bg-spice-gold rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-spice-orange rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-16 w-20 h-20 bg-spice-red rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-10 w-14 h-14 bg-spice-warmGold rounded-full opacity-35 animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold text-white text-shadow mb-6">
            <span className="block">Crispy</span>
            <span className="block text-spice-gold">Bites</span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-playfair text-white text-shadow mb-8">
            Where Spice Meets Soul
          </p>

          {/* Dynamic Quotes */}
          <div className="h-20 flex items-center justify-center mb-12">
            <blockquote className="text-lg md:text-xl text-white text-shadow font-light italic max-w-2xl transition-all duration-1000 animate-fade-in">
              "{quotes[currentQuote]}"
            </blockquote>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#order"
              className="spice-button text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 transform hover:scale-105 transition-all duration-300"
            >
              Order Now
            </a>
            <a
              href="#menu"
              className="glass-effect text-white px-8 py-4 rounded-full text-lg font-semibold border-2 border-white/30 hover:border-white/50 transform hover:scale-105 transition-all duration-300"
            >
              Explore Menu
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
