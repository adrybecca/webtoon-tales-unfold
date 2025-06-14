
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Globe, Sparkles, Star } from "lucide-react";

export const Hero = () => {
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
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-24">
      {/* Enhanced background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-purple-800/40 to-pink-700/30" />
      
      {/* More dynamic floating orbs */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur-2xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-16 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-40 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur-lg opacity-20 animate-pulse delay-2000" />
      <div className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl opacity-25 animate-pulse delay-500" />
      
      <div className="relative z-10 text-center max-w-6xl mx-auto py-12">
        <div className="flex items-center justify-center mb-12 animate-fade-in">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 rounded-full blur-xl opacity-70 group-hover:opacity-90 transition-opacity animate-pulse scale-110" />
            <div className="relative bg-slate-800/60 backdrop-blur-lg rounded-full p-6 border border-slate-600/50 shadow-2xl">
              <Globe className="w-12 h-12 text-pink-400 animate-spin-slow" />
              <Star className="w-6 h-6 text-yellow-400 absolute -top-2 -right-2 animate-bounce" />
              <Sparkles className="w-5 h-5 text-violet-400 absolute -bottom-2 -left-2 animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400/20 to-violet-400/20 animate-pulse" />
            </div>
          </div>
          <div className="ml-8">
            <span className="text-pink-400 font-bold text-4xl tracking-wide bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              MYTHIC TALES
            </span>
            <div className="text-slate-300 text-lg mt-2 font-medium">Stories that enchant the world</div>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent mb-10 leading-tight animate-fade-in delay-300">
          Legendary Tales
          <br />
          <span className="text-5xl md:text-7xl bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            From Every Corner of the World
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-slate-200 mb-10 max-w-5xl mx-auto leading-relaxed font-light animate-fade-in delay-500">
          Discover enchanting stories and legends from all cultures of the world, beautifully illustrated in modern webtoon style for the next generation of readers
        </p>
        
        <p className="text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-700">
          More than 150 traditional tales, fascinating myths and authentic folklore from 50+ countries, carefully adapted for modern families seeking to connect with their cultural heritage and explore global diversity. Each story preserves the original essence while incorporating contemporary visual elements that captivate readers of all ages.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 animate-fade-in delay-1000">
          <Button 
            size="lg" 
            onClick={handleBrowseStoriesClick}
            className="bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white px-12 py-6 rounded-full text-2xl font-semibold shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          >
            <BookOpen className="w-7 h-7 mr-4" />
            Explore Stories
            <ArrowRight className="w-7 h-7 ml-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleUploadStoryClick}
            className="border-3 border-pink-400/60 text-pink-200 hover:bg-pink-400/20 px-12 py-6 rounded-full text-2xl font-semibold backdrop-blur-lg shadow-xl hover:shadow-pink-400/20 transition-all duration-300 transform hover:scale-105"
          >
            Upload Your Story
          </Button>
        </div>
        
        <div className="flex items-center justify-center space-x-16 text-slate-300 mb-24 animate-fade-in delay-1200">
          <div className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
            <div className="text-4xl font-bold text-white bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent group-hover:from-pink-300 group-hover:to-violet-300">150+</div>
            <div className="text-lg group-hover:text-slate-200 transition-colors">Available Stories</div>
          </div>
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-500 to-transparent" />
          <div className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
            <div className="text-4xl font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300">50+</div>
            <div className="text-lg group-hover:text-slate-200 transition-colors">Countries Represented</div>
          </div>
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-500 to-transparent" />
          <div className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
            <div className="text-4xl font-bold text-white bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent group-hover:from-emerald-300 group-hover:to-teal-300">10K+</div>
            <div className="text-lg group-hover:text-slate-200 transition-colors">Happy Families</div>
          </div>
        </div>
        
        <div className="text-center animate-fade-in delay-1500">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent mb-8">Connect with Your Cultural Heritage</h3>
          <p className="text-slate-300 max-w-3xl mx-auto text-xl leading-relaxed">
            From Japanese dragons to Nordic princesses, from African warriors to ancestral American spirits, each story is a window into the cultural richness of our diverse world.
          </p>
        </div>
      </div>
    </section>
  );
};
