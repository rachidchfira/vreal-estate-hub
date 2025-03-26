
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PropertyCard from '@/components/properties/PropertyCard';
import { properties } from '@/data/properties';
import { Search, Filter, ArrowDownUp } from 'lucide-react';

const Properties: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProperties, setFilteredProperties] = useState(properties);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter properties based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredProperties(properties);
    } else {
      const term = searchTerm.toLowerCase();
      const filtered = properties.filter(
        (property) =>
          property.title.toLowerCase().includes(term) ||
          property.titleVi.toLowerCase().includes(term) ||
          property.location.toLowerCase().includes(term) ||
          property.locationVi.toLowerCase().includes(term) ||
          property.type.toLowerCase().includes(term) ||
          property.typeVi.toLowerCase().includes(term)
      );
      setFilteredProperties(filtered);
    }
  }, [searchTerm]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header Section */}
        <section className="bg-estate-light py-12 md:py-16">
          <div className="container mx-auto container-padding">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-estate-gold text-sm uppercase tracking-wider font-medium mb-2">
                {t('properties.subtitle')}
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-estate-charcoal mb-6">
                {t('properties.title')}
              </h1>
              
              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={`${t('properties.search')}...`}
                  className="w-full h-12 pl-12 pr-4 rounded-md border border-estate-charcoal/10 focus:outline-none focus:ring-2 focus:ring-estate-gold/50"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-estate-charcoal/50" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Filter & Sort Controls */}
        <section className="py-6 border-b border-estate-charcoal/10">
          <div className="container mx-auto container-padding">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center">
                <button className="flex items-center gap-2 px-4 py-2 border border-estate-charcoal/10 rounded-md hover:bg-estate-light transition-colors">
                  <Filter className="h-4 w-4" />
                  <span>{t('properties.filter')}</span>
                </button>
              </div>
              
              <div className="flex items-center">
                <button className="flex items-center gap-2 px-4 py-2 border border-estate-charcoal/10 rounded-md hover:bg-estate-light transition-colors">
                  <ArrowDownUp className="h-4 w-4" />
                  <span>{t('properties.sort')}</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Properties Grid */}
        <section className="py-12">
          <div className="container mx-auto container-padding">
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-estate-charcoal/70">
                  {t('properties.noResults')}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Properties;
