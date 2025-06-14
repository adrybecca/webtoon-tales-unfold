
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedStories } from "@/components/FeaturedStories";
import { UploadSection } from "@/components/UploadSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, PenTool, Users, Globe, Sparkles, Heart, Star, Award, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  const handleCultureClick = (cultureName: string) => {
    alert(`Exploring ${cultureName} stories - feature coming soon!`);
  };

  const handleStartCreating = () => {
    alert("Redirecting to creator portal - authentication will be implemented soon!");
  };

  const handleCreateAccount = () => {
    alert("Redirecting to account creation - authentication will be implemented soon!");
  };

  const handleStartReading = () => {
    const featuredSection = document.getElementById('featured');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="featured">
        <FeaturedStories />
      </section>
      
      {/* Enhanced Browse by Culture Section - Reduced */}
      <section id="cultures" className="py-16 px-4 bg-gradient-to-r from-slate-800/30 to-purple-800/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent mb-6">
              {t('explore_tales_by_culture')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-slate-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              {t('culture_description')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'asia', description: t('asia_description'), icon: '🐉', gradient: 'from-red-500 to-orange-500' },
              { name: 'europe', description: t('europe_description'), icon: '🏰', gradient: 'from-blue-500 to-purple-500' },
              { name: 'africa', description: t('africa_description'), icon: '🦁', gradient: 'from-yellow-500 to-orange-600' },
              { name: 'americas', description: t('americas_description'), icon: '🦅', gradient: 'from-emerald-500 to-teal-600' },
              { name: 'oceania', description: t('oceania_description'), icon: '🌊', gradient: 'from-cyan-500 to-blue-600' },
              { name: 'middle_east', description: t('middle_east_description'), icon: '🧞‍♂️', gradient: 'from-purple-500 to-pink-500' }
            ].map((culture) => (
              <div 
                key={culture.name} 
                className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/60 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl border border-slate-700/50"
                onClick={() => handleCultureClick(t(culture.name))}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${culture.gradient} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-500 animate-bounce">
                    {culture.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-pink-300 transition-colors">
                    {t(culture.name)}
                  </h3>
                  <p className="text-slate-400 text-xs group-hover:text-slate-300 transition-colors">{culture.description}</p>
                  <div className="mt-4 flex items-center justify-center text-pink-400 text-xs opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <span className="font-semibold">{t('explore_now')}</span>
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section - Reduced */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900/30 to-pink-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent mb-6">
              {t('what_families_say')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto mb-6 rounded-full"></div>
            <div className="flex justify-center space-x-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.2}s`}} />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: t('testimonial_1'),
                name: "Maria González",
                role: "Mother of 3, Madrid",
                initial: "M",
                gradient: "from-pink-500 to-violet-500"
              },
              {
                text: t('testimonial_2'),
                name: "Ana Rodriguez",
                role: "Elementary Teacher, Barcelona",
                initial: "A",
                gradient: "from-cyan-500 to-blue-500"
              },
              {
                text: t('testimonial_3'),
                name: "José Martinez",
                role: "Grandfather, Seville",
                initial: "J",
                gradient: "from-emerald-500 to-teal-500"
              }
            ].map((testimonial, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-slate-700/50 hover:shadow-xl">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current inline-block" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-200 mb-6 italic text-base leading-relaxed group-hover:text-white transition-colors">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center mr-3 shadow-lg group-hover:scale-110 transition-transform`}>
                    <span className="text-white font-bold text-lg">{testimonial.initial}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base group-hover:text-pink-300 transition-colors">{testimonial.name}</h4>
                    <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Readers Section - Reduced */}
      <section id="readers" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-8">
              {t('for_readers_families')}
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
              {t('readers_description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg"
                onClick={handleStartReading}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                {t('start_reading_now')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                onClick={handleCreateAccount}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                {t('create_family_account')}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-emerald-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">{t('curated_library')}</h3>
              </div>
              <p className="text-slate-400 mb-4">
                {t('library_description')}
              </p>
              <ul className="text-slate-500 text-sm space-y-2 mb-6">
                <li>• Age classification (3-5, 6-8, 9-12 years)</li>
                <li>• Filters by culture and geographic region</li>
                <li>• Thematic categories (adventure, friendship, courage)</li>
                <li>• Monthly updates with new stories</li>
              </ul>
              <Button 
                size="sm"
                onClick={handleStartReading}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white group-hover:scale-105 transition-transform shadow-lg hover:shadow-emerald-500/25"
              >
                {t('browse_library')}
              </Button>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <Sparkles className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">{t('educational_tools')}</h3>
              </div>
              <p className="text-slate-400 mb-4">
                {t('tools_description')}
              </p>
              <ul className="text-slate-500 text-sm space-y-2 mb-6">
                <li>• Discussion guides for parents and children</li>
                <li>• Interactive maps of cultural origin</li>
                <li>• Glossaries of cultural terms</li>
                <li>• Related creative activities</li>
              </ul>
              <Button 
                size="sm"
                onClick={() => alert("Educational resources coming soon!")}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white group-hover:scale-105 transition-transform shadow-lg hover:shadow-purple-500/25"
              >
                {t('explore_tools')}
              </Button>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-pink-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">{t('personalized_experience')}</h3>
              </div>
              <p className="text-slate-400 mb-4">
                {t('experience_description')}
              </p>
              <ul className="text-slate-500 text-sm space-y-2 mb-6">
                <li>• Individual profiles for each member</li>
                <li>• Recommendations based on interests</li>
                <li>• Night reading mode</li>
                <li>• Synchronization across devices</li>
              </ul>
              <Button 
                size="sm"
                onClick={handleCreateAccount}
                className="w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white group-hover:scale-105 transition-transform shadow-lg hover:shadow-pink-500/25"
              >
                {t('get_started')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* For Creators Section - Reduced */}
      <section id="creators" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-8">
              {t('for_creators_artists')}
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
              {t('creators_description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg"
                onClick={handleStartCreating}
                className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold"
              >
                <PenTool className="w-5 h-5 mr-2" />
                {t('start_creating')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                onClick={handleCreateAccount}
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                {t('join_creator_community')}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <PenTool className="w-8 h-8 text-violet-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">{t('professional_tools')}</h3>
              </div>
              <p className="text-slate-400 mb-4">
                {t('tools_suite_description')}
              </p>
              <ul className="text-slate-500 text-sm space-y-2 mb-6">
                <li>• Integrated webtoon editor</li>
                <li>• Library of authentic cultural elements</li>
                <li>• Responsive templates for mobile</li>
                <li>• Advanced coloring tools</li>
              </ul>
              <Button 
                size="sm"
                onClick={() => alert("Creator tools coming soon!")}
                className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white group-hover:scale-105 transition-transform shadow-lg hover:shadow-violet-500/25"
              >
                {t('try_tools')}
              </Button>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">{t('support_mentoring')}</h3>
              </div>
              <p className="text-slate-400 mb-4">
                {t('mentoring_description')}
              </p>
              <ul className="text-slate-500 text-sm space-y-2 mb-6">
                <li>• Individualized mentoring sessions</li>
                <li>• Intercultural storytelling workshops</li>
                <li>• Review by cultural experts</li>
                <li>• Active creator community</li>
              </ul>
              <Button 
                size="sm"
                onClick={() => alert("Mentorship program coming soon!")}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white group-hover:scale-105 transition-transform shadow-lg hover:shadow-cyan-500/25"
              >
                {t('find_mentor')}
              </Button>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <Sparkles className="w-8 h-8 text-emerald-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">{t('revenue_opportunities')}</h3>
              </div>
              <p className="text-slate-400 mb-4">
                {t('revenue_description')}
              </p>
              <ul className="text-slate-500 text-sm space-y-2 mb-6">
                <li>• 70% revenue for the creator</li>
                <li>• Guaranteed monthly payments</li>
                <li>• Exclusive licensing options</li>
                <li>• Popularity bonuses</li>
              </ul>
              <Button 
                size="sm"
                onClick={handleStartCreating}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white group-hover:scale-105 transition-transform shadow-lg hover:shadow-emerald-500/25"
              >
                {t('start_earning')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Mythic Tales Section - Reduced */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900/30 to-pink-900/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent mb-6">
              {t('why_choose_mythic_tales')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('why_choose_description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: t('cultural_authenticity'),
                description: t('authenticity_description'),
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                icon: Award,
                title: t('premium_quality_art'),
                description: t('art_description'),
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Globe,
                title: t('intercultural_education'),
                description: t('education_description'),
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Sparkles,
                title: t('innovative_technology'),
                description: t('technology_description'),
                gradient: "from-yellow-500 to-orange-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-slate-700/50">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="upload">
        <UploadSection />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default Index;
