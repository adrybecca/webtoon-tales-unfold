
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useForm } from "react-hook-form";
import { Mail, Facebook, Instagram, MessageSquare, Users, BookOpen, Calendar, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

interface SubscribeFormData {
  email: string;
  name: string;
}

const Subscribe = () => {
  const { t } = useLanguage();
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const form = useForm<SubscribeFormData>();

  const onSubmit = (data: SubscribeFormData) => {
    console.log("Subscription data:", data);
    // Here you would integrate with your email marketing service
    setIsSubscribed(true);
  };

  if (isSubscribed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        <div className="pt-20 px-4 min-h-screen flex items-center justify-center">
          <div className="max-w-md mx-auto text-center bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white mb-4">¡Suscripción Exitosa!</h1>
            <p className="text-slate-300 mb-6">
              Gracias por suscribirte a Mythic Tales. Pronto recibirás nuestras historias más encantadoras.
            </p>
            <Button 
              onClick={() => window.location.href = '/'}
              className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600"
            >
              Volver al Inicio
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent mb-6">
              Únete a Nuestra Comunidad
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Suscríbete para recibir las historias más encantadoras, destacados de creadores y ofertas especiales directamente en tu bandeja de entrada.
            </p>
          </div>

          {/* Subscription Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 max-w-md mx-auto mb-16">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Nombre</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Tu nombre completo"
                          className="bg-slate-700 border-slate-600 text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="tu@email.com"
                          className="bg-slate-700 border-slate-600 text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white py-3"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Suscribirse Ahora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* Email Marketing Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800/30 to-purple-800/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent mb-6">
              Marketing por Email
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto mb-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-pink-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Nuevas Historias</h3>
              </div>
              <p className="text-slate-400 mb-4">
                Recibe notificaciones semanales sobre las historias más recientes de diferentes culturas del mundo.
              </p>
              <ul className="text-slate-500 text-sm space-y-2">
                <li>• Cuentos recién publicados</li>
                <li>• Resúmenes culturales</li>
                <li>• Recomendaciones personalizadas</li>
                <li>• Acceso anticipado a contenido premium</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-violet-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Destacados de Creadores</h3>
              </div>
              <p className="text-slate-400 mb-4">
                Conoce a los artistas y escritores detrás de las historias más populares de nuestra plataforma.
              </p>
              <ul className="text-slate-500 text-sm space-y-2">
                <li>• Entrevistas exclusivas</li>
                <li>• Proceso creativo</li>
                <li>• Inspiración cultural</li>
                <li>• Consejos para aspirantes a creadores</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <Sparkles className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Ofertas Especiales</h3>
              </div>
              <p className="text-slate-400 mb-4">
                Descuentos exclusivos, contenido gratuito y acceso a eventos especiales solo para suscriptores.
              </p>
              <ul className="text-slate-500 text-sm space-y-2">
                <li>• Descuentos en membresías premium</li>
                <li>• Contenido exclusivo gratuito</li>
                <li>• Invitaciones a eventos virtuales</li>
                <li>• Regalos y merchandising</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Marketing Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent mb-6">
              Marketing en Redes Sociales
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
              Síguenos en nuestras redes sociales para contenido diario, interacciones en vivo y una comunidad activa de amantes de las historias.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all group">
              <Facebook className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Facebook</h3>
              <p className="text-slate-400 text-sm mb-4">
                Publicaciones diarias, eventos en vivo y discusiones comunitarias sobre historias culturales.
              </p>
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                Seguir en Facebook
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-pink-600/20 to-purple-800/20 rounded-xl p-6 border border-pink-500/30 hover:border-pink-400/50 transition-all group">
              <Instagram className="w-12 h-12 text-pink-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Instagram</h3>
              <p className="text-slate-400 text-sm mb-4">
                Arte visual, stories interactivas y contenido detrás de escenas de nuestros creadores.
              </p>
              <Button size="sm" className="w-full bg-pink-600 hover:bg-pink-700">
                Seguir en Instagram
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-xl p-6 border border-red-500/30 hover:border-red-400/50 transition-all group">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Pinterest</h3>
              <p className="text-slate-400 text-sm mb-4">
                Tableros temáticos con arte de historias, inspiración cultural y recursos educativos.
              </p>
              <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
                Seguir en Pinterest
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-800/20 rounded-xl p-6 border border-green-500/30 hover:border-green-400/50 transition-all group">
              <MessageSquare className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Interacción</h3>
              <p className="text-slate-400 text-sm mb-4">
                Respondemos a todos los comentarios y mensajes. ¡Tu voz importa en nuestra comunidad!
              </p>
              <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                Únete a la Conversación
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Marketing Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900/30 to-pink-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent mb-6">
              Marketing de Contenido
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
              Contenido educativo y entretenido sobre narrativa cultural, técnicas de ilustración y la importancia de preservar las tradiciones.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300 group">
              <Calendar className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Blog Posts</h3>
              <p className="text-slate-400 mb-4">
                Artículos semanales sobre la historia y significado cultural de las historias tradicionales.
              </p>
              <ul className="text-slate-500 text-sm space-y-2 mb-6">
                <li>• Análisis de mitos y leyendas</li>
                <li>• Contexto histórico y cultural</li>
                <li>• Comparaciones entre culturas</li>
                <li>• Entrevistas con expertos</li>
              </ul>
              <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700">
                Leer Blog
              </Button>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300 group">
              <BookOpen className="w-8 h-8 text-violet-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Artículos Educativos</h3>
              <p className="text-slate-400 mb-4">
                Recursos profundos para educadores, padres y estudiantes interesados en la narrativa cultural.
              </p>
              <ul className="text-slate-500 text-sm space-y-2 mb-6">
                <li>• Guías pedagógicas</li>
                <li>• Actividades para el aula</li>
                <li>• Recursos para padres</li>
                <li>• Materiales de investigación</li>
              </ul>
              <Button size="sm" className="w-full bg-violet-600 hover:bg-violet-700">
                Ver Recursos
              </Button>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300 group">
              <Sparkles className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Guías Creativas</h3>
              <p className="text-slate-400 mb-4">
                Tutoriales y consejos para aspirantes a creadores de contenido cultural y artistas.
              </p>
              <ul className="text-slate-500 text-sm space-y-2 mb-6">
                <li>• Técnicas de ilustración</li>
                <li>• Narrativa visual</li>
                <li>• Investigación cultural</li>
                <li>• Herramientas digitales</li>
              </ul>
              <Button size="sm" className="w-full bg-pink-600 hover:bg-pink-700">
                Explorar Guías
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Subscribe;
