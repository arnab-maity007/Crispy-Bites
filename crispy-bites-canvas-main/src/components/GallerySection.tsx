
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
      alt: 'Restaurant Interior - Elegant dining area',
      category: 'Ambiance'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&q=80&w=800',
      alt: 'Delicious Butter Chicken',
      category: 'Food'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&q=80&w=800',
      alt: 'Chef preparing tandoori dishes',
      category: 'Kitchen'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=800',
      alt: 'Authentic Chinese Noodles',
      category: 'Food'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800',
      alt: 'Cozy restaurant atmosphere',
      category: 'Ambiance'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&q=80&w=800',
      alt: 'Fresh Naan from Tandoor',
      category: 'Food'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1577303935007-0d306ee638cf?auto=format&fit=crop&q=80&w=800',
      alt: 'Chefs at work in kitchen',
      category: 'Kitchen'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800',
      alt: 'Colorful Indian Spices',
      category: 'Kitchen'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?auto=format&fit=crop&q=80&w=800',
      alt: 'Elegant table setting',
      category: 'Ambiance'
    }
  ];

  const categories = ['All', 'Food', 'Ambiance', 'Kitchen'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-elegant-black mb-4">
            Our <span className="text-spice-red">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-spice-gold mx-auto mb-8"></div>
          <p className="text-lg text-elegant-charcoal max-w-2xl mx-auto">
            Take a visual journey through our restaurant, from our beautifully crafted dishes to our warm, inviting atmosphere.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-lg flex flex-wrap gap-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-spice-red text-white shadow-lg'
                    : 'text-elegant-charcoal hover:text-spice-red hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">{image.alt}</p>
                  <p className="text-sm opacity-80">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="max-w-4xl max-h-full">
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />
              <div className="text-center mt-4 text-white">
                <p className="font-semibold">{filteredImages[selectedImage].alt}</p>
                <p className="text-sm opacity-80">{filteredImages[selectedImage].category}</p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-elegant-charcoal mb-6">
            Experience the ambiance and flavors that make Crispy Bites special
          </p>
          <a
            href="#contact"
            className="spice-button text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2"
          >
            Visit Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
