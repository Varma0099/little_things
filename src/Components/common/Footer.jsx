import React from 'react';
import { Palette, MapPin, Phone, Mail, Heart, Sparkles, ArrowRight } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-pink-400/10 to-rose-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-xl"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg shadow-lg mr-3">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent">
                  Little Things
                </span>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Your creative haven where little things become extraordinary memories and artistic dreams come to life.
              </p>
              <div className="flex items-center text-pink-300">
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Premium Art Studio</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'Home', page: 'Home' },
                  { name: 'Activities', page: 'Activities' },
                  { name: 'About', page: 'About' },
                  { name: 'Contact', page: 'Contact' }
                ].map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => setCurrentPage(link.page)} 
                      className="group flex items-center text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Activities List */}
            <div>
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent">
                Our Crafts
              </h3>
              <ul className="space-y-3">
                {[
                  'Pottery Making',
                  'Ceramic Crafting', 
                  'Art & Painting',
                  'Open Kitchen'
                ].map((activity, index) => (
                  <li key={index} className="flex items-center text-white/70">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full mr-3"></div>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="group flex items-center text-white/70 hover:text-white transition-colors">
                  <div className="p-2 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-lg mr-3 group-hover:from-pink-500/30 group-hover:to-orange-500/30 transition-all">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>City Center, Hyderabad</span>
                </div>
                <div className="group flex items-center text-white/70 hover:text-white transition-colors">
                  <div className="p-2 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-lg mr-3 group-hover:from-pink-500/30 group-hover:to-orange-500/30 transition-all">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>+91 9494343299</span>
                </div>
                <div className="group flex items-center text-white/70 hover:text-white transition-colors">
                  <div className="p-2 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-lg mr-3 group-hover:from-pink-500/30 group-hover:to-orange-500/30 transition-all">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>littlethings@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          {/* Copyright Section */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center text-pink-300">
                <span className="text-white/60 mr-2">Made with</span>
                <Heart className="w-4 h-4 fill-current text-pink-400 animate-pulse" />
                <span className="text-white/60 ml-2">for creative souls</span>
              </div>
            </div>
            <p className="text-white/50 text-sm">
              Little Things. Nirvana Communities
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;