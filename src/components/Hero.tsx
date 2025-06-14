
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
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-purple-800/30 to-pink-700/20" />
      
      {/* Floating orbs for visual interest */}
      <div className="absolute top-32 left-10 w-32 h-32 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur-xl opacity-20 animate-pulse" />
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg opacity-30 animate-pulse" />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto py-12">
        <div className="flex items-center justify-center mb-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity animate-pulse" />
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-full p-4 border border-slate-700">
              <Globe className="w-10 h-10 text-pink-400" />
              <Star className="w-5 h-5 text-yellow-400 absolute -top-1 -right-1 animate-bounce" />
              <Sparkles className="w-4 h-4 text-violet-400 absolute -bottom-1 -left-1 animate-pulse" />
            </div>
          </div>
          <div className="ml-6">
            <span className="text-pink-400 font-bold text-3xl tracking-wide bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
              MYTHIC TALES
            </span>
            <div className="text-slate-400 text-base mt-1">Stories that enchant the world</div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent mb-8 leading-tight">
          Legendary Tales
          <br />
          <span className="text-4xl md:text-6xl bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            From Every Corner of the World
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Discover enchanting stories and legends from all cultures of the world, beautifully illustrated in modern webtoon style for the next generation of readers
        </p>
        
        <p className="text-lg text-slate-400 mb-10 max-w-3xl mx-auto">
          More than 150 traditional tales, fascinating myths and authentic folklore from 50+ countries, carefully adapted for modern families seeking to connect with their cultural heritage and explore global diversity. Each story preserves the original essence while incorporating contemporary visual elements that captivate readers of all ages.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            onClick={handleBrowseStoriesClick}
            className="bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white px-10 py-5 rounded-full text-xl font-semibold shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <BookOpen className="w-6 h-6 mr-3" />
            Explore Stories
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleUploadStoryClick}
            className="border-2 border-pink-400/50 text-pink-200 hover:bg-pink-400/10 px-10 py-5 rounded-full text-xl font-semibold backdrop-blur-sm"
          >
            Upload Your Story
          </Button>
        </div>
        
        <div className="flex items-center justify-center space-x-12 text-slate-400 mb-20">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">150+</div>
            <div className="text-sm">Available Stories</div>
          </div>
          <div className="w-px h-10 bg-slate-600" />
          <div className="text-center">
            <div className="text-3xl font-bold text-white">50+</div>
            <div className="text-sm">Countries Represented</div>
          </div>
          <div className="w-px h-10 bg-slate-600" />
          <div className="text-center">
            <div className="text-3xl font-bold text-white">10K+</div>
            <div className="text-sm">Happy Families</div>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Connect with Your Cultural Heritage</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            From Japanese dragons to Nordic princesses, from African warriors to ancestral American spirits, each story is a window into the cultural richness of our diverse world.
          </p>
        </div>
      </div>
    </section>
  );
};
