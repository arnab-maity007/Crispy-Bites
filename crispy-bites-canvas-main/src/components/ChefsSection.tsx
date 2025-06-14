
import { Award, Users, Clock } from 'lucide-react';

const ChefsSection = () => {
  const chefs = [
    {
      id: 1,
      name: 'Chef Ramesh Kumar',
      title: 'Head Chef & North Indian Specialist',
      experience: '15+ Years',
      specialty: 'Tandoor & Curry Master',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=400',
      description: 'Master of traditional North Indian cuisine with expertise in tandoor cooking and authentic spice blends.',
      achievements: ['Winner of Delhi Curry Competition 2019', 'Featured in Food & Wine Magazine', 'Trained in Punjab & Rajasthan']
    },
    {
      id: 2,
      name: 'Chef Wang Li',
      title: 'Chinese Cuisine Expert',
      experience: '12+ Years',
      specialty: 'Wok & Noodle Specialist',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400',
      description: 'Authentic Chinese cooking techniques with modern Indo-Chinese fusion expertise.',
      achievements: ['Certified Wok Master', 'Featured in Asian Culinary Times', 'Trained in Beijing & Shanghai']
    },
    {
      id: 3,
      name: 'Chef Priya Sharma',
      title: 'Sous Chef & Dessert Specialist',
      experience: '8+ Years',
      specialty: 'Vegetarian & Sweets',
      image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&q=80&w=400',
      description: 'Expert in vegetarian delicacies and traditional Indian sweets with modern presentation.',
      achievements: ['Best Vegetarian Chef 2020', 'Cookbook Author', 'Featured on Food Network']
    }
  ];

  return (
    <section id="chefs" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-elegant-black mb-4">
            Meet Our <span className="text-spice-red">Master Chefs</span>
          </h2>
          <div className="w-24 h-1 bg-spice-gold mx-auto mb-8"></div>
          <p className="text-lg text-elegant-charcoal max-w-3xl mx-auto">
            Our culinary team brings together decades of experience and passion for authentic flavors. Each chef is a master of their craft, dedicated to creating extraordinary dining experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {chefs.map((chef, index) => (
            <div
              key={chef.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-playfair font-bold">{chef.name}</h3>
                  <p className="text-sm opacity-90">{chef.title}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1 text-spice-red">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-semibold">{chef.experience}</span>
                  </div>
                  <div className="flex items-center gap-1 text-spice-orange">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-semibold">{chef.specialty}</span>
                  </div>
                </div>
                
                <p className="text-elegant-charcoal text-sm mb-4 leading-relaxed">
                  {chef.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-elegant-black text-sm">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {chef.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-xs text-elegant-charcoal flex items-start gap-2">
                        <span className="w-1 h-1 bg-spice-red rounded-full mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chef Philosophy Section */}
        <div className="bg-spice-red/5 rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-playfair font-bold text-elegant-black mb-6">
              Our Culinary Philosophy
            </h3>
            <blockquote className="text-lg text-elegant-charcoal italic mb-6 leading-relaxed">
              "At Crispy Bites, we believe that great food is born from the perfect harmony of traditional techniques, fresh ingredients, and passionate craftsmanship. Every dish that leaves our kitchen carries the soul of our culinary heritage."
            </blockquote>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-spice-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-elegant-black mb-2">Authentic Recipes</h4>
                <p className="text-sm text-elegant-charcoal">Traditional recipes passed down through generations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-spice-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-elegant-black mb-2">Expert Team</h4>
                <p className="text-sm text-elegant-charcoal">Skilled chefs with decades of combined experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-spice-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-elegant-black mb-2">Fresh Daily</h4>
                <p className="text-sm text-elegant-charcoal">Ingredients sourced fresh daily for optimal flavor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefsSection;
