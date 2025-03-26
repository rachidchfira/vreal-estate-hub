
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import AboutPreview from '@/components/home/AboutPreview';
import ContactCta from '@/components/home/ContactCta';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/context/LanguageContext';

const Index: React.FC = () => {
  const { language, t } = useLanguage();
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Structured data for real estate website
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": language === 'en' ? "Vietnam Luxury Real Estate" : "Bất Động Sản Cao Cấp Việt Nam",
    "description": language === 'en' 
      ? "Luxury Real Estate Solutions in Vietnam" 
      : "Giải Pháp Bất Động Sản Cao Cấp tại Việt Nam",
    "url": "https://vietnamluxuryrealestate.com",
    "logo": "https://vietnamluxuryrealestate.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ho Chi Minh City",
      "addressRegion": "Ho Chi Minh",
      "addressCountry": "Vietnam"
    },
    "telephone": "+84-123-456-7890",
    "sameAs": [
      "https://www.facebook.com/VietnamLuxuryRealEstate",
      "https://twitter.com/vnluxuryrealestate",
      "https://www.instagram.com/vietnamluxuryrealestate"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{language === 'en' ? 'Vietnam Luxury Real Estate | Premium Properties' : 'Bất Động Sản Cao Cấp Việt Nam | Tài Sản Cao Cấp'}</title>
        <meta 
          name="description" 
          content={language === 'en' 
            ? 'Discover exclusive luxury real estate properties in Vietnam. Premium villas, apartments and houses in Ho Chi Minh City, Hanoi, Da Nang and more.' 
            : 'Khám phá bất động sản cao cấp độc quyền tại Việt Nam. Biệt thự, căn hộ và nhà cao cấp tại TP Hồ Chí Minh, Hà Nội, Đà Nẵng và nhiều nơi khác.'} 
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProperties />
        <AboutPreview />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
