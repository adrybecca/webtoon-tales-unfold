import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedStories } from "@/components/FeaturedStories";
import { UploadSection } from "@/components/UploadSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, PenTool, Users, Globe, Sparkles, Heart, Star, Award, Shield } from "lucide-react";

const Index = () => {
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
      
      {/* Enhanced Browse by Culture Section */}
      <section id="cultures" className="py-24 px-4 bg-gradient-to-r from-slate-800/30 to-purple-800/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent mb-8">
              Explore Tales by Culture
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Immerse yourself in a rich tapestry of storytelling traditions from around the world. Each culture has its own unique stories that have been passed down from generation to generation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'Asia', description: 'Dragons, samurai and ancestral wisdom', icon: '🐉', gradient: 'from-red-500 to-orange-500' },
              { name: 'Europe', description: 'Fairies, knights and enchanted castles', icon: '🏰', gradient: 'from-blue-500 to-purple-500' },
              { name: 'Africa', description: 'Nature spirits and brave heroes', icon: '🦁', gradient: 'from-yellow-500 to-orange-600' },
              { name: 'Americas', description: 'Ancient gods and epic adventures', icon: '🦅', gradient: 'from-emerald-500 to-teal-600' },
              { name: 'Oceania', description: 'Ancestral dreams and creation myths', icon: '🌊', gradient: 'from-cyan-500 to-blue-600' },
              { name: 'Middle East', description: 'Magic genies and tales of the Arabian nights', icon: '🧞‍♂️', gradient: 'from-purple-500 to-pink-500' }
            ].map((culture) => (
              <div 
                key={culture.name} 
                className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-700/60 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl border border-slate-700/50"
                onClick={() => handleCultureClick(culture.name)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${culture.gradient} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-500 animate-bounce">
                    {culture.icon}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 group-hover:text-pink-300 transition-colors">
                    {culture.name}
                  </h3>
                  <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{culture.description}</p>
                  <div className="mt-6 flex items-center justify-center text-pink-400 text-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <span className="font-semibold">Explore now</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-purple-900/30 to-pink-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent mb-8">
              What Our Families Say
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto mb-8 rounded-full"></div>
            <div className="flex justify-center space-x-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.2}s`}} />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                text: "Mythic Tales has transformed story time in our family. My children now know stories from their grandparents and from cultures around the world. The webtoon-style illustrations are absolutely beautiful and keep the kids completely absorbed.",
                name: "Maria González",
                role: "Mother of 3, Madrid",
                initial: "M",
                gradient: "from-pink-500 to-violet-500"
              },
              {
                text: "As an educator, I recommend Mythic Tales to all parents. It's an incredible tool for teaching cultural diversity and universal values. Children learn about tolerance, respect and the richness of different traditions while having fun.",
                name: "Ana Rodriguez",
                role: "Elementary Teacher, Barcelona",
                initial: "A",
                gradient: "from-cyan-500 to-blue-500"
              },
              {
                text: "My grandparents told me these stories when I was little, and now I can share them with my grandchildren in a modern and engaging way. The artistic and narrative quality is exceptional. It's like having a world library at home.",
                name: "José Martinez",
                role: "Grandfather and retired librarian, Seville",
                initial: "J",
                gradient: "from-emerald-500 to-teal-500"
              }
            ].map((testimonial, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-slate-700/50 hover:shadow-2xl">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current inline-block" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-200 mb-8 italic text-lg leading-relaxed group-hover:text-white transition-colors">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className={`w-14 h-14 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <span className="text-white font-bold text-xl">{testimonial.initial}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg group-hover:text-pink-300 transition-colors">{testimonial.name}</h4>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Readers Section - Enhanced with CTAs */}
      <section id="readers" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-8">
              For Readers and Families
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
              Mythic Tales is designed with modern families in mind who seek to connect with their cultural roots and explore the diversity of the world. We offer an immersive reading experience that combines tradition with technological innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg"
                onClick={handleStartReading}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Start Reading Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={handleCreateAccount}
                className="border-2 border-emerald-400/50 text-emerald-200 hover:bg-emerald-400/10 px-8 py-4 rounded-full font-semibold"
              >
                <Users className="w-5 h-5 mr-2" />
                Create Family Account
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-emerald-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Curated Library</h3>
              </div>
              <p className="text-slate-400 mb-4">
                More than 150 stories carefully selected and adapted by experts in children's literature, cultural anthropologists and educators specializing in child development.
              </p>
              <ul className="text-slate-500 text-sm space-y-2 mb-6">
                <li>• Age classification (3-5, 6-8, 9-12 years)</li>
                <li>• Filters by culture and geographic region</li>
                <li>• Thematic categories (adventure, friendship, courage)</li>
                <li>• Monthly updates with new stories</li>
              </ul>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleStartReading}
                className="w-full border-emerald-400/50 text-emerald-300 hover:bg-emerald-400/10 group-hover:scale-105 transition-transform"
              >
                Browse Library
              </Button>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <Sparkles className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Educational Tools</h3>
              </div>
              <p className="text-slate-400 mb-4">
                Complementary resources that enrich the reading experience and foster intercultural learning, developing critical thinking skills and reading comprehension.
              </p>
              <ul className="text-slate-500 text-sm space-y-2 mb-6">
                <li>• Discussion guides for parents and children</li>
                <li>• Interactive maps of cultural origin</li>
                <li>• Glossaries of cultural terms</li>
                <li>• Related creative activities</li>
              </ul>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => alert("Educational resources coming soon!")}
                className="w-full border-purple-400/50 text-purple-300 hover:bg-purple-400/10 group-hover:scale-105 transition-transform"
              >
                Explore Tools
              </Button>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-pink-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Personalized Experience</h3>
              </div>
              <p className="text-slate-400 mb-4">
                Complete family accounts that adapt to each family's preferences and needs, with parental controls and educational progress tracking.
              </p>
              <ul className="text-slate-500 text-sm space-y-2 mb-6">
                <li>• Individual profiles for each member</li>
                <li>• Recommendations based on interests</li>
                <li>• Night reading mode</li>
                <li>• Synchronization across devices</li>
              </ul>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleCreateAccount}
                className="w-full border-pink-400/50 text-pink-300 hover:bg-pink-400/10 group-hover:scale-105 transition-transform"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* For Creators Section - Enhanced with CTAs */}
      <section id="creators" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-8">
              For Creators and Artists
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
              Join our global community of storytellers, illustrators and culture preservers. Mythic Tales offers a unique platform for creators to share traditional stories from their cultures with the modern world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg"
                onClick={handleStartCreating}
                className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold"
              >
                <PenTool className="w-5 h-5 mr-2" />
                Start Creating
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={handleCreateAccount}
                className="border-2 border-violet-400/50 text-violet-200 hover:bg-violet-400/10 px-8 py-4 rounded-full font-semibold"
              >
                <Users className="w-5 h-5 mr-2" />
                Join Creator Community
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <PenTool className="w-8 h-8 text-violet-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Professional Tools</h3>
              </div>
              <p className="text-slate-400 mb-4">
                Complete suite of digital creation tools optimized for webtoon format, including pre-designed templates, cultural resource libraries and collaboration systems.
              </p>
              <ul className="text-slate-500 text-sm space-y-2 mb-6">
                <li>• Integrated webtoon editor</li>
                <li>• Library of authentic cultural elements</li>
                <li>• Responsive templates for mobile</li>
                <li>• Advanced coloring tools</li>
              </ul>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => alert("Creator tools coming soon!")}
                className="w-full border-violet-400/50 text-violet-300 hover:bg-violet-400/10 group-hover:scale-105 transition-transform"
              >
                Try Tools
              </Button>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Support & Mentoring</h3>
              </div>
              <p className="text-slate-400 mb-4">
                Mentorship program with digital storytelling experts, cultural anthropologists and established artists who guide new creators through the cultural adaptation process.
              </p>
              <ul className="text-slate-500 text-sm space-y-2 mb-6">
                <li>• Individualized mentoring sessions</li>
                <li>• Intercultural storytelling workshops</li>
                <li>• Review by cultural experts</li>
                <li>• Active creator community</li>
              </ul>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => alert("Mentorship program coming soon!")}
                className="w-full border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 group-hover:scale-105 transition-transform"
              >
                Find Mentor
              </Button>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <Sparkles className="w-8 h-8 text-emerald-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Revenue Opportunities</h3>
              </div>
              <p className="text-slate-400 mb-4">
                Transparent and fair monetization model that allows creators to earn significant income from their work, with licensing options and protected copyright.
              </p>
              <ul className="text-slate-500 text-sm space-y-2 mb-6">
                <li>• 70% revenue for the creator</li>
                <li>• Guaranteed monthly payments</li>
                <li>• Exclusive licensing options</li>
                <li>• Popularity bonuses</li>
              </ul>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleStartCreating}
                className="w-full border-emerald-400/50 text-emerald-300 hover:bg-emerald-400/10 group-hover:scale-105 transition-transform"
              >
                Start Earning
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Mythic Tales Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-purple-900/30 to-pink-900/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent mb-8">
              Why Choose Mythic Tales?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              In an increasingly globalized world, preserving and sharing our cultural traditions is more important than ever. Mythic Tales combines the richness of traditional stories with the innovation of modern digital art.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Cultural Authenticity",
                description: "Each story is reviewed by cultural experts to ensure historical accuracy and respect for original traditions.",
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                icon: Award,
                title: "Premium Quality Art",
                description: "Professional illustrations in webtoon style that combine traditional techniques with cutting-edge digital technology.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Globe,
                title: "Intercultural Education",
                description: "Fosters understanding and appreciation of different cultures, promoting values of tolerance and diversity.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Sparkles,
                title: "Innovative Technology",
                description: "Platform optimized for mobile devices with interactive features and exceptional user experience.",
                gradient: "from-yellow-500 to-orange-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-slate-700/50">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors">{feature.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed group-hover:text-slate-300 transition-colors">
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
