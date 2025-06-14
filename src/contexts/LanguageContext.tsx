
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es' | 'fr' | 'de' | 'it' | 'el';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'mythic_tales': 'Mythic Tales',
    'stories_that_enchant': 'Stories that enchant',
    'home': 'Home',
    'featured_stories': 'Featured Stories',
    'browse_by_culture': 'Browse by Culture',
    'upload_your_tale': 'Upload Your Tale',
    'for_readers': 'For Readers',
    'for_creators': 'For Creators',
    'contact': 'Contact',
    'login': 'Login',
    'site_menu': 'Site Menu'
  },
  es: {
    'mythic_tales': 'Cuentos Míticos',
    'stories_that_enchant': 'Historias que encantan',
    'home': 'Inicio',
    'featured_stories': 'Historias Destacadas',
    'browse_by_culture': 'Explorar por Cultura',
    'upload_your_tale': 'Sube tu Historia',
    'for_readers': 'Para Lectores',
    'for_creators': 'Para Creadores',
    'contact': 'Contacto',
    'login': 'Iniciar Sesión',
    'site_menu': 'Menú del Sitio'
  },
  fr: {
    'mythic_tales': 'Contes Mythiques',
    'stories_that_enchant': 'Histoires qui enchantent',
    'home': 'Accueil',
    'featured_stories': 'Histoires en Vedette',
    'browse_by_culture': 'Parcourir par Culture',
    'upload_your_tale': 'Télécharger votre Histoire',
    'for_readers': 'Pour les Lecteurs',
    'for_creators': 'Pour les Créateurs',
    'contact': 'Contact',
    'login': 'Se Connecter',
    'site_menu': 'Menu du Site'
  },
  de: {
    'mythic_tales': 'Mythische Geschichten',
    'stories_that_enchant': 'Geschichten die verzaubern',
    'home': 'Startseite',
    'featured_stories': 'Empfohlene Geschichten',
    'browse_by_culture': 'Nach Kultur durchsuchen',
    'upload_your_tale': 'Ihre Geschichte hochladen',
    'for_readers': 'Für Leser',
    'for_creators': 'Für Ersteller',
    'contact': 'Kontakt',
    'login': 'Anmelden',
    'site_menu': 'Seitenmenü'
  },
  it: {
    'mythic_tales': 'Racconti Mitici',
    'stories_that_enchant': 'Storie che incantano',
    'home': 'Casa',
    'featured_stories': 'Storie in Evidenza',
    'browse_by_culture': 'Sfoglia per Cultura',
    'upload_your_tale': 'Carica la tua Storia',
    'for_readers': 'Per i Lettori',
    'for_creators': 'Per i Creatori',
    'contact': 'Contatto',
    'login': 'Accedi',
    'site_menu': 'Menu del Sito'
  },
  el: {
    'mythic_tales': 'Μυθικές Ιστορίες',
    'stories_that_enchant': 'Ιστορίες που μαγεύουν',
    'home': 'Αρχική',
    'featured_stories': 'Προτεινόμενες Ιστορίες',
    'browse_by_culture': 'Περιήγηση ανά Πολιτισμό',
    'upload_your_tale': 'Ανεβάστε την Ιστορία σας',
    'for_readers': 'Για Αναγνώστες',
    'for_creators': 'Για Δημιουργούς',
    'contact': 'Επικοινωνία',
    'login': 'Σύνδεση',
    'site_menu': 'Μενού Ιστότοπου'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
