import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Eye } from "lucide-react";

const allStories = [
  {
    id: 1,
    title: "The Dragon of Mount Fuji",
    country: "Japan",
    price: "$4.99",
    rating: 4.8,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=300&fit=crop",
    description: "A tale of courage and wisdom from ancient Japan",
    genre: "Mythology"
  },
  {
    id: 2,
    title: "The Northern Lights Princess",
    country: "Norway", 
    price: "$3.99",
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=400&h=300&fit=crop",
    description: "A magical adventure under the Aurora Borealis",
    genre: "Folklore"
  },
  {
    id: 3,
    title: "The Feathered Serpent",
    country: "Mexico",
    price: "$4.49",
    rating: 4.7,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
    description: "The legend of Quetzalcoatl comes to life",
    genre: "Legend"
  },
  {
    id: 4,
    title: "The Dreamtime Spirits",
    country: "Australia",
    price: "$3.99",
    rating: 4.6,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    description: "Aboriginal creation stories beautifully retold",
    genre: "Creation Myth"
  },
  {
    id: 5,
    title: "The Brave Anansi",
    country: "Ghana",
    price: "$2.99",
    rating: 4.8,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop",
    description: "The clever spider's greatest adventures",
    genre: "Folklore"
  },
  {
    id: 6,
    title: "The Ice Maiden's Heart",
    country: "Russia",
    price: "$4.99",
    rating: 4.9,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop",
    description: "A tale of love conquering the coldest winter",
    genre: "Fairy Tale"
  },
  {
    id: 7,
    title: "The Thunder Bird",
    country: "Canada",
    price: "$3.49",
    rating: 4.5,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
    description: "First Nations legend of the mighty Thunder Bird",
    genre: "Native Legend"
  },
  {
    id: 8,
    title: "The Golden Peacock",
    country: "India",
    price: "$4.29",
    rating: 4.7,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400&h=300&fit=crop",
    description: "A tale of beauty, wisdom and divine intervention",
    genre: "Hindu Mythology"
  },
  {
    id: 9,
    title: "The Sphinx's Riddle",
    country: "Egypt",
    price: "$3.99",
    rating: 4.6,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=300&fit=crop",
    description: "Ancient Egyptian mystery and wisdom",
    genre: "Ancient Mythology"
  }
];

export const FeaturedStories = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedStories = showAll ? allStories : allStories.slice(0, 6);

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-pink-500/20 to-violet-500/20 text-pink-300 border-pink-500/30 mb-4">
            Featured Collection
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
            Tales That Enchant
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Discover magical stories from every corner of the world, each beautifully illustrated and perfect for bedtime reading
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedStories.map((story) => (
            <Card key={story.id} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-black/70 text-white border-0">
                    {story.country}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-purple-500/80 text-white border-0">
                    {story.genre}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                  {story.title}
                </h3>
                <p className="text-slate-400 mb-4 text-sm">
                  {story.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold ml-1">{story.rating}</span>
                    </div>
                    <span className="text-slate-400 text-sm">({story.reviews})</span>
                  </div>
                  <div className="text-2xl font-bold text-pink-400">
                    {story.price}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white"
                    size="sm"
                    onClick={() => alert("Purchase functionality will be implemented soon!")}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Buy Now
                  </Button>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                    onClick={() => alert("Preview functionality will be implemented soon!")}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-8 py-4 rounded-full"
          >
            {showAll ? "Show Less" : "View All Stories"}
          </Button>
        </div>
      </div>
    </section>
  );
};
