
import { useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <BookOpen className="w-8 h-8 text-pink-400 mr-3" />
            <span className="text-xl font-bold text-white">Mythic Tales</span>
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
                          className="block px-3 py-2 text-slate-300 hover:text-pink-400 hover:bg-slate-700 rounded-md transition-colors"
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
                  className="block px-3 py-2 text-slate-300 hover:text-pink-400 hover:bg-slate-700 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
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
