
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
            Browse by Culture
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Explore stories from different cultures and traditions around the world
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Asia', 'Europe', 'Africa', 'Americas', 'Oceania', 'Middle East'].map((culture) => (
              <div key={culture} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-colors cursor-pointer">
                <h3 className="text-white font-semibold">{culture}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Readers Section */}
      <section id="readers" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-8">
            For Readers
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Everything you need to discover and enjoy our collection of stories
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Browse Stories</h3>
              <p className="text-slate-400">Discover tales from every corner of the world</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Reading Lists</h3>
              <p className="text-slate-400">Curated collections for different ages and interests</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Family Accounts</h3>
              <p className="text-slate-400">Share stories with your loved ones</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Creators Section */}
      <section id="creators" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-8">
            For Creators
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Join our community of storytellers and artists
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Start Creating</h3>
              <p className="text-slate-400">Begin your journey as a storyteller</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Art Guidelines</h3>
              <p className="text-slate-400">Learn our webtoon style standards</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Creator Support</h3>
              <p className="text-slate-400">Get help from our community</p>
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
