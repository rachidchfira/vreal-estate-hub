
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Property } from '@/data/properties';
import { MapPin, Bed, Bath, Square, ImageOff } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, featured = false }) => {
  const { language, t } = useLanguage();
  const { id, title, titleVi, price, location, locationVi, bedrooms, bathrooms, area, images } = property;
  const [imageError, setImageError] = useState(false);

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);

  // Fallback image
  const fallbackImage = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";

  return (
    <Link 
      to={`/property/${id}`} 
      className={`group luxury-card block ${featured ? 'lg:col-span-2 xl:col-span-1' : ''}`}
    >
      <div className="relative overflow-hidden">
        {/* Property Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {imageError ? (
            <div className="w-full h-full bg-estate-light flex items-center justify-center">
              <ImageOff className="w-12 h-12 text-estate-charcoal/40" />
            </div>
          ) : (
            <img 
              src={images[0] || fallbackImage} 
              alt={language === 'en' ? title : titleVi}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={() => setImageError(true)}
            />
          )}
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
