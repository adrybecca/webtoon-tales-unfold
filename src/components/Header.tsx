
import { useState } from "react";
import { BookOpen, Menu, X, Sparkles } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { title: "Home", href: "#home" },
    { title: "Featured Stories", href: "#featured" },
    { title: "Browse by Culture", href: "#cultures" },
    { title: "Upload Your Tale", href: "#upload" },
    { title: "For Readers", href: "#readers" },
    { title: "For Creators", href: "#creators" },
    { title: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string, event: React.MouseEvent) => {
    event.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-slate-800 rounded-lg p-2 border border-slate-700 group-hover:border-pink-400/50 transition-colors">
                <BookOpen className="w-6 h-6 text-pink-400" />
                <Sparkles className="w-3 h-3 text-violet-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
            </div>
            <div className="ml-3">
              <span className="text-xl font-bold bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                Mythic Tales
              </span>
              <div className="text-xs text-slate-400 -mt-1">Stories that enchant</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:text-pink-400 data-[state=open]:text-pink-400">
                    Site Menu
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-slate-800 border-slate-700">
                    <div className="grid gap-2 p-4 w-64">
                      {menuItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          onClick={(e) => handleNavClick(item.href, e)}
                          className="block px-3 py-2 text-slate-300 hover:text-pink-400 hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-pink-400"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 rounded-lg mt-2">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className="block px-3 py-2 text-slate-300 hover:text-pink-400 hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
