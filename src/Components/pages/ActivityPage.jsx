import React, { useState, useEffect } from 'react';
import Carousel from '../common/Carousel';
import { Clock, Users, Star, Sparkles, ArrowRight, Palette, ChefHat, Paintbrush, Heart, Music, Camera, Trophy, Network, Briefcase } from 'lucide-react';

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
      highlights: ["Wheel throwing techniques", "Hand-building methods", "Glazing & firing process", "Take home your creations"],
      businessFeatures: ["Pottery exhibitions", "Custom pottery commissions", "Corporate team building", "Private pottery parties"]
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
      highlights: ["Ceramic painting", "Decorative glazing", "Pattern making", "Color theory application"],
      businessFeatures: ["Art gallery showcases", "Ceramic art sales", "Private ceramic parties", "Wedding favor creation"]
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
      highlights: ["Multiple art mediums", "Technique workshops", "Personal guidance", "Portfolio development"],
      businessFeatures: ["Art exhibitions", "Commission artwork", "Corporate art workshops", "Live painting events"]
    },
    {
      title: "Creative Food Center",
      icon: ChefHat,
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-100",
      hoverGradient: "group-hover:from-emerald-100 group-hover:to-teal-200",
      images: [
        {
          src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop",
          alt: "Colorful creative snacks and treats"
        },
        {
          src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop",
          alt: "Live food customization station"
        },
        {
          src: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&h=400&fit=crop",
          alt: "Unique snacks loved by children"
        }
      ],
      description: "Fuel your creativity at our unique food center featuring specially crafted snacks and treats that delight both children and adults. Watch as our chefs customize your food live, creating personalized culinary experiences that match your creative energy.",
      highlights: ["Live food customization", "Kid-friendly unique snacks", "Instagram-worthy treats", "Creative food presentations"],
      businessFeatures: ["Custom party catering", "Themed food events", "Corporate snack services", "Birthday party packages"]
    },
    {
      title: "Bharatanatyam Dance",
      icon: Music,
      gradient: "from-amber-500 to-red-600",
      bgGradient: "from-amber-50 to-red-100",
      hoverGradient: "group-hover:from-amber-100 group-hover:to-red-200",
      images: [
        {
          src: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop",
          alt: "Bharatanatyam dancer in traditional costume"
        },
        {
          src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
          alt: "Classical dance practice session"
        },
        {
          src: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=600&h=400&fit=crop",
          alt: "Traditional dance performance"
        }
      ],
      description: "Discover the divine art of Bharatanatyam, where every movement tells a story and every gesture carries deep meaning. Learn this classical Indian dance form that combines grace, spirituality, and artistic expression while connecting with our talent network for performance opportunities.",
      highlights: ["Classical technique training", "Mudras & expressions", "Performance opportunities", "Cultural storytelling"],
      businessFeatures: ["Cultural event performances", "Wedding dance shows", "Corporate cultural programs", "Talent showcase events"]
    },
    {
      title: "Acting Studio & Talent Hub",
      icon: Camera,
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-100",
      hoverGradient: "group-hover:from-blue-100 group-hover:to-purple-200",
      images: [
        {
          src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
          alt: "Acting workshop in progress"
        },
        {
          src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop",
          alt: "Actors performing on stage"
        },
        {
          src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=400&fit=crop",
          alt: "Film production behind the scenes"
        }
      ],
      description: "Transform into the performer you've always dreamed of being in our comprehensive acting studio. More than just learning - we connect you with industry professionals, showcase your talent, and create opportunities for private events, commercials, and performances.",
      highlights: ["Method acting techniques", "Voice & diction training", "Camera acting skills", "Stage presence development"],
      businessFeatures: ["Talent representation", "Event performer booking", "Commercial casting", "Private show productions"]
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
        <FloatingElement className="absolute top-1/4 left-1/3" delay={1.5}>
          <Music className="w-6 h-6 text-amber-500/60" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-1/4 right-1/4" delay={0.5}>
          <Camera className="w-5 h-5 text-blue-400/60" />
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
                Creative Experiences & Talent Hub
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
              Our Creative Activities
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover a world of creativity through our carefully curated activities. Each experience is designed to inspire, teach, create lasting memories, and connect you with a vibrant community of artists and performers.
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

                  {/* Business Features Section */}
                  <div className={`p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl border border-white/50 transition-all duration-300`}>
                    <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                      <Briefcase className="w-4 h-4 mr-2 text-indigo-500" />
                      Business & Networking Opportunities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activity.businessFeatures?.map((feature, i) => (
                        <div key={i} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full mr-3"></div>
                          <span className="text-sm">{feature}</span>
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
              Join our community of artists, dancers, actors, and creators. Discover the joy of hands-on creativity, 
              showcase your talents, and connect with opportunities for private events and performances. 
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