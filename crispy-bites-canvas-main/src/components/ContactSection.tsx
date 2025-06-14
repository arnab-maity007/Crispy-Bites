
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon!",
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Sector 17, Rohini', 'New Delhi - 110089', 'India'],
      color: 'text-spice-red'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 11 2345 6789'],
      color: 'text-spice-orange'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@crispybites.com', 'orders@crispybites.com'],
      color: 'text-spice-gold'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon - Sun: 11:00 AM - 11:00 PM', 'Kitchen closes at 10:30 PM'],
      color: 'text-spice-red'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-elegant-black mb-4">
            Get In <span className="text-spice-red">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-spice-gold mx-auto mb-8"></div>
          <p className="text-lg text-elegant-charcoal max-w-2xl mx-auto">
            Have a question, feedback, or want to make a reservation? We'd love to hear from you. Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-playfair font-bold text-elegant-black mb-8">
              Contact Information
            </h3>
            
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0`}>
                  <info.icon className={`w-6 h-6 ${info.color}`} />
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-elegant-black text-lg mb-2">
                    {info.title}
                  </h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-elegant-charcoal">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center mt-8">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-spice-red mx-auto mb-4" />
                <h4 className="text-xl font-playfair font-bold text-elegant-black mb-2">
                  Find Us Here
                </h4>
                <p className="text-elegant-charcoal">
                  Sector 17, Rohini, New Delhi
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Click to open in Google Maps
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-spice-red/5 to-spice-orange/5 rounded-2xl p-8">
            <h3 className="text-3xl font-playfair font-bold text-elegant-black mb-8">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-elegant-black mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-spice-red focus:ring-2 focus:ring-spice-red/20 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-elegant-black mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-spice-red focus:ring-2 focus:ring-spice-red/20 transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-elegant-black mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-spice-red focus:ring-2 focus:ring-spice-red/20 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-elegant-black mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-spice-red focus:ring-2 focus:ring-spice-red/20 transition-colors resize-none"
                  placeholder="Tell us about your inquiry, feedback, or any questions you have..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full spice-button text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-spice-red/10 rounded-2xl p-8">
            <h3 className="text-2xl font-playfair font-bold text-elegant-black mb-4">
              For Immediate Assistance
            </h3>
            <p className="text-elegant-charcoal mb-6">
              Need immediate help with your order or have urgent questions? Call us directly!
            </p>
            <a
              href="tel:+919876543210"
              className="spice-button text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now: +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
