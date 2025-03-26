
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const AboutPreview: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section-spacing">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="inline-block text-estate-gold text-sm uppercase tracking-wider font-medium mb-2">
              {t('home.about.subtitle')}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-estate-charcoal mb-6">
              {t('home.about.title')}
            </h2>
            <p className="text-estate-charcoal/80 mb-8 leading-relaxed">
              {t('home.about.description')}
            </p>
            <Link
              to="/about"
              className="luxury-button"
            >
              {t('home.about.readMore')}
            </Link>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="About Luxury Estate"
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-lg font-medium">
                    15+ Years of Excellence
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-40 h-40 md:w-56 md:h-56 bg-estate-gold/10 rounded-md z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
