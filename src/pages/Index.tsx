
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import AboutPreview from '@/components/home/AboutPreview';
import ContactCta from '@/components/home/ContactCta';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { properties } from '@/data/properties';

const Index: React.FC = () => {
  const { language, t } = useLanguage();
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Structured data for real estate website
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": language === 'en' ? "Vietnam Luxury Real Estate" : "Bất Động Sản Cao Cấp Việt Nam",
    "description": language === 'en' 
      ? "Discover exclusive luxury real estate properties in Vietnam. Premium villas, apartments and houses in Ho Chi Minh City, Hanoi, Da Nang and more." 
      : "Khám phá bất động sản cao cấp độc quyền tại Việt Nam. Biệt thự, căn hộ và nhà cao cấp tại TP Hồ Chí Minh, Hà Nội, Đà Nẵng và nhiều nơi khác.",
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

  // Structured data for featured properties
  const featuredProperties = properties.filter(property => property.isFeatured).slice(0, 4);
  const propertyListStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": featuredProperties.map((property, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": language === 'en' ? property.title : property.titleVi,
        "description": language === 'en' ? property.description : property.descriptionVi,
        "image": property.images[0],
        "url": `https://vietnamluxuryrealestate.com/property/${property.id}`,
        "offers": {
          "@type": "Offer",
          "price": property.price,
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      }
    }))
  };

  // FAQ Structured Data for better SEO
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": language === 'en' ? "What areas in Vietnam offer the best luxury real estate investment?" : "Khu vực nào ở Việt Nam cung cấp đầu tư bất động sản cao cấp tốt nhất?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": language === 'en' ? "Ho Chi Minh City, Hanoi, Da Nang, Nha Trang, and Phu Quoc Island are currently the most promising areas for luxury real estate investment in Vietnam." : "Thành phố Hồ Chí Minh, Hà Nội, Đà Nẵng, Nha Trang và Đảo Phú Quốc hiện là những khu vực đầy hứa hẹn nhất cho đầu tư bất động sản cao cấp tại Việt Nam."
        }
      },
      {
        "@type": "Question",
        "name": language === 'en' ? "Can foreigners buy property in Vietnam?" : "Người nước ngoài có thể mua bất động sản tại Việt Nam không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": language === 'en' ? "Yes, foreigners can buy property in Vietnam. However, there are some restrictions: foreigners can purchase condominiums but not land, and ownership is typically limited to 50 years, though extensions are possible." : "Có, người nước ngoài có thể mua bất động sản tại Việt Nam. Tuy nhiên, có một số hạn chế: người nước ngoài có thể mua căn hộ chung cư nhưng không được mua đất, và quyền sở hữu thường giới hạn trong 50 năm, mặc dù có thể gia hạn."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{language === 'en' ? 'Vietnam Luxury Real Estate | Premium Properties in Vietnam' : 'Bất Động Sản Cao Cấp Việt Nam | Tài Sản Cao Cấp tại Việt Nam'}</title>
        <meta 
          name="description" 
          content={language === 'en' 
            ? 'Discover exclusive luxury real estate properties in Vietnam. Premium villas, apartments and houses in Ho Chi Minh City, Hanoi, Da Nang and more locations with expert guidance.' 
            : 'Khám phá bất động sản cao cấp độc quyền tại Việt Nam. Biệt thự, căn hộ và nhà cao cấp tại TP Hồ Chí Minh, Hà Nội, Đà Nẵng và nhiều nơi khác với hướng dẫn chuyên môn.'} 
        />
        <meta name="keywords" content="luxury real estate vietnam, premium villas vietnam, high-end apartments ho chi minh, luxury properties hanoi, da nang luxury homes, vietnam property investment" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vietnamluxuryrealestate.com" />
        <meta property="og:title" content={language === 'en' ? 'Vietnam Luxury Real Estate | Premium Properties' : 'Bất Động Sản Cao Cấp Việt Nam | Tài Sản Cao Cấp'} />
        <meta property="og:description" content={language === 'en' ? 'Discover exclusive luxury real estate in Vietnam' : 'Khám phá bất động sản cao cấp độc quyền tại Việt Nam'} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vnluxuryrealestate" />
        <meta name="twitter:title" content={language === 'en' ? 'Vietnam Luxury Real Estate | Premium Properties' : 'Bất Động Sản Cao Cấp Việt Nam | Tài Sản Cao Cấp'} />
        <meta name="twitter:description" content={language === 'en' ? 'Discover exclusive luxury real estate in Vietnam' : 'Khám phá bất động sản cao cấp độc quyền tại Việt Nam'} />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" />
        
        <link rel="canonical" href="https://vietnamluxuryrealestate.com" />
        
        <script type="application/ld+json">
          {JSON.stringify(websiteStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(propertyListStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
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
