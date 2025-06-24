
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useForm } from "react-hook-form";
import { Mail, Facebook, Instagram, MessageSquare, Users, BookOpen, Calendar, Sparkles, ArrowRight, CheckCircle, Heart, Share2, MessageCircle } from "lucide-react";
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
            <h1 className="text-2xl font-bold text-white mb-4">Subscription Successful!</h1>
            <p className="text-slate-300 mb-6">
              Thank you for subscribing to Mythic Tales. You'll soon receive our most enchanting stories.
            </p>
            <Button 
              onClick={() => window.location.href = '/'}
              className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600"
            >
              Back to Home
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
              Join Our Community
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Subscribe to receive the most enchanting stories, creator spotlights, and special offers directly in your inbox.
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
                      <FormLabel className="text-white">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your full name"
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
                          placeholder="your@email.com"
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
                  Subscribe Now
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
              Email Marketing
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto mb-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-pink-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">New Stories</h3>
              </div>
              <p className="text-slate-400 mb-4">
                Receive weekly notifications about the latest stories from different cultures around the world.
              </p>
              <ul className="text-slate-500 text-sm space-y-2">
                <li>• Newly published tales</li>
                <li>• Cultural summaries</li>
                <li>• Personalized recommendations</li>
                <li>• Early access to premium content</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-violet-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Creator Spotlights</h3>
              </div>
              <p className="text-slate-400 mb-4">
                Meet the artists and writers behind the most popular stories on our platform.
              </p>
              <ul className="text-slate-500 text-sm space-y-2">
                <li>• Exclusive interviews</li>
                <li>• Creative process insights</li>
                <li>• Cultural inspiration</li>
                <li>• Tips for aspiring creators</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <Sparkles className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Special Offers</h3>
              </div>
              <p className="text-slate-400 mb-4">
                Exclusive discounts, free content, and access to special events only for subscribers.
              </p>
              <ul className="text-slate-500 text-sm space-y-2">
                <li>• Premium membership discounts</li>
                <li>• Exclusive free content</li>
                <li>• Virtual event invitations</li>
                <li>• Gifts and merchandise</li>
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
              Social Media Marketing
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
              Follow us on social media for daily content, live interactions, and an active community of story lovers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Facebook Sample Post */}
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-xl p-6 border border-blue-500/30">
              <div className="flex items-center mb-4">
                <Facebook className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Facebook Sample Post</h3>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center mr-3">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Mythic Tales</p>
                    <p className="text-slate-400 text-xs">2 hours ago</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-3">
                  🌟 Discover the enchanting tale of "The Phoenix and the Dragon" from ancient Chinese mythology! This week's featured story explores themes of rebirth, courage, and the eternal cycle of life. 
                  
                  What's your favorite mythological creature? Share in the comments! 👇
                  
                  #MythicTales #ChineseMythology #Storytelling #CulturalHeritage
                </p>
                <div className="flex items-center space-x-4 text-slate-400 text-sm">
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-1" />
                    <span>42 likes</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span>8 comments</span>
                  </div>
                  <div className="flex items-center">
                    <Share2 className="w-4 h-4 mr-1" />
                    <span>5 shares</span>
                  </div>
                </div>
              </div>
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                Follow on Facebook
              </Button>
            </div>
            
            {/* Instagram Sample Post */}
            <div className="bg-gradient-to-br from-pink-600/20 to-purple-800/20 rounded-xl p-6 border border-pink-500/30">
              <div className="flex items-center mb-4">
                <Instagram className="w-8 h-8 text-pink-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Instagram Sample Post</h3>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                <div className="aspect-square bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-lg mb-3 flex items-center justify-center">
                  <div className="text-center text-white">
                    <BookOpen className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">Beautiful Story Illustration</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm mb-3">
                  ✨ Behind the scenes: Watch our artist Maria create the stunning illustration for "The Jade Rabbit" - a beloved tale from Korean folklore! 🐰🌙
                  
                  Swipe to see the creative process ➡️
                  
                  #ArtProcess #KoreanFolklore #DigitalArt #MythicTales #CreatorSpotlight #BehindTheScenes
                </p>
                <div className="flex items-center space-x-4 text-slate-400 text-sm">
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-1" />
                    <span>234 likes</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span>15 comments</span>
                  </div>
                </div>
              </div>
              <Button size="sm" className="w-full bg-pink-600 hover:bg-pink-700">
                Follow on Instagram
              </Button>
            </div>
            
            {/* Pinterest Sample Post */}
            <div className="bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-xl p-6 border border-red-500/30">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <h3 className="text-xl font-bold text-white">Pinterest Sample Board</h3>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="aspect-[3/4] bg-gradient-to-b from-emerald-500 to-teal-600 rounded flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="aspect-[3/4] bg-gradient-to-b from-orange-500 to-red-600 rounded flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-2">Norse Mythology Collection</h4>
                <p className="text-slate-300 text-sm mb-3">
                  📌 Curated collection of Norse mythology stories, illustrations, and educational resources. Perfect for teachers, students, and mythology enthusiasts!
                  
                  #NorseMythology #EducationalResources #TeachingMaterials #Vikings #Mythology
                </p>
                <p className="text-slate-400 text-xs">23 pins • 156 followers</p>
              </div>
              <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
                Follow on Pinterest
              </Button>
            </div>
            
            {/* Community Interaction */}
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-800/20 rounded-xl p-6 border border-green-500/30">
              <div className="flex items-center mb-4">
                <MessageSquare className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Community Engagement</h3>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                <h4 className="text-white font-semibold mb-3">Sample Community Interactions:</h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-slate-700/50 rounded p-3">
                    <p className="text-slate-300"><strong>@StoryLover123:</strong> "Love the Celtic mythology series! 🍀"</p>
                    <p className="text-green-400 mt-1"><strong>Mythic Tales:</strong> "Thank you! Which Celtic tale is your favorite? We'd love to feature more! ✨"</p>
                  </div>
                  <div className="bg-slate-700/50 rounded p-3">
                    <p className="text-slate-300"><strong>@TeacherMaria:</strong> "Using these in my classroom!"</p>
                    <p className="text-green-400 mt-1"><strong>Mythic Tales:</strong> "Amazing! Check our educational resources section for lesson plans 📚"</p>
                  </div>
                </div>
              </div>
              <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                Join the Conversation
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
              Content Marketing
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
              Educational and entertaining content about cultural storytelling, illustration techniques, and the importance of preserving traditions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300 group">
              <Calendar className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Blog Posts</h3>
              <p className="text-slate-400 mb-4">
                Weekly articles about the history and cultural significance of traditional stories.
              </p>
              <ul className="text-slate-500 text-sm space-y-2 mb-6">
                <li>• Myth and legend analysis</li>
                <li>• Historical and cultural context</li>
                <li>• Cross-cultural comparisons</li>
                <li>• Expert interviews</li>
              </ul>
              <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700">
                Read Blog
              </Button>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300 group">
              <BookOpen className="w-8 h-8 text-violet-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Educational Articles</h3>
              <p className="text-slate-400 mb-4">
                In-depth resources for educators, parents, and students interested in cultural storytelling.
              </p>
              <ul className="text-slate-500 text-sm space-y-2 mb-6">
                <li>• Teaching guides</li>
                <li>• Classroom activities</li>
                <li>• Parent resources</li>
                <li>• Research materials</li>
              </ul>
              <Button size="sm" className="w-full bg-violet-600 hover:bg-violet-700">
                View Resources
              </Button>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300 group">
              <Sparkles className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Creative Guides</h3>
              <p className="text-slate-400 mb-4">
                Tutorials and tips for aspiring cultural content creators and artists.
              </p>
              <ul className="text-slate-500 text-sm space-y-2 mb-6">
                <li>• Illustration techniques</li>
                <li>• Visual storytelling</li>
                <li>• Cultural research</li>
                <li>• Digital tools</li>
              </ul>
              <Button size="sm" className="w-full bg-pink-600 hover:bg-pink-700">
                Explore Guides
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
