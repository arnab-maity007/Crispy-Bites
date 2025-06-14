
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Arjun Patel',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
      rating: 5,
      text: 'Absolutely amazing food! The butter chicken was phenomenal and the naan was perfectly soft. The ambiance is great and the staff is very friendly. Will definitely visit again!',
      dish: 'Butter Chicken & Garlic Naan',
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=150',
      rating: 5,
      text: 'The Chinese food here is exceptional! Loved the Hakka noodles and chilli chicken. The portions are generous and the flavors are authentic. Highly recommended for Chinese food lovers.',
      dish: 'Hakka Noodles & Chilli Chicken',
      date: '1 week ago'
    },
    {
      id: 3,
      name: 'Rajesh Kumar',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
      rating: 5,
      text: 'Best restaurant in Rohini! The paneer tikka masala was outstanding. Great variety of vegetarian options. The service is quick and the prices are reasonable. A must-visit place!',
      dish: 'Paneer Tikka Masala',
      date: '3 days ago'
    },
    {
      id: 4,
      name: 'Sneha Agarwal',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
      rating: 4,
      text: 'Great food quality and taste! The biryani was aromatic and flavorful. The restaurant has a nice atmosphere and the staff is courteous. Good value for money.',
      dish: 'Chicken Biryani',
      date: '5 days ago'
    },
    {
      id: 5,
      name: 'Amit Singh',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
      rating: 5,
      text: 'Fantastic dining experience! The tandoori chicken was perfectly cooked and the dal makhani was rich and creamy. The portions are good and the service is excellent.',
      dish: 'Tandoori Chicken & Dal Makhani',
      date: '1 week ago'
    },
    {
      id: 6,
      name: 'Kavya Reddy',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
      rating: 5,
      text: 'Love this place! The honey chilli potato is amazing and the sweet & sour chicken is perfectly balanced. Great place for family dinners. Highly recommended!',
      dish: 'Honey Chilli Potato',
      date: '4 days ago'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-elegant-cream to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-elegant-black mb-4">
            What Our <span className="text-spice-red">Customers Say</span>
          </h2>
          <div className="w-24 h-1 bg-spice-gold mx-auto mb-8"></div>
          <p className="text-lg text-elegant-charcoal max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their dining experience at Crispy Bites.
          </p>
        </div>

        {/* Featured Review Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-6 right-6 text-spice-red/20">
                <Quote className="w-16 h-16" />
              </div>
              
              <div className="flex items-center mb-6">
                <img
                  src={reviews[currentReview].avatar}
                  alt={reviews[currentReview].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-xl font-playfair font-bold text-elegant-black">
                    {reviews[currentReview].name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex">{renderStars(reviews[currentReview].rating)}</div>
                    <span className="text-sm text-elegant-charcoal">
                      {reviews[currentReview].date}
                    </span>
                  </div>
                </div>
              </div>
              
              <blockquote className="text-lg text-elegant-charcoal leading-relaxed mb-6 italic">
                "{reviews[currentReview].text}"
              </blockquote>
              
              <div className="text-sm text-spice-red font-semibold">
                Ordered: {reviews[currentReview].dish}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-spice-red" />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-spice-red" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview ? 'bg-spice-red' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Review Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-spice-red mb-2">4.8</div>
            <div className="flex justify-center mb-2">{renderStars(5)}</div>
            <div className="text-sm text-elegant-charcoal">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-spice-orange mb-2">500+</div>
            <div className="text-sm text-elegant-charcoal">Happy Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-spice-gold mb-2">98%</div>
            <div className="text-sm text-elegant-charcoal">Positive Feedback</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-spice-red mb-2">1000+</div>
            <div className="text-sm text-elegant-charcoal">Satisfied Customers</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-elegant-charcoal mb-6">
            Ready to experience the flavors that our customers love?
          </p>
          <a
            href="#order"
            className="spice-button text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2"
          >
            Order Your Favorites Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
