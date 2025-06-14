
import { useState } from "react";
import { BookOpen, Menu, X, Sparkles, User, Languages } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "el", name: "Ελληνικά", flag: "🇬🇷" },
  ];

  const menuItems = [
    { title: "Home", href: "#home" },
    { title: "Featured Stories", href: "#featured" },
    { title: "Browse by Culture", href: "#cultures" },
    { title: "Upload Your Tale", href: "/login" },
    { title: "For Readers", href: "#readers" },
    { title: "For Creators", href: "#creators" },
    { title: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string, event: React.MouseEvent) => {
    event.preventDefault();
    
    if (href === "/login") {
      // Navigate to login page (placeholder for now)
      alert("Redirecting to login page - authentication will be implemented soon!");
      return;
    }
    
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
    setIsMobileMenuOpen(false);
  };

  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    console.log(`Language changed to: ${languageCode}`);
  };

  const handleLoginClick = () => {
    alert("Redirecting to login page - authentication will be implemented soon!");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section: Logo and Navigation */}
          <div className="flex items-center space-x-6">
            {/* Enhanced Logo */}
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-slate-800 rounded-lg p-2 border border-slate-700 group-hover:border-pink-400/50 transition-colors">
                  <BookOpen className="w-6 h-6 text-pink-400" />
                  <Sparkles className="w-2 h-2 text-violet-400 absolute -top-0.5 -right-0.5 animate-pulse" />
                </div>
              </div>
              <div className="ml-3">
                <span className="text-xl font-bold bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                  Mythic Tales
                </span>
                <div className="text-xs text-slate-400 -mt-1">Stories that enchant</div>
              </div>
            </div>

            {/* Desktop Navigation Menu */}
            <div className="hidden lg:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-white hover:text-pink-400 data-[state=open]:text-pink-400 text-sm px-3 py-1">
                      Site Menu
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-slate-800 border-slate-700 z-50">
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
          </div>

          {/* Right Section: Language and Login Controls */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Selector */}
            <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-36 bg-slate-800 border-slate-700 text-white hover:bg-slate-700 transition-colors text-sm">
                <Languages className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700 z-50">
                {languages.map((language) => (
                  <SelectItem key={language.code} value={language.code} className="text-white hover:bg-slate-700">
                    <span className="flex items-center">
                      <span className="mr-2">{language.flag}</span>
                      {language.name}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Login Button */}
            <Button
              onClick={handleLoginClick}
              className="bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white px-4 py-2 text-sm"
            >
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Selector */}
            <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-14 bg-slate-800 border-slate-700 text-white">
                <Languages className="w-4 h-4" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700 z-50">
                {languages.map((language) => (
                  <SelectItem key={language.code} value={language.code} className="text-white hover:bg-slate-700">
                    <span className="flex items-center">
                      <span className="mr-2">{language.flag}</span>
                      {language.name}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Mobile Login Button */}
            <Button
              onClick={handleLoginClick}
              size="sm"
              className="bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white"
            >
              <User className="w-4 h-4" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-pink-400"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
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
