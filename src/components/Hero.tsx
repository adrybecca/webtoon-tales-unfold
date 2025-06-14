
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Globe, Sparkles, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  const handleBrowseStoriesClick = () => {
    const featuredSection = document.getElementById('featured');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleUploadStoryClick = () => {
    alert("Redirecting to login page - authentication will be implemented soon!");
  };

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-4 overflow-hidden pt-16">
      {/* Enhanced background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-purple-800/40 to-pink-700/30" />
      
      {/* More dynamic floating orbs - smaller */}
      <div className="absolute top-12 left-6 w-16 h-16 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur-xl opacity-20 animate-pulse" />
      <div className="absolute bottom-12 right-8 w-14 h-14 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg opacity-30 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur-md opacity-15 animate-pulse delay-2000" />
      <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-lg opacity-20 animate-pulse delay-500" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto py-6">
        <div className="flex items-center justify-center mb-6 animate-fade-in">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity animate-pulse scale-105" />
            <div className="relative bg-slate-800/60 backdrop-blur-lg rounded-full p-3 border border-slate-600/50 shadow-xl">
              <Globe className="w-6 h-6 text-pink-400 animate-spin-slow" />
              <Star className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1 animate-bounce" />
              <Sparkles className="w-2 h-2 text-violet-400 absolute -bottom-1 -left-1 animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400/20 to-violet-400/20 animate-pulse" />
            </div>
          </div>
          <div className="ml-4">
            <span className="text-pink-400 font-bold text-xl tracking-wide bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {t('mythic_tales').toUpperCase()}
            </span>
            <div className="text-slate-300 text-xs mt-1 font-medium">{t('stories_that_enchant')}</div>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent mb-4 leading-tight animate-fade-in delay-300">
          {t('legendary_tales')}
          <br />
          <span className="text-2xl md:text-3xl bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            {t('from_every_corner')}
          </span>
        </h1>
        
        <p className="text-base md:text-lg text-slate-200 mb-4 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in delay-500">
          {t('discover_enchanting_stories')}
        </p>
        
        <p className="text-sm text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-700">
          {t('more_than_150_tales')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in delay-1000">
          <Button 
            size="lg" 
            onClick={handleBrowseStoriesClick}
            className="bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white px-6 py-3 rounded-full text-base font-semibold shadow-xl hover:shadow-pink-500/30 transition-all duration-300 transform hover:scale-105"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            {t('explore_stories')}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          
          <Button 
            size="lg"
            onClick={handleUploadStoryClick}
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-3 rounded-full text-base font-semibold shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105"
          >
            {t('upload_your_story')}
          </Button>
        </div>
        
        <div className="flex items-center justify-center space-x-8 text-slate-300 mb-10 animate-fade-in delay-1200">
          <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
            <div className="text-2xl font-bold text-white bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent group-hover:from-pink-300 group-hover:to-violet-300">150+</div>
            <div className="text-xs group-hover:text-slate-200 transition-colors">{t('available_stories')}</div>
          </div>
          <div className="w-px h-6 bg-gradient-to-b from-transparent via-slate-500 to-transparent" />
          <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
            <div className="text-2xl font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300">50+</div>
            <div className="text-xs group-hover:text-slate-200 transition-colors">{t('countries_represented')}</div>
          </div>
          <div className="w-px h-6 bg-gradient-to-b from-transparent via-slate-500 to-transparent" />
          <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
            <div className="text-2xl font-bold text-white bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent group-hover:from-emerald-300 group-hover:to-teal-300">10K+</div>
            <div className="text-xs group-hover:text-slate-200 transition-colors">{t('happy_families')}</div>
          </div>
        </div>
        
        <div className="text-center animate-fade-in delay-1500">
          <h3 className="text-xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent mb-3">{t('connect_cultural_heritage')}</h3>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            {t('cultural_richness_description')}
          </p>
        </div>
      </div>
    </section>
  );
};
