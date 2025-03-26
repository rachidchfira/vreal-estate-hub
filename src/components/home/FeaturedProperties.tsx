
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import PropertyCard from '@/components/properties/PropertyCard';
import { properties } from '@/data/properties';

const FeaturedProperties: React.FC = () => {
  const { t } = useLanguage();
  const featuredProperties = properties.filter(property => property.isFeatured).slice(0, 4);

  return (
    <section className="section-spacing bg-estate-light">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <span className="inline-block text-estate-gold text-sm uppercase tracking-wider font-medium mb-2">
            {t('home.featured.subtitle')}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-estate-charcoal">
            {t('home.featured.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/properties"
            className="luxury-button"
          >
            {t('home.featured.viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
