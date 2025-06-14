
import { MapPin, Clock, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, number: '1000+', label: 'Happy Customers' },
    { icon: Award, number: '5', label: 'Years Experience' },
    { icon: Clock, number: '12', label: 'Hours Daily' },
    { icon: MapPin, number: '1', label: 'Prime Location' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-elegant-cream to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-elegant-black mb-4">
            About <span className="text-spice-red">Crispy Bites</span>
          </h2>
          <div className="w-24 h-1 bg-spice-gold mx-auto mb-8"></div>
          <p className="text-lg text-elegant-charcoal max-w-3xl mx-auto leading-relaxed">
            Nestled in the heart of Rohini Sector 17, Delhi, Crispy Bites is more than just a restaurant—it's a culinary journey that brings together the rich flavors of North Indian and Chinese cuisine under one roof.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-playfair font-bold text-elegant-black mb-6">
              Our Story
            </h3>
            <p className="text-elegant-charcoal mb-6 leading-relaxed">
              Founded with a passion for authentic flavors and exceptional dining experiences, Crispy Bites has been serving the community of Rohini for over 5 years. Our commitment to quality ingredients, traditional cooking methods, and innovative presentations has made us a favorite among food enthusiasts.
            </p>
            <p className="text-elegant-charcoal mb-6 leading-relaxed">
              From the sizzling tandoors that create our signature naans to the high-flame woks that stir-fry our Chinese delicacies, every dish at Crispy Bites tells a story of culinary excellence and cultural fusion.
            </p>
            <div className="bg-spice-red/10 p-6 rounded-lg border-l-4 border-spice-red">
              <p className="text-elegant-charcoal italic">
                "Our mission is simple: to serve food that not only satisfies your hunger but also touches your soul. Every meal prepared in our kitchen is crafted with love, care, and the finest ingredients."
              </p>
              <p className="text-spice-red font-semibold mt-4">- Chef Ramesh Kumar, Head Chef</p>
            </div>
          </div>

          <div className="animate-scale-in">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h4 className="text-2xl font-playfair font-bold text-elegant-black mb-6 text-center">
                Location & Hours
              </h4>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-spice-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-elegant-black">Address</p>
                    <p className="text-elegant-charcoal">
                      Sector 17, Rohini<br />
                      New Delhi - 110089<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-spice-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-elegant-black">Opening Hours</p>
                    <p className="text-elegant-charcoal">
                      Mon - Sun: 11:00 AM - 11:00 PM<br />
                      Kitchen closes at 10:30 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Embedded Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-spice-red mx-auto mb-2" />
                  <p className="text-elegant-charcoal">Interactive Map</p>
                  <p className="text-sm text-gray-500">Rohini Sector 17, Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-spice-red rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-spice-red mb-2">{stat.number}</h4>
              <p className="text-elegant-charcoal font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
