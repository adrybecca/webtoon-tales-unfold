
import { BookOpen, Mail, Linkedin, Instagram, Facebook, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg blur-sm opacity-40 group-hover:opacity-60 transition-opacity" />
                <div className="relative bg-slate-800 rounded-lg p-2 border border-slate-700">
                  <BookOpen className="w-8 h-8 text-pink-400" />
                  <Sparkles className="w-3 h-3 text-violet-400 absolute -top-1 -right-1 animate-pulse" />
                </div>
              </div>
              <div className="ml-3">
                <span className="text-xl font-bold bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                  {t('mythic_tales')}
                </span>
                <div className="text-xs text-slate-400 -mt-1">{t('stories_that_enchant')}</div>
              </div>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              {t('bringing_traditional_stories')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">{t('for_readers')}</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-pink-400 transition-colors">{t('browse_stories')}</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">{t('gift_cards')}</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">{t('reading_lists')}</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">{t('family_accounts')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">{t('for_creators')}</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-pink-400 transition-colors">{t('start_creating')}</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">{t('art_guidelines')}</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">{t('creator_support')}</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">{t('revenue_info')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
          <p>&copy; 2024 {t('mythic_tales')}. {t('all_rights_reserved')}</p>
        </div>
      </div>
    </footer>
  );
};
