
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-estate-light py-20">
          <div className="container mx-auto container-padding text-center">
            <span className="inline-block text-estate-gold text-sm uppercase tracking-wider font-medium mb-2">
              {t('contact.subtitle')}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-estate-charcoal mb-6">
              {t('contact.title')}
            </h1>
          </div>
        </section>
        
        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-md shadow-sm">
                <h2 className="text-2xl font-medium text-estate-charcoal mb-6">
                  {t('contact.form.send')}
                </h2>
                
                {formSubmitted ? (
                  <div className="flex items-center bg-green-50 text-green-700 p-4 rounded-md animate-fade-in">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>{t('contact.form.success')}</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-estate-charcoal/70 mb-2">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-estate-charcoal/10 rounded-sm focus:outline-none focus:border-estate-gold focus:ring-1 focus:ring-estate-gold/20"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-estate-charcoal/70 mb-2">
                          {t('contact.form.email')}
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-estate-charcoal/10 rounded-sm focus:outline-none focus:border-estate-gold focus:ring-1 focus:ring-estate-gold/20"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-estate-charcoal/70 mb-2">
                          {t('contact.form.phone')}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-estate-charcoal/10 rounded-sm focus:outline-none focus:border-estate-gold focus:ring-1 focus:ring-estate-gold/20"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-estate-charcoal/70 mb-2">
                        {t('contact.form.message')}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-estate-charcoal/10 rounded-sm focus:outline-none focus:border-estate-gold focus:ring-1 focus:ring-estate-gold/20"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="luxury-button"
                    >
                      {t('contact.form.send')}
                    </button>
                  </form>
                )}
              </div>
              
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-medium text-estate-charcoal mb-6">
                  {t('contact.info.title')}
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-estate-gold/10 flex items-center justify-center rounded-full mr-4">
                      <MapPin className="w-5 h-5 text-estate-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-estate-charcoal mb-1">
                        {t('contact.info.address')}
                      </h3>
                      <p className="text-estate-charcoal/70">
                        123 Nguyen Hue Street, District 1<br />
                        Ho Chi Minh City, Vietnam
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-estate-gold/10 flex items-center justify-center rounded-full mr-4">
                      <Phone className="w-5 h-5 text-estate-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-estate-charcoal mb-1">
                        {t('contact.info.phone')}
                      </h3>
                      <p className="text-estate-charcoal/70">
                        +84 28 1234 5678<br />
                        +84 90 1234 5678
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-estate-gold/10 flex items-center justify-center rounded-full mr-4">
                      <Mail className="w-5 h-5 text-estate-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-estate-charcoal mb-1">
                        {t('contact.info.email')}
                      </h3>
                      <p className="text-estate-charcoal/70">
                        info@luxuryestate.vn<br />
                        support@luxuryestate.vn
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-estate-gold/10 flex items-center justify-center rounded-full mr-4">
                      <Clock className="w-5 h-5 text-estate-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-estate-charcoal mb-1">
                        {t('contact.info.hours')}
                      </h3>
                      <p className="text-estate-charcoal/70">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="pb-16">
          <div className="container mx-auto container-padding">
            <div className="h-[400px] rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241374391103!2d106.70231881471815!3d10.777463692320878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4670702e31%3A0xa5777fb3a5bb9909!2sNguyen%20Hue%20Walking%20Street!5e0!3m2!1sen!2s!4v1661396712345!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
