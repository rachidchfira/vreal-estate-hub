
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const ContactCta: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517404215738-15263e9f9178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-estate-charcoal/70"></div>
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-estate-gold text-sm uppercase tracking-wider font-medium mb-2">
            {t('home.contact.subtitle')}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            {t('home.contact.title')}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            {t('home.contact.description')}
          </p>
          <Link
            to="/contact"
            className="luxury-button"
          >
            {t('home.contact.button')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
