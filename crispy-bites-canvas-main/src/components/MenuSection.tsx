
import { useState } from 'react';
import { IndianRupee } from 'lucide-react';

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('north-indian');

  const northIndianMenu = [
    {
      id: 1,
      name: 'Butter Chicken',
      price: 299,
      description: 'Tender chicken cooked in rich tomato-based creamy sauce with aromatic spices',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=400',
      isVeg: false,
      popular: true
    },
    {
      id: 2,
      name: 'Paneer Tikka Masala',
      price: 249,
      description: 'Grilled cottage cheese cubes in spicy, tangy tomato-onion gravy',
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=400',
      isVeg: true,
      popular: true
    },
    {
      id: 3,
      name: 'Dal Makhani',
      price: 199,
      description: 'Slow-cooked black lentils with butter, cream and aromatic spices',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400',
      isVeg: true,
      popular: false
    },
    {
      id: 4,
      name: 'Tandoori Chicken',
      price: 349,
      description: 'Marinated chicken roasted in traditional clay oven with yogurt and spices',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=400',
      isVeg: false,
      popular: true
    },
    {
      id: 5,
      name: 'Biryani (Chicken)',
      price: 279,
      description: 'Fragrant basmati rice layered with spiced chicken and aromatic herbs',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d4d6?auto=format&fit=crop&q=80&w=400',
      isVeg: false,
      popular: true
    },
    {
      id: 6,
      name: 'Garlic Naan',
      price: 79,
      description: 'Soft, fluffy bread topped with fresh garlic and herbs from tandoor',
      image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&q=80&w=400',
      isVeg: true,
      popular: false
    }
  ];

  const chineseMenu = [
    {
      id: 7,
      name: 'Chicken Hakka Noodles',
      price: 229,
      description: 'Stir-fried noodles with chicken, vegetables and Chinese sauces',
      image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=400',
      isVeg: false,
      popular: true
    },
    {
      id: 8,
      name: 'Veg Manchurian',
      price: 199,
      description: 'Crispy vegetable balls in tangy Indo-Chinese sauce',
      image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&q=80&w=400',
      isVeg: true,
      popular: true
    },
    {
      id: 9,
      name: 'Chilli Chicken',
      price: 269,
      description: 'Battered chicken tossed with bell peppers in spicy sauce',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=400',
      isVeg: false,
      popular: true
    },
    {
      id: 10,
      name: 'Veg Fried Rice',
      price: 179,
      description: 'Wok-tossed rice with fresh vegetables and aromatic seasonings',
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=400',
      isVeg: true,
      popular: false
    },
    {
      id: 11,
      name: 'Honey Chilli Potato',
      price: 189,
      description: 'Crispy potato strips glazed with honey and chilli sauce',
      image: 'https://images.unsplash.com/photo-1573821663912-6df460f9c684?auto=format&fit=crop&q=80&w=400',
      isVeg: true,
      popular: true
    },
    {
      id: 12,
      name: 'Sweet & Sour Chicken',
      price: 249,
      description: 'Tender chicken pieces in tangy sweet and sour sauce',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=400',
      isVeg: false,
      popular: false
    }
  ];

  const currentMenu = activeTab === 'north-indian' ? northIndianMenu : chineseMenu;

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-elegant-black mb-4">
            Our <span className="text-spice-red">Menu</span>
          </h2>
          <div className="w-24 h-1 bg-spice-gold mx-auto mb-8"></div>
          <p className="text-lg text-elegant-charcoal max-w-2xl mx-auto">
            Discover our carefully crafted selection of authentic North Indian and Chinese dishes, prepared with the finest ingredients and traditional techniques.
          </p>
        </div>

        {/* Menu Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-1 flex">
            <button
              onClick={() => setActiveTab('north-indian')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'north-indian'
                  ? 'bg-spice-red text-white shadow-lg'
                  : 'text-elegant-charcoal hover:text-spice-red'
              }`}
            >
              North Indian
            </button>
            <button
              onClick={() => setActiveTab('chinese')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'chinese'
                  ? 'bg-spice-red text-white shadow-lg'
                  : 'text-elegant-charcoal hover:text-spice-red'
              }`}
            >
              Chinese
            </button>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentMenu.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                {item.popular && (
                  <div className="absolute top-4 left-4 bg-spice-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <div className={`w-3 h-3 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`}></div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold text-elegant-black mb-2">
                  {item.name}
                </h3>
                <p className="text-elegant-charcoal text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-spice-red font-bold text-xl">
                    <IndianRupee className="w-5 h-5" />
                    {item.price}
                  </div>
                  <button className="spice-button text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#order"
            className="spice-button text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2"
          >
            View Full Menu & Order
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
