
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'vi' : 'en');
  };

  return (
    <div 
      className={cn("language-switcher", className)}
      onClick={toggleLanguage}
    >
      <span className={`font-medium ${language === 'en' ? 'text-estate-gold' : 'text-foreground/80'}`}>EN</span>
      <span className="text-foreground/50">/</span>
      <span className={`font-medium ${language === 'vi' ? 'text-estate-gold' : 'text-foreground/80'}`}>VI</span>
    </div>
  );
};

export default LanguageSwitcher;
