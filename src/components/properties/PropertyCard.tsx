
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Property } from '@/data/properties';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, featured = false }) => {
  const { language, t } = useLanguage();
  const { id, title, titleVi, price, location, locationVi, bedrooms, bathrooms, area, images } = property;

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <Link 
      to={`/property/${id}`} 
      className={`group luxury-card block ${featured ? 'lg:col-span-2 xl:col-span-1' : ''}`}
    >
      <div className="relative overflow-hidden">
        {/* Property Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={images[0]} 
            alt={language === 'en' ? title : titleVi} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="property-overlay">
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block px-4 py-1 bg-estate-gold text-white text-sm font-medium rounded-sm">
                {formattedPrice}
              </span>
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="p-4">
          <h3 className="text-lg font-medium text-estate-charcoal truncate transition-colors group-hover:text-estate-gold">
            {language === 'en' ? title : titleVi}
          </h3>
          
          <div className="flex items-center text-estate-charcoal/70 mt-2">
            <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="text-sm truncate">{language === 'en' ? location : locationVi}</span>
          </div>
          
          <div className="flex items-center justify-between mt-4 text-sm text-estate-charcoal/70">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span>{bedrooms} {bedrooms > 1 ? 'Beds' : 'Bed'}</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              <span>{bathrooms} {bathrooms > 1 ? 'Baths' : 'Bath'}</span>
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-1" />
              <span>{area} m²</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
