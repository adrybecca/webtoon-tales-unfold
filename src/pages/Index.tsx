
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedStories } from "@/components/FeaturedStories";
import { UploadSection } from "@/components/UploadSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="featured">
        <FeaturedStories />
      </section>
      
      {/* Browse by Culture Section */}
      <section id="cultures" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-8">
            Explora Cuentos por Cultura
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
            Sumérgete en un rico tapiz de tradiciones narrativas de todo el mundo. Cada cultura tiene sus propias historias únicas que han sido transmitidas de generación en generación, moldeando valores, enseñando lecciones importantes y preservando la sabiduría ancestral.
          </p>
          <p className="text-lg text-slate-500 mb-12 max-w-4xl mx-auto">
            Nuestras colecciones incluyen mitos clásicos, leyendas heroicas, cuentos de hadas tradicionales, fábulas morales y relatos de creación. Desde los dragones místicos de Asia hasta los valientes guerreros de África, desde las princesas encantadas de Europa hasta los espíritus ancestrales de América, cada historia está cuidadosamente adaptada para lectores modernos mientras preserva su esencia cultural auténtica.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Asia', description: 'Dragones, samuráis y sabiduría ancestral' },
              { name: 'Europa', description: 'Hadas, caballeros y castillos encantados' },
              { name: 'África', description: 'Espíritus de la naturaleza y héroes valientes' },
              { name: 'Américas', description: 'Dioses antiguos y aventuras épicas' },
              { name: 'Oceanía', description: 'Sueños ancestrales y mitos de creación' },
              { name: 'Medio Oriente', description: 'Genios mágicos y cuentos de las mil y una noches' }
            ].map((culture) => (
              <div key={culture.name} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-colors cursor-pointer">
                <h3 className="text-white font-semibold mb-2">{culture.name}</h3>
                <p className="text-slate-400 text-sm">{culture.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-16 text-center">
            Lo Que Dicen Nuestras Familias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/40 rounded-lg p-8">
              <p className="text-slate-300 mb-6 italic">
                "Mythic Tales ha transformado la hora del cuento en nuestra familia. Mis hijos ahora conocen historias de sus abuelos y de culturas de todo el mundo. Las ilustraciones estilo webtoon son absolutamente hermosas y mantienen a los niños completamente absortos."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">María González</h4>
                  <p className="text-slate-400 text-sm">Madre de 3 hijos, Madrid</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/40 rounded-lg p-8">
              <p className="text-slate-300 mb-6 italic">
                "Como educadora, recomiendo Mythic Tales a todos los padres. Es una herramienta increíble para enseñar diversidad cultural y valores universales. Los niños aprenden sobre tolerancia, respeto y la riqueza de diferentes tradiciones mientras se divierten."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Ana Rodríguez</h4>
                  <p className="text-slate-400 text-sm">Profesora de Primaria, Barcelona</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/40 rounded-lg p-8">
              <p className="text-slate-300 mb-6 italic">
                "Mis abuelos me contaban estas historias cuando era pequeño, y ahora puedo compartirlas con mis nietos de una manera moderna y atractiva. La calidad artística y narrativa es excepcional. Es como tener una biblioteca mundial en casa."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">J</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">José Martinez</h4>
                  <p className="text-slate-400 text-sm">Abuelo y bibliotecario jubilado, Sevilla</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Readers Section */}
      <section id="readers" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-8">
            Para Lectores y Familias
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
            Mythic Tales está diseñado pensando en las familias modernas que buscan conectar con sus raíces culturales y explorar la diversidad del mundo. Ofrecemos una experiencia de lectura inmersiva que combina tradición con innovación tecnológica.
          </p>
          <p className="text-lg text-slate-500 mb-12 max-w-4xl mx-auto">
            Nuestra plataforma permite a los padres seleccionar historias apropiadas para la edad de sus hijos, crear listas de lectura personalizadas y seguir el progreso de lectura familiar. Cada historia incluye guías de discusión para fomentar conversaciones significativas sobre valores, cultura e historia. Las cuentas familiares permiten que hasta 6 miembros accedan a todo el contenido con perfiles individualizados.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Biblioteca Curada</h3>
              <p className="text-slate-400 mb-4">
                Más de 150 historias cuidadosamente seleccionadas y adaptadas por expertos en literatura infantil, antropólogos culturales y educadores especializados en desarrollo infantil.
              </p>
              <ul className="text-slate-500 text-sm space-y-2">
                <li>• Clasificación por edades (3-5, 6-8, 9-12 años)</li>
                <li>• Filtros por cultura y región geográfica</li>
                <li>• Categorías temáticas (aventura, amistad, valentía)</li>
                <li>• Actualizaciones mensuales con nuevas historias</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Herramientas Educativas</h3>
              <p className="text-slate-400 mb-4">
                Recursos complementarios que enriquecen la experiencia de lectura y fomentan el aprendizaje intercultural, desarrollando habilidades de pensamiento crítico y comprensión lectora.
              </p>
              <ul className="text-slate-500 text-sm space-y-2">
                <li>• Guías de discusión para padres e hijos</li>
                <li>• Mapas interactivos de origen cultural</li>
                <li>• Glosarios de términos culturales</li>
                <li>• Actividades creativas relacionadas</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Experiencia Personalizada</h3>
              <p className="text-slate-400 mb-4">
                Cuentas familiares completas que se adaptan a las preferencias y necesidades de cada familia, con controles parentales y seguimiento de progreso educativo.
              </p>
              <ul className="text-slate-500 text-sm space-y-2">
                <li>• Perfiles individuales para cada miembro</li>
                <li>• Recomendaciones basadas en intereses</li>
                <li>• Modo de lectura nocturna</li>
                <li>• Sincronización entre dispositivos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* For Creators Section */}
      <section id="creators" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-8">
            Para Creadores y Artistas
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
            Únete a nuestra comunidad global de narradores, ilustradores y preservadores de cultura. Mythic Tales ofrece una plataforma única para que los creadores compartan historias tradicionales de sus culturas con el mundo moderno.
          </p>
          <p className="text-lg text-slate-500 mb-12 max-w-4xl mx-auto">
            Nuestro programa de creadores está diseñado para apoyar tanto a artistas establecidos como a nuevos talentos. Proporcionamos herramientas profesionales de creación, mentorías con expertos en narrativa digital, y oportunidades de monetización justas. Cada historia pasa por un proceso de revisión cultural para asegurar autenticidad y respeto hacia las tradiciones originales.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Herramientas Profesionales</h3>
              <p className="text-slate-400 mb-4">
                Suite completa de herramientas de creación digital optimizadas para el formato webtoon, incluyendo plantillas prediseñadas, bibliotecas de recursos culturales y sistemas de colaboración.
              </p>
              <ul className="text-slate-500 text-sm space-y-2">
                <li>• Editor de webtoon integrado</li>
                <li>• Biblioteca de elementos culturales auténticos</li>
                <li>• Plantillas responsive para móviles</li>
                <li>• Herramientas de colorizado avanzadas</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Apoyo y Mentorías</h3>
              <p className="text-slate-400 mb-4">
                Programa de mentorías con expertos en narrativa digital, antropólogos culturales y artistas establecidos que guían a los nuevos creadores en el proceso de adaptación cultural.
              </p>
              <ul className="text-slate-500 text-sm space-y-2">
                <li>• Sesiones de mentoría individualizadas</li>
                <li>• Talleres de narrativa intercultural</li>
                <li>• Revisión por expertos culturales</li>
                <li>• Comunidad de creadores activa</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Oportunidades de Ingresos</h3>
              <p className="text-slate-400 mb-4">
                Modelo de monetización transparente y justo que permite a los creadores obtener ingresos significativos por su trabajo, con opciones de licenciamiento y derechos de autor protegidos.
              </p>
              <ul className="text-slate-500 text-sm space-y-2">
                <li>• 70% de ingresos para el creador</li>
                <li>• Pagos mensuales garantizados</li>
                <li>• Opciones de licenciamiento exclusivo</li>
                <li>• Bonificaciones por popularidad</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Mythic Tales Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-8">
            ¿Por Qué Elegir Mythic Tales?
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto">
            En un mundo cada vez más globalizado, preservar y compartir nuestras tradiciones culturales es más importante que nunca. Mythic Tales combina la riqueza de las historias tradicionales con la innovación del arte digital moderno.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/40 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Autenticidad Cultural</h3>
              <p className="text-slate-400 text-sm">
                Cada historia es revisada por expertos culturales para asegurar precisión histórica y respeto hacia las tradiciones originales.
              </p>
            </div>
            <div className="bg-slate-800/40 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Arte de Calidad Premium</h3>
              <p className="text-slate-400 text-sm">
                Ilustraciones profesionales en estilo webtoon que combinan técnicas tradicionales con tecnología digital de vanguardia.
              </p>
            </div>
            <div className="bg-slate-800/40 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Educación Intercultural</h3>
              <p className="text-slate-400 text-sm">
                Fomenta la comprensión y apreciación de diferentes culturas, promoviendo valores de tolerancia y diversidad.
              </p>
            </div>
            <div className="bg-slate-800/40 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Tecnología Innovadora</h3>
              <p className="text-slate-400 text-sm">
                Plataforma optimizada para dispositivos móviles con funciones interactivas y experiencia de usuario excepcional.
              </p>
            </div>
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
