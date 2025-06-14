
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es' | 'fr' | 'de' | 'it' | 'el';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'mythic_tales': 'Mythic Tales',
    'stories_that_enchant': 'Stories that enchant',
    'home': 'Home',
    'featured_stories': 'Featured Stories',
    'browse_by_culture': 'Browse by Culture',
    'upload_your_tale': 'Upload Your Tale',
    'for_readers': 'For Readers',
    'for_creators': 'For Creators',
    'contact': 'Contact',
    'login': 'Login',
    'site_menu': 'Site Menu',
    
    // Hero section
    'discover_timeless_stories': 'Discover Timeless Stories from Around the World',
    'hero_description': 'Immerse yourself in a magical collection of myths, legends and folktales from every corner of the planet. Each story is a window into ancient cultures and universal wisdom.',
    'start_reading': 'Start Reading',
    'explore_cultures': 'Explore Cultures',
    
    // Browse by Culture
    'explore_tales_by_culture': 'Explore Tales by Culture',
    'culture_description': 'Immerse yourself in a rich tapestry of storytelling traditions from around the world.',
    'asia_description': 'Dragons, samurai and ancestral wisdom',
    'europe_description': 'Fairies, knights and enchanted castles',
    'africa_description': 'Nature spirits and brave heroes',
    'americas_description': 'Ancient gods and epic adventures',
    'oceania_description': 'Ancestral dreams and creation myths',
    'middle_east_description': 'Magic genies and tales of the Arabian nights',
    'explore_now': 'Explore now',
    
    // Testimonials
    'what_families_say': 'What Our Families Say',
    'testimonial_1': 'Mythic Tales has transformed story time in our family. My children now know stories from their grandparents and from cultures around the world.',
    'testimonial_2': 'As an educator, I recommend Mythic Tales to all parents. It\'s an incredible tool for teaching cultural diversity and universal values.',
    'testimonial_3': 'My grandparents told me these stories when I was little, and now I can share them with my grandchildren in a modern way.',
    
    // For Readers
    'for_readers_families': 'For Readers and Families',
    'readers_description': 'Mythic Tales is designed with modern families in mind who seek to connect with their cultural roots and explore the diversity of the world. We offer an immersive reading experience that combines tradition with technological innovation.',
    'start_reading_now': 'Start Reading Now',
    'create_family_account': 'Create Family Account',
    'curated_library': 'Curated Library',
    'library_description': 'More than 150 stories carefully selected and adapted by experts in children\'s literature, cultural anthropologists and educators specializing in child development.',
    'browse_library': 'Browse Library',
    'educational_tools': 'Educational Tools',
    'tools_description': 'Complementary resources that enrich the reading experience and foster intercultural learning, developing critical thinking skills and reading comprehension.',
    'explore_tools': 'Explore Tools',
    'personalized_experience': 'Personalized Experience',
    'experience_description': 'Complete family accounts that adapt to each family\'s preferences and needs, with parental controls and educational progress tracking.',
    'get_started': 'Get Started',
    
    // For Creators
    'for_creators_artists': 'For Creators and Artists',
    'creators_description': 'Join our global community of storytellers, illustrators and culture preservers. Mythic Tales offers a unique platform for creators to share traditional stories from their cultures with the modern world.',
    'start_creating': 'Start Creating',
    'join_creator_community': 'Join Creator Community',
    'professional_tools': 'Professional Tools',
    'tools_suite_description': 'Complete suite of digital creation tools optimized for webtoon format, including pre-designed templates, cultural resource libraries and collaboration systems.',
    'try_tools': 'Try Tools',
    'support_mentoring': 'Support & Mentoring',
    'mentoring_description': 'Mentorship program with digital storytelling experts, cultural anthropologists and established artists who guide new creators through the cultural adaptation process.',
    'find_mentor': 'Find Mentor',
    'revenue_opportunities': 'Revenue Opportunities',
    'revenue_description': 'Transparent and fair monetization model that allows creators to earn significant income from their work, with licensing options and protected copyright.',
    'start_earning': 'Start Earning',
    
    // Why Choose Section
    'why_choose_mythic_tales': 'Why Choose Mythic Tales?',
    'why_choose_description': 'In an increasingly globalized world, preserving and sharing our cultural traditions is more important than ever.',
    'cultural_authenticity': 'Cultural Authenticity',
    'authenticity_description': 'Each story is reviewed by cultural experts to ensure historical accuracy and respect for original traditions.',
    'premium_quality_art': 'Premium Quality Art',
    'art_description': 'Professional illustrations in webtoon style that combine traditional techniques with cutting-edge digital technology.',
    'intercultural_education': 'Intercultural Education',
    'education_description': 'Fosters understanding and appreciation of different cultures, promoting values of tolerance and diversity.',
    'innovative_technology': 'Innovative Technology',
    'technology_description': 'Platform optimized for mobile devices with interactive features and exceptional user experience.',
    
    // Common
    'asia': 'Asia',
    'europe': 'Europe',
    'africa': 'Africa',
    'americas': 'Americas',
    'oceania': 'Oceania',
    'middle_east': 'Middle East'
  },
  es: {
    // Header
    'mythic_tales': 'Cuentos Míticos',
    'stories_that_enchant': 'Historias que encantan',
    'home': 'Inicio',
    'featured_stories': 'Historias Destacadas',
    'browse_by_culture': 'Explorar por Cultura',
    'upload_your_tale': 'Sube tu Historia',
    'for_readers': 'Para Lectores',
    'for_creators': 'Para Creadores',
    'contact': 'Contacto',
    'login': 'Iniciar Sesión',
    'site_menu': 'Menú del Sitio',
    
    // Hero section
    'discover_timeless_stories': 'Descubre Historias Atemporales de Todo el Mundo',
    'hero_description': 'Sumérgete en una colección mágica de mitos, leyendas y cuentos populares de cada rincón del planeta. Cada historia es una ventana a culturas ancestrales y sabiduría universal.',
    'start_reading': 'Comenzar a Leer',
    'explore_cultures': 'Explorar Culturas',
    
    // Browse by Culture
    'explore_tales_by_culture': 'Explora Cuentos por Cultura',
    'culture_description': 'Sumérgete en un rico tapiz de tradiciones narrativas de todo el mundo.',
    'asia_description': 'Dragones, samuráis y sabiduría ancestral',
    'europe_description': 'Hadas, caballeros y castillos encantados',
    'africa_description': 'Espíritus de la naturaleza y héroes valientes',
    'americas_description': 'Dioses ancestrales y aventuras épicas',
    'oceania_description': 'Sueños ancestrales y mitos de creación',
    'middle_east_description': 'Genios mágicos y cuentos de las noches árabes',
    'explore_now': 'Explorar ahora',
    
    // Testimonials
    'what_families_say': 'Lo que Dicen Nuestras Familias',
    'testimonial_1': 'Cuentos Míticos ha transformado la hora del cuento en nuestra familia. Mis hijos ahora conocen historias de sus abuelos y de culturas de todo el mundo.',
    'testimonial_2': 'Como educadora, recomiendo Cuentos Míticos a todos los padres. Es una herramienta increíble para enseñar diversidad cultural y valores universales.',
    'testimonial_3': 'Mis abuelos me contaban estas historias cuando era pequeño, y ahora puedo compartirlas con mis nietos de manera moderna.',
    
    // For Readers
    'for_readers_families': 'Para Lectores y Familias',
    'readers_description': 'Cuentos Míticos está diseñado pensando en familias modernas que buscan conectar con sus raíces culturales y explorar la diversidad del mundo. Ofrecemos una experiencia de lectura inmersiva que combina tradición con innovación tecnológica.',
    'start_reading_now': 'Comenzar a Leer Ahora',
    'create_family_account': 'Crear Cuenta Familiar',
    'curated_library': 'Biblioteca Curada',
    'library_description': 'Más de 150 historias cuidadosamente seleccionadas y adaptadas por expertos en literatura infantil, antropólogos culturales y educadores especializados en desarrollo infantil.',
    'browse_library': 'Explorar Biblioteca',
    'educational_tools': 'Herramientas Educativas',
    'tools_description': 'Recursos complementarios que enriquecen la experiencia de lectura y fomentan el aprendizaje intercultural, desarrollando habilidades de pensamiento crítico y comprensión lectora.',
    'explore_tools': 'Explorar Herramientas',
    'personalized_experience': 'Experiencia Personalizada',
    'experience_description': 'Cuentas familiares completas que se adaptan a las preferencias y necesidades de cada familia, con controles parentales y seguimiento del progreso educativo.',
    'get_started': 'Comenzar',
    
    // For Creators
    'for_creators_artists': 'Para Creadores y Artistas',
    'creators_description': 'Únete a nuestra comunidad global de narradores, ilustradores y preservadores de cultura. Cuentos Míticos ofrece una plataforma única para que los creadores compartan historias tradicionales de sus culturas con el mundo moderno.',
    'start_creating': 'Comenzar a Crear',
    'join_creator_community': 'Unirse a la Comunidad de Creadores',
    'professional_tools': 'Herramientas Profesionales',
    'tools_suite_description': 'Suite completa de herramientas de creación digital optimizadas para formato webtoon, incluyendo plantillas prediseñadas, bibliotecas de recursos culturales y sistemas de colaboración.',
    'try_tools': 'Probar Herramientas',
    'support_mentoring': 'Apoyo y Mentoría',
    'mentoring_description': 'Programa de mentoría con expertos en narrativa digital, antropólogos culturales y artistas establecidos que guían a nuevos creadores a través del proceso de adaptación cultural.',
    'find_mentor': 'Encontrar Mentor',
    'revenue_opportunities': 'Oportunidades de Ingresos',
    'revenue_description': 'Modelo de monetización transparente y justo que permite a los creadores obtener ingresos significativos de su trabajo, con opciones de licenciamiento y derechos de autor protegidos.',
    'start_earning': 'Comenzar a Ganar',
    
    // Why Choose Section
    'why_choose_mythic_tales': '¿Por qué Elegir Cuentos Míticos?',
    'why_choose_description': 'En un mundo cada vez más globalizado, preservar y compartir nuestras tradiciones culturales es más importante que nunca.',
    'cultural_authenticity': 'Autenticidad Cultural',
    'authenticity_description': 'Cada historia es revisada por expertos culturales para asegurar precisión histórica y respeto por las tradiciones originales.',
    'premium_quality_art': 'Arte de Calidad Premium',
    'art_description': 'Ilustraciones profesionales en estilo webtoon que combinan técnicas tradicionales con tecnología digital de vanguardia.',
    'intercultural_education': 'Educación Intercultural',
    'education_description': 'Fomenta la comprensión y apreciación de diferentes culturas, promoviendo valores de tolerancia y diversidad.',
    'innovative_technology': 'Tecnología Innovadora',
    'technology_description': 'Plataforma optimizada para dispositivos móviles con características interactivas y experiencia de usuario excepcional.',
    
    // Common
    'asia': 'Asia',
    'europe': 'Europa',
    'africa': 'África',
    'americas': 'Américas',
    'oceania': 'Oceanía',
    'middle_east': 'Medio Oriente'
  },
  fr: {
    // Header
    'mythic_tales': 'Contes Mythiques',
    'stories_that_enchant': 'Histoires qui enchantent',
    'home': 'Accueil',
    'featured_stories': 'Histoires en Vedette',
    'browse_by_culture': 'Parcourir par Culture',
    'upload_your_tale': 'Télécharger votre Histoire',
    'for_readers': 'Pour les Lecteurs',
    'for_creators': 'Pour les Créateurs',
    'contact': 'Contact',
    'login': 'Se Connecter',
    'site_menu': 'Menu du Site',
    
    // Hero section
    'discover_timeless_stories': 'Découvrez des Histoires Intemporelles du Monde Entier',
    'hero_description': 'Plongez-vous dans une collection magique de mythes, légendes et contes populaires de chaque coin de la planète. Chaque histoire est une fenêtre sur les cultures ancestrales et la sagesse universelle.',
    'start_reading': 'Commencer à Lire',
    'explore_cultures': 'Explorer les Cultures',
    
    // Browse by Culture
    'explore_tales_by_culture': 'Explorer les Contes par Culture',
    'culture_description': 'Plongez-vous dans une riche tapisserie de traditions narratives du monde entier.',
    'asia_description': 'Dragons, samouraïs et sagesse ancestrale',
    'europe_description': 'Fées, chevaliers et châteaux enchantés',
    'africa_description': 'Esprits de la nature et héros courageux',
    'americas_description': 'Dieux anciens et aventures épiques',
    'oceania_description': 'Rêves ancestraux et mythes de création',
    'middle_east_description': 'Génies magiques et contes des nuits arabes',
    'explore_now': 'Explorer maintenant',
    
    // Testimonials
    'what_families_say': 'Ce que Disent nos Familles',
    'testimonial_1': 'Contes Mythiques a transformé l\'heure du conte dans notre famille. Mes enfants connaissent maintenant les histoires de leurs grands-parents et des cultures du monde entier.',
    'testimonial_2': 'En tant qu\'éducatrice, je recommande Contes Mythiques à tous les parents. C\'est un outil incroyable pour enseigner la diversité culturelle et les valeurs universelles.',
    'testimonial_3': 'Mes grands-parents me racontaient ces histoires quand j\'étais petit, et maintenant je peux les partager avec mes petits-enfants de manière moderne.',
    
    // For Readers
    'for_readers_families': 'Pour les Lecteurs et les Familles',
    'readers_description': 'Contes Mythiques est conçu en pensant aux familles modernes qui cherchent à se connecter avec leurs racines culturelles et à explorer la diversité du monde. Nous offrons une expérience de lecture immersive qui combine tradition et innovation technologique.',
    'start_reading_now': 'Commencer à Lire Maintenant',
    'create_family_account': 'Créer un Compte Familial',
    'curated_library': 'Bibliothèque Sélectionnée',
    'library_description': 'Plus de 150 histoires soigneusement sélectionnées et adaptées par des experts en littérature jeunesse, des anthropologues culturels et des éducateurs spécialisés dans le développement de l\'enfant.',
    'browse_library': 'Parcourir la Bibliothèque',
    'educational_tools': 'Outils Éducatifs',
    'tools_description': 'Ressources complémentaires qui enrichissent l\'expérience de lecture et favorisent l\'apprentissage interculturel, développant les compétences de pensée critique et de compréhension de lecture.',
    'explore_tools': 'Explorer les Outils',
    'personalized_experience': 'Expérience Personnalisée',
    'experience_description': 'Comptes familiaux complets qui s\'adaptent aux préférences et besoins de chaque famille, avec contrôles parentaux et suivi des progrès éducatifs.',
    'get_started': 'Commencer',
    
    // For Creators
    'for_creators_artists': 'Pour les Créateurs et Artistes',
    'creators_description': 'Rejoignez notre communauté mondiale de conteurs, illustrateurs et préservateurs de culture. Contes Mythiques offre une plateforme unique pour que les créateurs partagent les histoires traditionnelles de leurs cultures avec le monde moderne.',
    'start_creating': 'Commencer à Créer',
    'join_creator_community': 'Rejoindre la Communauté de Créateurs',
    'professional_tools': 'Outils Professionnels',
    'tools_suite_description': 'Suite complète d\'outils de création numérique optimisés pour le format webtoon, incluant des modèles pré-conçus, des bibliothèques de ressources culturelles et des systèmes de collaboration.',
    'try_tools': 'Essayer les Outils',
    'support_mentoring': 'Soutien et Mentorat',
    'mentoring_description': 'Programme de mentorat avec des experts en narration numérique, des anthropologues culturels et des artistes établis qui guident les nouveaux créateurs à travers le processus d\'adaptation culturelle.',
    'find_mentor': 'Trouver un Mentor',
    'revenue_opportunities': 'Opportunités de Revenus',
    'revenue_description': 'Modèle de monétisation transparent et équitable qui permet aux créateurs d\'obtenir des revenus significatifs de leur travail, avec des options de licence et des droits d\'auteur protégés.',
    'start_earning': 'Commencer à Gagner',
    
    // Why Choose Section
    'why_choose_mythic_tales': 'Pourquoi Choisir Contes Mythiques?',
    'why_choose_description': 'Dans un monde de plus en plus globalisé, préserver et partager nos traditions culturelles est plus important que jamais.',
    'cultural_authenticity': 'Authenticité Culturelle',
    'authenticity_description': 'Chaque histoire est révisée par des experts culturels pour assurer la précision historique et le respect des traditions originales.',
    'premium_quality_art': 'Art de Qualité Premium',
    'art_description': 'Illustrations professionnelles en style webtoon qui combinent les techniques traditionnelles avec la technologie numérique de pointe.',
    'intercultural_education': 'Éducation Interculturelle',
    'education_description': 'Favorise la compréhension et l\'appréciation de différentes cultures, promouvant les valeurs de tolérance et de diversité.',
    'innovative_technology': 'Technologie Innovante',
    'technology_description': 'Plateforme optimisée pour les appareils mobiles avec des fonctionnalités interactives et une expérience utilisateur exceptionnelle.',
    
    // Common
    'asia': 'Asie',
    'europe': 'Europe',
    'africa': 'Afrique',
    'americas': 'Amériques',
    'oceania': 'Océanie',
    'middle_east': 'Moyen-Orient'
  },
  de: {
    // Header
    'mythic_tales': 'Mythische Geschichten',
    'stories_that_enchant': 'Geschichten die verzaubern',
    'home': 'Startseite',
    'featured_stories': 'Empfohlene Geschichten',
    'browse_by_culture': 'Nach Kultur durchsuchen',
    'upload_your_tale': 'Ihre Geschichte hochladen',
    'for_readers': 'Für Leser',
    'for_creators': 'Für Ersteller',
    'contact': 'Kontakt',
    'login': 'Anmelden',
    'site_menu': 'Seitenmenü',
    
    // Hero section
    'discover_timeless_stories': 'Entdecken Sie zeitlose Geschichten aus aller Welt',
    'hero_description': 'Tauchen Sie ein in eine magische Sammlung von Mythen, Legenden und Volksmärchen aus allen Ecken des Planeten. Jede Geschichte ist ein Fenster zu alten Kulturen und universeller Weisheit.',
    'start_reading': 'Mit dem Lesen beginnen',
    'explore_cultures': 'Kulturen erkunden',
    
    // Browse by Culture
    'explore_tales_by_culture': 'Geschichten nach Kultur erkunden',
    'culture_description': 'Tauchen Sie ein in ein reiches Geflecht von Erzähltraditionen aus aller Welt.',
    'asia_description': 'Drachen, Samurai und Ahnenwissen',
    'europe_description': 'Feen, Ritter und verzauberte Schlösser',
    'africa_description': 'Naturgeister und mutige Helden',
    'americas_description': 'Alte Götter und epische Abenteuer',
    'oceania_description': 'Ahnenträume und Schöpfungsmythen',
    'middle_east_description': 'Magische Genies und Märchen aus Tausendundeiner Nacht',
    'explore_now': 'Jetzt erkunden',
    
    // Testimonials
    'what_families_say': 'Was unsere Familien sagen',
    'testimonial_1': 'Mythische Geschichten hat die Märchenstunde in unserer Familie verwandelt. Meine Kinder kennen jetzt Geschichten von ihren Großeltern und aus Kulturen der ganzen Welt.',
    'testimonial_2': 'Als Pädagogin empfehle ich Mythische Geschichten allen Eltern. Es ist ein unglaubliches Werkzeug, um kulturelle Vielfalt und universelle Werte zu lehren.',
    'testimonial_3': 'Meine Großeltern erzählten mir diese Geschichten, als ich klein war, und jetzt kann ich sie auf moderne Weise mit meinen Enkeln teilen.',
    
    // For Readers
    'for_readers_families': 'Für Leser und Familien',
    'readers_description': 'Mythische Geschichten ist für moderne Familien konzipiert, die sich mit ihren kulturellen Wurzeln verbinden und die Vielfalt der Welt erkunden möchten. Wir bieten ein immersives Leseerlebnis, das Tradition mit technologischer Innovation verbindet.',
    'start_reading_now': 'Jetzt mit dem Lesen beginnen',
    'create_family_account': 'Familienkonto erstellen',
    'curated_library': 'Kuratierte Bibliothek',
    'library_description': 'Mehr als 150 sorgfältig ausgewählte und angepasste Geschichten von Experten für Kinderliteratur, Kulturanthropologen und Pädagogen, die auf Kindesentwicklung spezialisiert sind.',
    'browse_library': 'Bibliothek durchsuchen',
    'educational_tools': 'Bildungstools',
    'tools_description': 'Ergänzende Ressourcen, die das Leseerlebnis bereichern und interkulturelles Lernen fördern, kritisches Denken und Leseverständnis entwickeln.',
    'explore_tools': 'Tools erkunden',
    'personalized_experience': 'Personalisierte Erfahrung',
    'experience_description': 'Vollständige Familienkonten, die sich an die Vorlieben und Bedürfnisse jeder Familie anpassen, mit Kindersicherung und Verfolgung des Bildungsfortschritts.',
    'get_started': 'Loslegen',
    
    // For Creators
    'for_creators_artists': 'Für Ersteller und Künstler',
    'creators_description': 'Treten Sie unserer globalen Gemeinschaft von Geschichtenerzählern, Illustratoren und Kulturbewahrern bei. Mythische Geschichten bietet eine einzigartige Plattform für Ersteller, traditionelle Geschichten aus ihren Kulturen mit der modernen Welt zu teilen.',
    'start_creating': 'Mit dem Erstellen beginnen',
    'join_creator_community': 'Der Ersteller-Gemeinschaft beitreten',
    'professional_tools': 'Professionelle Tools',
    'tools_suite_description': 'Vollständige Suite digitaler Erstellungstools, optimiert für Webtoon-Format, einschließlich vorgefertigter Vorlagen, kultureller Ressourcenbibliotheken und Kollaborationssystemen.',
    'try_tools': 'Tools ausprobieren',
    'support_mentoring': 'Unterstützung & Mentoring',
    'mentoring_description': 'Mentoring-Programm mit Experten für digitales Storytelling, Kulturanthropologen und etablierten Künstlern, die neue Ersteller durch den kulturellen Anpassungsprozess führen.',
    'find_mentor': 'Mentor finden',
    'revenue_opportunities': 'Einkommensmöglichkeiten',
    'revenue_description': 'Transparentes und faires Monetarisierungsmodell, das es Erstellern ermöglicht, bedeutende Einnahmen aus ihrer Arbeit zu erzielen, mit Lizenzierungsoptionen und geschütztem Urheberrecht.',
    'start_earning': 'Mit dem Verdienen beginnen',
    
    // Why Choose Section
    'why_choose_mythic_tales': 'Warum Mythische Geschichten wählen?',
    'why_choose_description': 'In einer zunehmend globalisierten Welt ist das Bewahren und Teilen unserer kulturellen Traditionen wichtiger denn je.',
    'cultural_authenticity': 'Kulturelle Authentizität',
    'authenticity_description': 'Jede Geschichte wird von Kulturexperten überprüft, um historische Genauigkeit und Respekt für ursprüngliche Traditionen zu gewährleisten.',
    'premium_quality_art': 'Premium-Qualitätskunst',
    'art_description': 'Professionelle Illustrationen im Webtoon-Stil, die traditionelle Techniken mit modernster digitaler Technologie verbinden.',
    'intercultural_education': 'Interkulturelle Bildung',
    'education_description': 'Fördert Verständnis und Wertschätzung verschiedener Kulturen, unterstützt Werte von Toleranz und Vielfalt.',
    'innovative_technology': 'Innovative Technologie',
    'technology_description': 'Plattform optimiert für mobile Geräte mit interaktiven Funktionen und außergewöhnlicher Benutzererfahrung.',
    
    // Common
    'asia': 'Asien',
    'europe': 'Europa',
    'africa': 'Afrika',
    'americas': 'Amerika',
    'oceania': 'Ozeanien',
    'middle_east': 'Naher Osten'
  },
  it: {
    // Header
    'mythic_tales': 'Racconti Mitici',
    'stories_that_enchant': 'Storie che incantano',
    'home': 'Casa',
    'featured_stories': 'Storie in Evidenza',
    'browse_by_culture': 'Sfoglia per Cultura',
    'upload_your_tale': 'Carica la tua Storia',
    'for_readers': 'Per i Lettori',
    'for_creators': 'Per i Creatori',
    'contact': 'Contatto',
    'login': 'Accedi',
    'site_menu': 'Menu del Sito',
    
    // Hero section
    'discover_timeless_stories': 'Scopri Storie Senza Tempo da Tutto il Mondo',
    'hero_description': 'Immergiti in una collezione magica di miti, leggende e racconti popolari da ogni angolo del pianeta. Ogni storia è una finestra su culture ancestrali e saggezza universale.',
    'start_reading': 'Inizia a Leggere',
    'explore_cultures': 'Esplora le Culture',
    
    // Browse by Culture
    'explore_tales_by_culture': 'Esplora Racconti per Cultura',
    'culture_description': 'Immergiti in un ricco arazzo di tradizioni narrative da tutto il mondo.',
    'asia_description': 'Draghi, samurai e saggezza ancestrale',
    'europe_description': 'Fate, cavalieri e castelli incantati',
    'africa_description': 'Spiriti della natura e eroi coraggiosi',
    'americas_description': 'Dei ancestrali e avventure epiche',
    'oceania_description': 'Sogni ancestrali e miti della creazione',
    'middle_east_description': 'Geni magici e racconti delle notti arabe',
    'explore_now': 'Esplora ora',
    
    // Testimonials
    'what_families_say': 'Cosa Dicono le Nostre Famiglie',
    'testimonial_1': 'Racconti Mitici ha trasformato l\'ora delle storie nella nostra famiglia. I miei figli ora conoscono storie dei loro nonni e di culture di tutto il mondo.',
    'testimonial_2': 'Come educatrice, raccomando Racconti Mit',
    'testimonial_3': 'I miei nonni mi raccontavano queste storie quando ero piccolo, e ora posso condividerle con i miei nipoti in modo moderno.',
    
    // For Readers
    'for_readers_families': 'Per Lettori e Famiglie',
    'readers_description': 'Racconti Mitici è progettato pensando alle famiglie moderne che cercano di connettersi con le proprie radici culturali ed esplorare la diversità del mondo. Offriamo un\'esperienza di lettura immersiva che combina tradizione con innovazione tecnologica.',
    'start_reading_now': 'Inizia a Leggere Ora',
    'create_family_account': 'Crea Account Famiglia',
    'curated_library': 'Biblioteca Curata',
    'library_description': 'Più di 150 storie accuratamente selezionate e adattate da esperti in letteratura per bambini, antropologi culturali ed educatori specializzati nello sviluppo infantile.',
    'browse_library': 'Sfoglia Biblioteca',
    'educational_tools': 'Strumenti Educativi',
    'tools_description': 'Risorse complementari che arricchiscono l\'esperienza di lettura e favoriscono l\'apprendimento interculturale, sviluppando abilità di pensiero critico e comprensione della lettura.',
    'explore_tools': 'Esplora Strumenti',
    'personalized_experience': 'Esperienza Personalizzata',
    'experience_description': 'Account familiari completi che si adattano alle preferenze e ai bisogni di ogni famiglia, con controlli parentali e monitoraggio del progresso educativo.',
    'get_started': 'Inizia',
    
    // For Creators
    'for_creators_artists': 'Per Creatori e Artisti',
    'creators_description': 'Unisciti alla nostra comunità globale di narratori, illustratori e conservatori di cultura. Racconti Mitici offre una piattaforma unica per i creatori per condividere storie tradizionali delle loro culture con il mondo moderno.',
    'start_creating': 'Inizia a Creare',
    'join_creator_community': 'Unisciti alla Comunità dei Creatori',
    'professional_tools': 'Strumenti Professionali',
    'tools_suite_description': 'Suite completa di strumenti di creazione digitale ottimizzati per formato webtoon, inclusi modelli pre-progettati, biblioteche di risorse culturali e sistemi di collaborazione.',
    'try_tools': 'Prova Strumenti',
    'support_mentoring': 'Supporto e Mentoring',
    'mentoring_description': 'Programma di mentoring con esperti di storytelling digitale, antropologi culturali e artisti affermati che guidano i nuovi creatori attraverso il processo di adattamento culturale.',
    'find_mentor': 'Trova Mentor',
    'revenue_opportunities': 'Opportunità di Guadagno',
    'revenue_description': 'Modello di monetizzazione trasparente e giusto che permette ai creatori di ottenere guadagni significativi dal loro lavoro, con opzioni di licenza e copyright protetto.',
    'start_earning': 'Inizia a Guadagnare',
    
    // Why Choose Section
    'why_choose_mythic_tales': 'Perché Scegliere Racconti Mitici?',
    'why_choose_description': 'In un mondo sempre più globalizzato, preservare e condividere le nostre tradizioni culturali è più importante che mai.',
    'cultural_authenticity': 'Autenticità Culturale',
    'authenticity_description': 'Ogni storia è rivista da esperti culturali per assicurare accuratezza storica e rispetto per le tradizioni originali.',
    'premium_quality_art': 'Arte di Qualità Premium',
    'art_description': 'Illustrazioni professionali in stile webtoon che combinano tecniche tradizionali con tecnologia digitale all\'avanguardia.',
    'intercultural_education': 'Educazione Interculturale',
    'education_description': 'Favorisce comprensione e apprezzamento di diverse culture, promuovendo valori di tolleranza e diversità.',
    'innovative_technology': 'Tecnologia Innovativa',
    'technology_description': 'Piattaforma ottimizzata per dispositivi mobili con caratteristiche interattive ed esperienza utente eccezionale.',
    
    // Common
    'asia': 'Asia',
    'europe': 'Europa',
    'africa': 'Africa',
    'americas': 'Americhe',
    'oceania': 'Oceania',
    'middle_east': 'Medio Oriente'
  },
  el: {
    // Header
    'mythic_tales': 'Μυθικές Ιστορίες',
    'stories_that_enchant': 'Ιστορίες που μαγεύουν',
    'home': 'Αρχική',
    'featured_stories': 'Προτεινόμενες Ιστορίες',
    'browse_by_culture': 'Περιήγηση ανά Πολιτισμό',
    'upload_your_tale': 'Ανεβάστε την Ιστορία σας',
    'for_readers': 'Για Αναγνώστες',
    'for_creators': 'Για Δημιουργούς',
    'contact': 'Επικοινωνία',
    'login': 'Σύνδεση',
    'site_menu': 'Μενού Ιστότοπου',
    
    // Hero section
    'discover_timeless_stories': 'Ανακαλύψτε Διαχρονικές Ιστορίες από όλο τον Κόσμο',
    'hero_description': 'Βυθιστείτε σε μια μαγική συλλογή μύθων, θρύλων και λαϊκών παραμυθιών από κάθε γωνιά του πλανήτη. Κάθε ιστορία είναι ένα παράθυρο σε αρχαίους πολιτισμούς και παγκόσμια σοφία.',
    'start_reading': 'Ξεκινήστε να Διαβάζετε',
    'explore_cultures': 'Εξερευνήστε Πολιτισμούς',
    
    // Browse by Culture
    'explore_tales_by_culture': 'Εξερευνήστε Ιστορίες ανά Πολιτισμό',
    'culture_description': 'Βυθιστείτε σε ένα πλούσιο ύφασμα παραδοσιακών αφηγήσεων από όλο τον κόσμο.',
    'asia_description': 'Δράκοι, σαμουράι και ανcestral σοφία',
    'europe_description': 'Νεράιδες, ιππότες και μαγεμένα κάστρα',
    'africa_description': 'Πνεύματα της φύσης και γενναίοι ήρωες',
    'americas_description': 'Αρχαίοι θεοί και επικές περιπέτειες',
    'oceania_description': 'Όνειρα προγόνων και μύθοι δημιουργίας',
    'middle_east_description': 'Μαγικοί τζίνι και ιστορίες των αραβικών νυχτών',
    'explore_now': 'Εξερευνήστε τώρα',
    
    // Testimonials
    'what_families_say': 'Τι Λένε οι Οικογένειές μας',
    'testimonial_1': 'Οι Μυθικές Ιστορίες έχουν μεταμορφώσει την ώρα του παραμυθιού στην οικογένειά μας. Τα παιδιά μου τώρα γνωρίζουν ιστορίες από τους παππούδες τους και από πολιτισμούς όλου του κόσμου.',
    'testimonial_2': 'Ως εκπαιδευτικός, συνιστώ τις Μυθικές Ιστορίες σε όλους τους γονείς. Είναι ένα απίστευτο εργαλείο για τη διδασκαλία πολιτισμικής ποικιλομορφίας και παγκόσμιων αξιών.',
    'testimonial_3': 'Οι παππούδες μου μου έλεγαν αυτές τις ιστορίες όταν ήμουν μικρός, και τώρα μπορώ να τις μοιραστώ με τα εγγόνια μου με σύγχρονο τρόπο.',
    
    // For Readers
    'for_readers_families': 'Για Αναγνώστες και Οικογένειες',
    'readers_description': 'Οι Μυθικές Ιστορίες είναι σχεδιασμένες με γνώμονα τις σύγχρονες οικογένειες που επιδιώκουν να συνδεθούν με τις πολιτισμικές τους ρίζες και να εξερευνήσουν την ποικιλομορφία του κόσμου. Προσφέρουμε μια καθηλωτική εμπειρία ανάγνωσης που συνδυάζει παράδοση με τεχνολογική καινοτομία.',
    'start_reading_now': 'Ξεκινήστε να Διαβάζετε Τώρα',
    'create_family_account': 'Δημιουργήστε Οικογενειακό Λογαριασμό',
    'curated_library': 'Επιμελημένη Βιβλιοθήκη',
    'library_description': 'Περισσότερες από 150 ιστορίες προσεκτικά επιλεγμένες και προσαρμοσμένες από ειδικούς στη παιδική λογοτεχνία, πολιτισμικούς ανθρωπολόγους και εκπαιδευτικούς που ειδικεύονται στην παιδική ανάπτυξη.',
    'browse_library': 'Περιηγηθείτε στη Βιβλιοθήκη',
    'educational_tools': 'Εκπαιδευτικά Εργαλεία',
    'tools_description': 'Συμπληρωματικοί πόροι που εμπλουτίζουν την εμπειρία ανάγνωσης και προάγουν τη διαπολιτισμική μάθηση, αναπτύσσοντας δεξιότητες κριτικής σκέψης και κατανόησης κειμένου.',
    'explore_tools': 'Εξερευνήστε Εργαλεία',
    'personalized_experience': 'Εξατομικευμένη Εμπειρία',
    'experience_description': 'Πλήρεις οικογενειακοί λογαριασμοί που προσαρμόζονται στις προτιμήσεις και ανάγκες κάθε οικογένειας, με γονικούς ελέγχους και παρακολούθηση εκπαιδευτικής προόδου.',
    'get_started': 'Ξεκινήστε',
    
    // For Creators
    'for_creators_artists': 'Για Δημιουργούς και Καλλιτέχνες',
    'creators_description': 'Ενταχθείτε στην παγκόσμια κοινότητά μας από αφηγητές, εικονογράφους και φυλάκες πολιτισμού. Οι Μυθικές Ιστορίες προσφέρουν μια μοναδική πλατφόρμα για δημιουργούς να μοιραστούν παραδοσιακές ιστορίες από τους πολιτισμούς τους με τον σύγχρονο κόσμο.',
    'start_creating': 'Ξεκινήστε να Δημιουργείτε',
    'join_creator_community': 'Ενταχθείτε στην Κοινότητα Δημιουργών',
    'professional_tools': 'Επαγγελματικά Εργαλεία',
    'tools_suite_description': 'Πλήρης σουίτα ψηφιακών εργαλείων δημιουργίας βελτιστοποιημένων για μορφή webtoon, συμπεριλαμβανομένων προ-σχεδιασμένων προτύπων, βιβλιοθηκών πολιτισμικών πόρων και συστημάτων συνεργασίας.',
    'try_tools': 'Δοκιμάστε Εργαλεία',
    'support_mentoring': 'Υποστήριξη & Καθοδήγηση',
    'mentoring_description': 'Πρόγραμμα καθοδήγησης με ειδικούς ψηφιακής αφήγησης, πολιτισμικούς ανθρωπολόγους και καθιερωμένους καλλιτέχνες που καθοδηγούν νέους δημιουργούς μέσα από τη διαδικασία πολιτισμικής προσαρμογής.',
    'find_mentor': 'Βρείτε Μέντορα',
    'revenue_opportunities': 'Ευκαιρίες Εσόδων',
    'revenue_description': 'Διαφανές και δίκαιο μοντέλο μονετοποίησης που επιτρέπει στους δημιουργούς να αποκτήσουν σημαντικά έσοδα από την εργασία τους, με επιλογές αδειοδότησης και προστατευμένα πνευματικά δικαιώματα.',
    'start_earning': 'Ξεκινήστε να Κερδίζετε',
    
    // Why Choose Section
    'why_choose_mythic_tales': 'Γιατί να Επιλέξετε Μυθικές Ιστορίες;',
    'why_choose_description': 'Σε έναν όλο και πιο παγκοσμιοποιημένο κόσμο, η διατήρηση και ο διαμοιρασμός των πολιτισμικών μας παραδόσεων είναι πιο σημαντικός από ποτέ.',
    'cultural_authenticity': 'Πολιτισμική Αυθεντικότητα',
    'authenticity_description': 'Κάθε ιστορία επανεξετάζεται από πολιτισμικούς ειδικούς για να εξασφαλιστεί ιστορική ακρίβεια και σεβασμός στις αρχικές παραδόσεις.',
    'premium_quality_art': 'Τέχνη Premium Ποιότητας',
    'art_description': 'Επαγγελματικές εικονογραφήσεις σε στιλ webtoon που συνδυάζουν παραδοσιακές τεχνικές με αιχμηρή ψηφιακή τεχνολογία.',
    'intercultural_education': 'Διαπολιτισμική Εκπαίδευση',
    'education_description': 'Προάγει την κατανόηση και εκτίμηση διαφορετικών πολιτισμών, προωθώντας αξίες ανεκτικότητας και ποικιλομορφίας.',
    'innovative_technology': 'Καινοτόμος Τεχνολογία',
    'technology_description': 'Πλατφόρμα βελτιστοποιημένη για κινητές συσκευές με διαδραστικά χαρακτηριστικά και εξαιρετική εμπειρία χρήστη.',
    
    // Common
    'asia': 'Ασία',
    'europe': 'Ευρώπη',
    'africa': 'Αφρική',
    'americas': 'Αμερικές',
    'oceania': 'Ωκεανία',
    'middle_east': 'Μέση Ανατολή'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
