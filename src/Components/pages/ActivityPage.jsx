import React, { useState, useEffect } from 'react';
import Carousel from '../common/Carousel';
import { Clock, Users, Star, Sparkles, ArrowRight, Palette, ChefHat, Paintbrush, Heart } from 'lucide-react';

// Floating animation component
const FloatingElement = ({ children, className, delay = 0 }) => {
  return (
    <div 
      className={`${className} animate-bounce`}
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: '3s',
        animationIterationCount: 'infinite'
      }}
    >
      {children}
    </div>
  );
};

const ActivitiesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const activities = [
    {
      title: "Pottery Making",
      icon: Palette,
      gradient: "from-rose-500 to-pink-600",
      bgGradient: "from-rose-50 to-pink-100",
      hoverGradient: "group-hover:from-rose-100 group-hover:to-pink-200",
      images: [
        {
          src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
          alt: "Hands shaping clay on pottery wheel"
        },
        {
          src: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop",
          alt: "Beautiful pottery pieces"
        },
        {
          src: "https://images.unsplash.com/photo-1565193566173-7a0691c2b2a8?w=600&h=400&fit=crop",
          alt: "Pottery workshop session"
        }
      ],
      description: "Immerse yourself in the ancient art of pottery making, where earth meets creativity. Feel the therapeutic touch of clay as you shape your imagination into beautiful, functional pieces that tell your unique story.",
      highlights: ["Wheel throwing techniques", "Hand-building methods", "Glazing & firing process", "Take home your creations"]
    },
    {
      title: "Ceramic Crafting",
      icon: Sparkles,
      gradient: "from-purple-500 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-100",
      hoverGradient: "group-hover:from-purple-100 group-hover:to-indigo-200",
      images: [
        {
          src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
          alt: "Ceramic painting workshop"
        },
        {
          src: "https://images.unsplash.com/photo-1610650645004-1ce3e0a7f1f4?w=600&h=400&fit=crop",
          alt: "Colorful ceramic pieces"
        },
        {
          src: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&h=400&fit=crop",
          alt: "Ceramic glazing process"
        }
      ],
      description: "Explore the vibrant world of ceramic crafting where colors dance with clay. Transform simple ceramic pieces into stunning masterpieces through painting, glazing, and decorative techniques.",
      highlights: ["Ceramic painting", "Decorative glazing", "Pattern making", "Color theory application"]
    },
    {
      title: "Art & Painting",
      icon: Paintbrush,
      gradient: "from-orange-500 to-yellow-600",
      bgGradient: "from-orange-50 to-yellow-100",
      hoverGradient: "group-hover:from-orange-100 group-hover:to-yellow-200",
      images: [
        {
          src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop",
          alt: "Artist painting on canvas"
        },
        {
          src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop",
          alt: "Colorful art supplies"
        },
        {
          src: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=400&fit=crop",
          alt: "Art workshop in progress"
        }
      ],
      description: "Unleash your inner artist in our inspiring art studio. From watercolors to acrylics, discover different mediums and techniques while creating artwork that reflects your personal vision and style.",
      highlights: ["Multiple art mediums", "Technique workshops", "Personal guidance", "Portfolio development"]
    },
    {
      title: "Open Kitchen Experience",
      icon: ChefHat,
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-100",
      hoverGradient: "group-hover:from-emerald-100 group-hover:to-teal-200",
      images: [
        {
          src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
          alt: "People cooking together in open kitchen"
        },
        {
          src: "https://images.unsplash.com/photo-1556909114-65e30c5d6b2c?w=600&h=400&fit=crop",
          alt: "Fresh ingredients and cooking utensils"
        },
        {
          src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
          alt: "Delicious homemade snacks"
        }
      ],
      description: "Combine creativity with culinary delights in our open kitchen. Cook, create, and connect while preparing delicious snacks and meals that complement your artistic journey perfectly.",
      highlights: ["Fresh ingredients", "Cooking workshops", "Recipe sharing", "Culinary creativity"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-300/20 to-rose-400/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-yellow-300/15 to-orange-400/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-300/10 to-pink-400/10 rounded-full blur-xl"></div>
        <FloatingElement className="absolute top-32 right-1/3" delay={0}>
          <Palette className="w-8 h-8 text-pink-400/60" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-1/3 left-20" delay={1}>
          <Sparkles className="w-6 h-6 text-yellow-500/60" />
        </FloatingElement>
        <FloatingElement className="absolute top-1/2 right-16" delay={2}>
          <Star className="w-5 h-5 text-purple-400/60" />
        </FloatingElement>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-pink-500/20 to-orange-500/20 text-pink-700 border border-pink-200 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Creative Experiences
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
              Our Creative Activities
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover a world of creativity through our carefully curated activities. Each experience is designed to inspire, teach, and create lasting memories.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {activities.map((activity, index) => (
              <div 
                key={activity.title} 
                className={`group flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
              >
                {/* Image Section */}
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-pink-300/20 to-orange-300/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/50 group-hover:shadow-3xl transition-all duration-500">
                      <Carousel images={activity.images} autoSlide={false} />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 bg-gradient-to-r ${activity.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <activity.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      {activity.title}
                    </h2>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {activity.description}
                  </p>

                  {/* Highlights */}
                  <div className={`p-6 bg-gradient-to-br ${activity.bgGradient} ${activity.hoverGradient} rounded-2xl border border-white/50 transition-all duration-300`}>
                    <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                      <Heart className="w-4 h-4 mr-2 text-pink-500" />
                      What You'll Experience
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activity.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center text-gray-700">
                          <div className={`w-2 h-2 bg-gradient-to-r ${activity.gradient} rounded-full mr-3`}></div>
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Info Cards */}
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                      <Clock className="h-4 w-4 text-pink-500" />
                      <span className="text-gray-700 font-medium">2-3 hours</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                      <Users className="h-4 w-4 text-purple-500" />
                      <span className="text-gray-700 font-medium">All skill levels</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                      <Star className="h-4 w-4 text-orange-500" />
                      <span className="text-gray-700 font-medium">Expert guidance</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className={`group/btn relative px-8 py-4 bg-gradient-to-r ${activity.gradient} text-white rounded-full font-semibold text-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                    <span className="relative z-10 flex items-center">
                      Book This Activity
                      <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                    <div className={`absolute inset-0 bg-gradient-to-r ${activity.gradient.replace('500', '600').replace('600', '700')} opacity-0 group-hover/btn:opacity-100 transition-opacity`}></div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative py-20 mt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100 via-pink-50 to-orange-100"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50">
            <Sparkles className="w-16 h-16 text-pink-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Ready to Start Creating?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join our community of artists and discover the joy of hands-on creativity. 
              Every activity is a new adventure waiting to unfold.
            </p>
            <button className="group px-12 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              <span className="flex items-center">
                Book Your Creative Session
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivitiesPage;