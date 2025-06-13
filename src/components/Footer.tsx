
import { Mail, Twitter, Instagram, Facebook } from "lucide-react";
import { LogoWithBackground } from "./LogoWithBackground";

export const Footer = () => {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <LogoWithBackground className="h-10 w-auto mr-3" />
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Bringing traditional stories and legends from every culture to life through beautiful webtoon-style art. 
              Perfect for modern families who want to connect with their heritage.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">For Readers</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Browse Stories</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Reading Lists</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Family Accounts</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">For Creators</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Start Creating</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Art Guidelines</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Creator Support</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Revenue Info</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
          <p>&copy; 2024 Mythic Tales. All rights reserved. Bringing cultures together through storytelling.</p>
        </div>
      </div>
    </footer>
  );
};
