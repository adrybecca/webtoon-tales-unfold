
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Globe, Sparkles, Star } from "lucide-react";

export const Hero = () => {
  const handleBrowseStoriesClick = () => {
    const featuredSection = document.getElementById('featured');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-16">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-purple-800/30 to-pink-700/20" />
      
      {/* Floating orbs for visual interest */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur-xl opacity-20 animate-pulse" />
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg opacity-30 animate-pulse" />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity animate-pulse" />
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-full p-4 border border-slate-700">
              <Globe className="w-8 h-8 text-pink-400" />
              <Star className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 animate-bounce" />
              <Sparkles className="w-3 h-3 text-violet-400 absolute -bottom-1 -left-1 animate-pulse" />
            </div>
          </div>
          <div className="ml-4">
            <span className="text-pink-400 font-bold text-2xl tracking-wide bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
              MYTHIC TALES
            </span>
            <div className="text-slate-400 text-sm mt-1">Historias que encantan al mundo</div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent mb-6 leading-tight">
          Cuentos Legendarios
          <br />
          <span className="text-4xl md:text-6xl bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            De Cada Rincón del Mundo
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-6 max-w-4xl mx-auto leading-relaxed">
          Descubre historias encantadoras y leyendas de todas las culturas del mundo, bellamente ilustradas en estilo webtoon moderno para la próxima generación de lectores
        </p>
        
        <p className="text-lg text-slate-400 mb-8 max-w-3xl mx-auto">
          Más de 150 cuentos tradicionales, mitos fascinantes y folklore auténtico de 50+ países, cuidadosamente adaptados para familias modernas que buscan conectar con su herencia cultural y explorar la diversidad mundial. Cada historia preserva la esencia original mientras incorpora elementos visuales contemporáneos que cautivan a lectores de todas las edades.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={handleBrowseStoriesClick}
            className="bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Explorar Historias
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => {
              const uploadSection = document.getElementById('upload');
              if (uploadSection) {
                uploadSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="border-2 border-pink-400/50 text-pink-200 hover:bg-pink-400/10 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm"
          >
            Subir Tu Historia
          </Button>
        </div>
        
        <div className="mt-12 flex items-center justify-center space-x-8 text-slate-400">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">150+</div>
            <div className="text-sm">Historias Disponibles</div>
          </div>
          <div className="w-px h-8 bg-slate-600" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-sm">Países Representados</div>
          </div>
          <div className="w-px h-8 bg-slate-600" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">10K+</div>
            <div className="text-sm">Familias Felices</div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Conecta con tu Herencia Cultural</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Desde dragones japoneses hasta princesas nórdicas, desde guerreros africanos hasta espíritus ancestrales americanos, cada historia es una ventana hacia la riqueza cultural de nuestro mundo diverso.
          </p>
        </div>
      </div>
    </section>
  );
};
