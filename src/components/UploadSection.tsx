
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Palette, Globe, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Upload,
    title: "Easy Upload",
    description: "Simple drag-and-drop interface for your stories and artwork"
  },
  {
    icon: Palette,
    title: "Art Tools",
    description: "Built-in tools to create stunning webtoon-style illustrations"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Share your cultural stories with families worldwide"
  },
  {
    icon: DollarSign,
    title: "Earn Revenue",
    description: "Set your prices and earn from your creative work"
  }
];

export const UploadSection = () => {
  return (
    <section className="py-16 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-3">
            Share Your Stories
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-6">
            Are you a storyteller or artist? Join our community and bring traditional tales to life with beautiful webtoon-style art
          </p>
          
          <Button 
            size="lg"
            className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-violet-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <Upload className="w-5 h-5 mr-2" />
            Join Creator Community
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/30 backdrop-blur-sm text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Ready to Get Started?</h3>
              <p className="text-slate-400 mb-4">
                Join thousands of creators who are already sharing their cultural heritage through beautiful digital storytelling. 
                Upload your first story today and connect with families around the world.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3" />
                  Free to start, no upfront costs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3" />
                  Keep 70% of your revenue
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3" />
                  Built-in marketing tools
                </li>
              </ul>
            </div>
            <div className="text-center">
              <Button 
                size="lg"
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Create Account & Upload
              </Button>
              <p className="text-slate-500 text-sm mt-3">
                No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
