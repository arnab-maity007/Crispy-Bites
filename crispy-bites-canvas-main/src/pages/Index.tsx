
import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MenuSection from '../components/MenuSection';
import ChefsSection from '../components/ChefsSection';
import ReviewsSection from '../components/ReviewsSection';
import OrderSection from '../components/OrderSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FloatingOrderButton from '../components/FloatingOrderButton';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <ChefsSection />
      <ReviewsSection />
      <OrderSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <FloatingOrderButton />
    </div>
  );
};

export default Index;
