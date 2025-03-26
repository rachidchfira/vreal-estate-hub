
import React, { useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import AboutPreview from '@/components/home/AboutPreview';
import ContactCta from '@/components/home/ContactCta';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index: React.FC = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
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
