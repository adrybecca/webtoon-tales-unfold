
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
            Explore Tales by Culture
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
            Immerse yourself in a rich tapestry of storytelling traditions from around the world. Each culture has its own unique stories that have been passed down from generation to generation, shaping values, teaching important lessons and preserving ancestral wisdom.
          </p>
          <p className="text-lg text-slate-500 mb-12 max-w-4xl mx-auto">
            Our collections include classic myths, heroic legends, traditional fairy tales, moral fables and creation stories. From the mystical dragons of Asia to the brave warriors of Africa, from the enchanted princesses of Europe to the ancestral spirits of America, each story is carefully adapted for modern readers while preserving its authentic cultural essence.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Asia', description: 'Dragons, samurai and ancestral wisdom' },
              { name: 'Europe', description: 'Fairies, knights and enchanted castles' },
              { name: 'Africa', description: 'Nature spirits and brave heroes' },
              { name: 'Americas', description: 'Ancient gods and epic adventures' },
              { name: 'Oceania', description: 'Ancestral dreams and creation myths' },
              { name: 'Middle East', description: 'Magic genies and tales of the Arabian nights' }
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
            What Our Families Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/40 rounded-lg p-8">
              <p className="text-slate-300 mb-6 italic">
                "Mythic Tales has transformed story time in our family. My children now know stories from their grandparents and from cultures around the world. The webtoon-style illustrations are absolutely beautiful and keep the kids completely absorbed."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Maria González</h4>
                  <p className="text-slate-400 text-sm">Mother of 3, Madrid</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/40 rounded-lg p-8">
              <p className="text-slate-300 mb-6 italic">
                "As an educator, I recommend Mythic Tales to all parents. It's an incredible tool for teaching cultural diversity and universal values. Children learn about tolerance, respect and the richness of different traditions while having fun."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Ana Rodriguez</h4>
                  <p className="text-slate-400 text-sm">Elementary Teacher, Barcelona</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/40 rounded-lg p-8">
              <p className="text-slate-300 mb-6 italic">
                "My grandparents told me these stories when I was little, and now I can share them with my grandchildren in a modern and engaging way. The artistic and narrative quality is exceptional. It's like having a world library at home."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">J</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">José Martinez</h4>
                  <p className="text-slate-400 text-sm">Grandfather and retired librarian, Seville</p>
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
            For Readers and Families
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
            Mythic Tales is designed with modern families in mind who seek to connect with their cultural roots and explore the diversity of the world. We offer an immersive reading experience that combines tradition with technological innovation.
          </p>
          <p className="text-lg text-slate-500 mb-12 max-w-4xl mx-auto">
            Our platform allows parents to select age-appropriate stories for their children, create personalized reading lists and track family reading progress. Each story includes discussion guides to foster meaningful conversations about values, culture and history. Family accounts allow up to 6 members to access all content with individualized profiles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Curated Library</h3>
              <p className="text-slate-400 mb-4">
                More than 150 stories carefully selected and adapted by experts in children's literature, cultural anthropologists and educators specializing in child development.
              </p>
              <ul className="text-slate-500 text-sm space-y-2">
                <li>• Age classification (3-5, 6-8, 9-12 years)</li>
                <li>• Filters by culture and geographic region</li>
                <li>• Thematic categories (adventure, friendship, courage)</li>
                <li>• Monthly updates with new stories</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Educational Tools</h3>
              <p className="text-slate-400 mb-4">
                Complementary resources that enrich the reading experience and foster intercultural learning, developing critical thinking skills and reading comprehension.
              </p>
              <ul className="text-slate-500 text-sm space-y-2">
                <li>• Discussion guides for parents and children</li>
                <li>• Interactive maps of cultural origin</li>
                <li>• Glossaries of cultural terms</li>
                <li>• Related creative activities</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Personalized Experience</h3>
              <p className="text-slate-400 mb-4">
                Complete family accounts that adapt to each family's preferences and needs, with parental controls and educational progress tracking.
              </p>
              <ul className="text-slate-500 text-sm space-y-2">
                <li>• Individual profiles for each member</li>
                <li>• Recommendations based on interests</li>
                <li>• Night reading mode</li>
                <li>• Synchronization across devices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* For Creators Section */}
      <section id="creators" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-8">
            For Creators and Artists
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
            Join our global community of storytellers, illustrators and culture preservers. Mythic Tales offers a unique platform for creators to share traditional stories from their cultures with the modern world.
          </p>
          <p className="text-lg text-slate-500 mb-12 max-w-4xl mx-auto">
            Our creator program is designed to support both established artists and new talent. We provide professional creation tools, mentorships with digital storytelling experts, and fair monetization opportunities. Each story goes through a cultural review process to ensure authenticity and respect for original traditions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Professional Tools</h3>
              <p className="text-slate-400 mb-4">
                Complete suite of digital creation tools optimized for webtoon format, including pre-designed templates, cultural resource libraries and collaboration systems.
              </p>
              <ul className="text-slate-500 text-sm space-y-2">
                <li>• Integrated webtoon editor</li>
                <li>• Library of authentic cultural elements</li>
                <li>• Responsive templates for mobile</li>
                <li>• Advanced coloring tools</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Support and Mentoring</h3>
              <p className="text-slate-400 mb-4">
                Mentorship program with digital storytelling experts, cultural anthropologists and established artists who guide new creators through the cultural adaptation process.
              </p>
              <ul className="text-slate-500 text-sm space-y-2">
                <li>• Individualized mentoring sessions</li>
                <li>• Intercultural storytelling workshops</li>
                <li>• Review by cultural experts</li>
                <li>• Active creator community</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Revenue Opportunities</h3>
              <p className="text-slate-400 mb-4">
                Transparent and fair monetization model that allows creators to earn significant income from their work, with licensing options and protected copyright.
              </p>
              <ul className="text-slate-500 text-sm space-y-2">
                <li>• 70% revenue for the creator</li>
                <li>• Guaranteed monthly payments</li>
                <li>• Exclusive licensing options</li>
                <li>• Popularity bonuses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Mythic Tales Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-8">
            Why Choose Mythic Tales?
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto">
            In an increasingly globalized world, preserving and sharing our cultural traditions is more important than ever. Mythic Tales combines the richness of traditional stories with the innovation of modern digital art.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/40 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Cultural Authenticity</h3>
              <p className="text-slate-400 text-sm">
                Each story is reviewed by cultural experts to ensure historical accuracy and respect for original traditions.
              </p>
            </div>
            <div className="bg-slate-800/40 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Premium Quality Art</h3>
              <p className="text-slate-400 text-sm">
                Professional illustrations in webtoon style that combine traditional techniques with cutting-edge digital technology.
              </p>
            </div>
            <div className="bg-slate-800/40 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Intercultural Education</h3>
              <p className="text-slate-400 text-sm">
                Fosters understanding and appreciation of different cultures, promoting values of tolerance and diversity.
              </p>
            </div>
            <div className="bg-slate-800/40 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Innovative Technology</h3>
              <p className="text-slate-400 text-sm">
                Platform optimized for mobile devices with interactive features and exceptional user experience.
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
