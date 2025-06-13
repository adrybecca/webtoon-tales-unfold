import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { LogoWithBackground } from "./LogoWithBackground";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-purple-800/30 to-pink-700/20" />
      
      {/* Floating orbs for visual interest */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur-xl opacity-20 animate-pulse" />
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg opacity-30 animate-pulse" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <LogoWithBackground className="h-24 md:h-32 w-auto" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent mb-6 leading-tight">
          Legendary Stories
          <br />
          <span className="text-4xl md:text-6xl bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            From Every Corner
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover enchanting tales and legends from around the world, beautifully illustrated in modern webtoon style for the next generation
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Browse Stories
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-pink-400/50 text-pink-200 hover:bg-pink-400/10 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm"
          >
            Upload Your Tale
          </Button>
        </div>
        
        <div className="mt-12 flex items-center justify-center space-x-8 text-slate-400">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">150+</div>
            <div className="text-sm">Stories Available</div>
          </div>
          <div className="w-px h-8 bg-slate-600" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-sm">Countries Featured</div>
          </div>
          <div className="w-px h-8 bg-slate-600" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">10K+</div>
            <div className="text-sm">Happy Families</div>
          </div>
        </div>
      </div>
    </section>
  );
};
