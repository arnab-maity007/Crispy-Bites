
import { Smartphone, Globe, Truck, Clock } from 'lucide-react';

const OrderSection = () => {
  const orderOptions = [
    {
      id: 1,
      name: 'Direct Order',
      icon: Smartphone,
      description: 'Order directly from our website for the best experience',
      benefits: ['Exclusive deals', 'Direct communication', 'Faster service'],
      action: 'Order Now',
      href: '#contact',
      color: 'bg-spice-red'
    },
    {
      id: 2,
      name: 'Swiggy',
      icon: Globe,
      description: 'Order through Swiggy for convenient delivery',
      benefits: ['Wide coverage', 'Multiple payment options', 'Live tracking'],
      action: 'Order on Swiggy',
      href: 'https://swiggy.com',
      color: 'bg-orange-500'
    },
    {
      id: 3,
      name: 'Zomato',
      icon: Truck,
      description: 'Get your favorite dishes delivered via Zomato',
      benefits: ['Fast delivery', 'Great offers', 'Customer reviews'],
      action: 'Order on Zomato',
      href: 'https://zomato.com',
      color: 'bg-red-600'
    },
    {
      id: 4,
      name: 'MagicPin',
      icon: Clock,
      description: 'Order through MagicPin and enjoy exclusive rewards',
      benefits: ['Cashback offers', 'Loyalty points', 'Special discounts'],
      action: 'Order on MagicPin',
      href: 'https://magicpin.in',
      color: 'bg-purple-600'
    }
  ];

  const deliveryFeatures = [
    {
      icon: Clock,
      title: 'Quick Delivery',
      description: '30-45 minutes average delivery time'
    },
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'Free delivery on orders above ₹399'
    },
    {
      icon: Smartphone,
      title: 'Easy Ordering',
      description: 'Simple and secure online ordering'
    },
    {
      icon: Globe,
      title: 'Wide Coverage',
      description: 'Delivering across Rohini and nearby areas'
    }
  ];

  return (
    <section id="order" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-elegant-black mb-4">
            Order <span className="text-spice-red">Now</span>
          </h2>
          <div className="w-24 h-1 bg-spice-gold mx-auto mb-8"></div>
          <p className="text-lg text-elegant-charcoal max-w-3xl mx-auto">
            Craving our delicious food? Order now through multiple convenient channels and get your favorite dishes delivered fresh to your doorstep.
          </p>
        </div>

        {/* Order Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {orderOptions.map((option, index) => (
            <div
              key={option.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-spice-red/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${option.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                <option.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-playfair font-bold text-elegant-black text-center mb-3">
                {option.name}
              </h3>
              
              <p className="text-elegant-charcoal text-sm text-center mb-4">
                {option.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {option.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-xs text-elegant-charcoal flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-spice-red rounded-full"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
              
              <a
                href={option.href}
                target={option.href.startsWith('http') ? '_blank' : '_self'}
                rel={option.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`block w-full text-center py-3 px-4 rounded-full font-semibold text-white transition-all duration-300 ${option.color} hover:opacity-90 hover:scale-105`}
              >
                {option.action}
              </a>
            </div>
          ))}
        </div>

        {/* Delivery Features */}
        <div className="bg-gradient-to-r from-spice-red/10 to-spice-orange/10 rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-3xl font-playfair font-bold text-elegant-black text-center mb-8">
            Why Order From Us?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-spice-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-playfair font-bold text-elegant-black mb-2">
                  {feature.title}
                </h4>
                <p className="text-elegant-charcoal text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offers */}
        <div className="bg-spice-red rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-playfair font-bold mb-4">
            🎉 Special Offers
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-bold mb-2">First Order</h4>
              <p className="text-sm">Get 20% off on your first order above ₹500</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-bold mb-2">Free Delivery</h4>
              <p className="text-sm">Free delivery on all orders above ₹399</p>
            </div>
          </div>
          <div className="mt-6">
            <a
              href="#contact"
              className="bg-white text-spice-red px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Order Now & Save
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
