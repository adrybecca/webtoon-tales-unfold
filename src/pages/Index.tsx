
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
