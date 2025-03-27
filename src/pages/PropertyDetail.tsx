import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PropertyCard from '@/components/properties/PropertyCard';
import { properties } from '@/data/properties';
import { MapPin, Bed, Bath, Square, Calendar, Home, Tag, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const [property, setProperty] = useState(properties[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [similarProperties, setSimilarProperties] = useState<typeof properties>([]);
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});
  
  // Find the property and similar properties
  useEffect(() => {
    const foundProperty = properties.find(p => p.id === id);
    if (foundProperty) {
      setProperty(foundProperty);
      
      // Find similar properties (same type or location, excluding current)
      const similar = properties.filter(p => 
        p.id !== id && (p.type === foundProperty.type || p.location === foundProperty.location)
      ).slice(0, 3);
      
      setSimilarProperties(similar);
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [id]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({...prev, [index]: true}));
  };

  // Format price to USD
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(property.price);

  // Fallback image
  const fallbackImage = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Property Gallery */}
        <section className="container mx-auto container-padding mb-8">
          <div className="mb-6">
            <Link to="/properties" className="inline-flex items-center text-estate-charcoal/70 hover:text-estate-gold">
              <ChevronLeft className="w-4 h-4 mr-1" />
              <span>{t('properties.title')}</span>
            </Link>
          </div>
          
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden">
            {imageErrors[currentImageIndex] ? (
              <div className="w-full h-full bg-estate-light flex items-center justify-center">
                <ImageOff className="w-24 h-24 text-estate-charcoal/40" />
              </div>
            ) : (
              <img
                src={property.images[currentImageIndex] || fallbackImage}
                alt={language === 'en' ? property.title : property.titleVi}
                className="w-full h-full object-cover"
                onError={() => handleImageError(currentImageIndex)}
              />
            )}
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevImage} 
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-estate-charcoal" />
            </button>
            
            <button 
              onClick={nextImage} 
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-estate-charcoal" />
            </button>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 px-3 py-1 bg-estate-charcoal/70 text-white rounded-sm text-sm">
              {currentImageIndex + 1} / {property.images.length}
            </div>
          </div>
          
          {/* Thumbnail Navigation */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {property.images.map((image, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                  index === currentImageIndex 
                    ? 'border-estate-gold' 
                    : 'border-transparent hover:border-estate-gold/50'
                }`}
              >
                {imageErrors[index] ? (
                  <div className="w-full h-full bg-estate-light flex items-center justify-center">
                    <ImageOff className="w-5 h-5 text-estate-charcoal/40" />
                  </div>
                ) : (
                  <img 
                    src={image} 
                    alt="" 
                    className="w-full h-full object-cover" 
                    onError={() => handleImageError(index)}
                  />
                )}
              </button>
            ))}
          </div>
        </section>
        
        {/* Property Details */}
        <section className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Property Info */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-3xl font-serif font-bold text-estate-charcoal">
                    {language === 'en' ? property.title : property.titleVi}
                  </h1>
                  <div className="flex items-center text-estate-charcoal/70 mt-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{language === 'en' ? property.location : property.locationVi}</span>
                  </div>
                </div>
                <div>
                  <span className="inline-block px-4 py-2 bg-estate-gold text-white text-lg font-medium rounded-sm">
                    {formattedPrice}
                  </span>
                </div>
              </div>
              
              {/* Property Features */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 p-4 bg-estate-light rounded-md">
                <div className="flex flex-col items-center p-3">
                  <Bed className="w-6 h-6 text-estate-gold mb-2" />
                  <span className="text-sm text-estate-charcoal/70">{t('propertyDetail.bedrooms')}</span>
                  <span className="text-lg font-medium text-estate-charcoal">{property.bedrooms}</span>
                </div>
                <div className="flex flex-col items-center p-3">
                  <Bath className="w-6 h-6 text-estate-gold mb-2" />
                  <span className="text-sm text-estate-charcoal/70">{t('propertyDetail.bathrooms')}</span>
                  <span className="text-lg font-medium text-estate-charcoal">{property.bathrooms}</span>
                </div>
                <div className="flex flex-col items-center p-3">
                  <Square className="w-6 h-6 text-estate-gold mb-2" />
                  <span className="text-sm text-estate-charcoal/70">{t('propertyDetail.propertySize')}</span>
                  <span className="text-lg font-medium text-estate-charcoal">{property.area} m²</span>
                </div>
                <div className="flex flex-col items-center p-3">
                  <Calendar className="w-6 h-6 text-estate-gold mb-2" />
                  <span className="text-sm text-estate-charcoal/70">{t('propertyDetail.yearBuilt')}</span>
                  <span className="text-lg font-medium text-estate-charcoal">{property.yearBuilt}</span>
                </div>
              </div>
              
              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-medium text-estate-charcoal mb-4">
                  {t('propertyDetail.overview')}
                </h2>
                <p className="text-estate-charcoal/80 leading-relaxed">
                  {language === 'en' ? property.description : property.descriptionVi}
                </p>
              </div>
              
              {/* Features List */}
              <div className="mb-8">
                <h2 className="text-xl font-medium text-estate-charcoal mb-4">
                  {t('propertyDetail.features')}
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                  {(language === 'en' ? property.features : property.featuresVi).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-estate-gold rounded-full mr-2"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="sticky top-28 bg-white border border-estate-charcoal/10 rounded-md p-6 shadow-sm">
                <h3 className="text-lg font-medium text-estate-charcoal mb-4">
                  {t('propertyDetail.contactAgent')}
                </h3>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm text-estate-charcoal/70 mb-1">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-estate-charcoal/20 rounded-sm focus:outline-none focus:ring-1 focus:ring-estate-gold/50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-estate-charcoal/70 mb-1">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-estate-charcoal/20 rounded-sm focus:outline-none focus:ring-1 focus:ring-estate-gold/50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-estate-charcoal/70 mb-1">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-estate-charcoal/20 rounded-sm focus:outline-none focus:ring-1 focus:ring-estate-gold/50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-estate-charcoal/70 mb-1">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-estate-charcoal/20 rounded-sm focus:outline-none focus:ring-1 focus:ring-estate-gold/50"
                      defaultValue={`I'm interested in ${language === 'en' ? property.title : property.titleVi}`}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full luxury-button"
                  >
                    {t('contact.form.send')}
                  </button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-estate-charcoal/10">
                  <div className="flex items-center mb-3">
                    <Home className="w-5 h-5 text-estate-gold mr-2" />
                    <span className="text-sm text-estate-charcoal/70">{t('propertyDetail.propertyType')}</span>
                    <span className="ml-auto font-medium">
                      {language === 'en' ? property.type : property.typeVi}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Tag className="w-5 h-5 text-estate-gold mr-2" />
                    <span className="text-sm text-estate-charcoal/70">{t('propertyDetail.status')}</span>
                    <span className="ml-auto font-medium">
                      {language === 'en' ? property.status : property.statusVi}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Similar Properties */}
        {similarProperties.length > 0 && (
          <section className="container mx-auto container-padding py-12">
            <h2 className="text-2xl font-serif font-bold text-estate-charcoal mb-6">
              {t('propertyDetail.similarProperties')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetail;
