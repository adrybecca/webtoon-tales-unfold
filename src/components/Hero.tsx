
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
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 overflow-hidden pt-20">
      {/* Enhanced background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-purple-800/40 to-pink-700/30" />
      
      {/* More dynamic floating orbs - smaller */}
      <div className="absolute top-16 left-8 w-24 h-24 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur-xl opacity-20 animate-pulse" />
      <div className="absolute bottom-16 right-12 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg opacity-30 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur-md opacity-15 animate-pulse delay-2000" />
      <div className="absolute bottom-1/3 right-1/3 w-22 h-22 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-lg opacity-20 animate-pulse delay-500" />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto py-8">
        <div className="flex items-center justify-center mb-8 animate-fade-in">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity animate-pulse scale-105" />
            <div className="relative bg-slate-800/60 backdrop-blur-lg rounded-full p-4 border border-slate-600/50 shadow-xl">
              <Globe className="w-8 h-8 text-pink-400 animate-spin-slow" />
              <Star className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 animate-bounce" />
              <Sparkles className="w-3 h-3 text-violet-400 absolute -bottom-1 -left-1 animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400/20 to-violet-400/20 animate-pulse" />
            </div>
          </div>
          <div className="ml-6">
            <span className="text-pink-400 font-bold text-2xl tracking-wide bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              MYTHIC TALES
            </span>
            <div className="text-slate-300 text-sm mt-1 font-medium">Stories that enchant the world</div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent mb-6 leading-tight animate-fade-in delay-300">
          Legendary Tales
          <br />
          <span className="text-3xl md:text-5xl bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            From Every Corner of the World
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-200 mb-6 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in delay-500">
          Discover enchanting stories and legends from all cultures of the world, beautifully illustrated in modern webtoon style for the next generation of readers
        </p>
        
        <p className="text-base text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-700">
          More than 150 traditional tales, fascinating myths and authentic folklore from 50+ countries, carefully adapted for modern families seeking to connect with their cultural heritage and explore global diversity.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in delay-1000">
          <Button 
            size="lg" 
            onClick={handleBrowseStoriesClick}
            className="bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-pink-500/30 transition-all duration-300 transform hover:scale-105"
          >
            <BookOpen className="w-5 h-5 mr-3" />
            Explore Stories
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleUploadStoryClick}
            className="border-2 border-pink-400/60 text-pink-200 hover:bg-pink-400/20 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-lg shadow-lg hover:shadow-pink-400/20 transition-all duration-300 transform hover:scale-105"
          >
            Upload Your Story
          </Button>
        </div>
        
        <div className="flex items-center justify-center space-x-12 text-slate-300 mb-16 animate-fade-in delay-1200">
          <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-white bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent group-hover:from-pink-300 group-hover:to-violet-300">150+</div>
            <div className="text-sm group-hover:text-slate-200 transition-colors">Available Stories</div>
          </div>
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-slate-500 to-transparent" />
          <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300">50+</div>
            <div className="text-sm group-hover:text-slate-200 transition-colors">Countries Represented</div>
          </div>
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-slate-500 to-transparent" />
          <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-white bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent group-hover:from-emerald-300 group-hover:to-teal-300">10K+</div>
            <div className="text-sm group-hover:text-slate-200 transition-colors">Happy Families</div>
          </div>
        </div>
        
        <div className="text-center animate-fade-in delay-1500">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent mb-4">Connect with Your Cultural Heritage</h3>
          <p className="text-slate-300 max-w-2xl mx-auto text-base leading-relaxed">
            From Japanese dragons to Nordic princesses, from African warriors to ancestral American spirits, each story is a window into the cultural richness of our diverse world.
          </p>
        </div>
      </div>
    </section>
  );
};
