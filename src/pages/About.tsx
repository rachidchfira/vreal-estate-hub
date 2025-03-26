
import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const About: React.FC = () => {
  const { t } = useLanguage();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: 'John Smith',
      title: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Emily Wong',
      title: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'David Nguyen',
      title: 'Senior Real Estate Agent',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Sarah Johnson',
      title: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-estate-light py-20 md:py-32">
          <div className="container mx-auto container-padding text-center">
            <span className="inline-block text-estate-gold text-sm uppercase tracking-wider font-medium mb-2">
              {t('about.subtitle')}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-estate-charcoal mb-6">
              {t('about.title')}
            </h1>
          </div>
        </section>
        
        {/* Vision & Mission */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto container-padding">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div className="bg-white p-8 rounded-md shadow-sm border border-estate-charcoal/5 hover-scale">
                <div className="w-16 h-16 bg-estate-gold/10 flex items-center justify-center rounded-full mb-6">
                  <svg className="w-8 h-8 text-estate-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l-9-5 9-5 9 5-9 5z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7.5"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-medium text-estate-charcoal mb-4">{t('about.mission.title')}</h2>
                <p className="text-estate-charcoal/80 leading-relaxed">{t('about.mission.description')}</p>
              </div>
              
              <div className="bg-white p-8 rounded-md shadow-sm border border-estate-charcoal/5 hover-scale">
                <div className="w-16 h-16 bg-estate-gold/10 flex items-center justify-center rounded-full mb-6">
                  <svg className="w-8 h-8 text-estate-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-medium text-estate-charcoal mb-4">{t('about.vision.title')}</h2>
                <p className="text-estate-charcoal/80 leading-relaxed">{t('about.vision.description')}</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Company Values */}
        <section className="py-16 bg-estate-light">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-estate-charcoal mb-4">
                {t('about.values.title')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-md shadow-sm text-center hover-scale">
                <div className="w-14 h-14 mx-auto bg-estate-gold/10 flex items-center justify-center rounded-full mb-4">
                  <svg className="w-6 h-6 text-estate-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-estate-charcoal mb-2">{t('about.values.integrity')}</h3>
              </div>
              
              <div className="bg-white p-6 rounded-md shadow-sm text-center hover-scale">
                <div className="w-14 h-14 mx-auto bg-estate-gold/10 flex items-center justify-center rounded-full mb-4">
                  <svg className="w-6 h-6 text-estate-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-estate-charcoal mb-2">{t('about.values.excellence')}</h3>
              </div>
              
              <div className="bg-white p-6 rounded-md shadow-sm text-center hover-scale">
                <div className="w-14 h-14 mx-auto bg-estate-gold/10 flex items-center justify-center rounded-full mb-4">
                  <svg className="w-6 h-6 text-estate-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-estate-charcoal mb-2">{t('about.values.innovation')}</h3>
              </div>
              
              <div className="bg-white p-6 rounded-md shadow-sm text-center hover-scale">
                <div className="w-14 h-14 mx-auto bg-estate-gold/10 flex items-center justify-center rounded-full mb-4">
                  <svg className="w-6 h-6 text-estate-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-estate-charcoal mb-2">{t('about.values.clientFocus')}</h3>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-estate-charcoal mb-2">
                {t('about.team.title')}
              </h2>
              <p className="text-estate-charcoal/70 text-lg">
                {t('about.team.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-md mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </div>
                  <h3 className="text-lg font-medium text-estate-charcoal">{member.name}</h3>
                  <p className="text-estate-charcoal/70">{member.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
