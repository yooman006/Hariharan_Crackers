import React from 'react';
import { 
  Flame, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Shield,
  Award,
  Sparkles,
  ExternalLink,
  ArrowUp,
  Sun,
  CheckCircle
} from 'lucide-react';
import { assets } from '../assets/assets';

const Footer = ({ scrollToProducts, scrollToFooter }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-orange-950 via-amber-900 to-emerald-950 border-t border-amber-500/25 overflow-hidden">
      {/* Warm Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-orange-900/15"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Premium Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Enhanced Logo and Brand */}
              <div className="flex items-start space-x-4 group">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/25 to-orange-500/25 rounded-2xl blur-lg opacity-60 group-hover:opacity-85 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-br from-amber-100 to-orange-100 border border-amber-400/30 rounded-2xl p-3 shadow-xl">
                    <img 
                      src={assets.logo} 
                      alt="HariHaran Crackers Logo" 
                      className="h-12 w-12 sm:h-14 sm:w-14 object-contain filter brightness-110 contrast-125"
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
                      HARIHARAN
                    </h3>
                    <Flame className="w-5 h-5 text-orange-400 animate-pulse" />
                  </div>
                  <p className="text-amber-300/90 font-bold tracking-wider uppercase text-sm">
                    Crackers Palace
                  </p>
                </div>
              </div>
              
              {/* Rich Description */}
              <div className="space-y-4">
                <p className="text-amber-200/90 text-base sm:text-lg leading-relaxed max-w-md">
                  Illuminating celebrations across Tamil Nadu with premium, eco-safe fireworks. 
                  Your trusted partner for unforgettable festival moments and joyous occasions.
                </p>
                
                {/* Premium Certifications */}
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: Shield, text: 'Safety Certified', color: 'emerald' },
                    { icon: Award, text: 'Premium Quality', color: 'amber' },
                    { icon: CheckCircle, text: 'Eco-Approved', color: 'green' }
                  ].map((cert, index) => (
                    <div key={index} className={`flex items-center space-x-2 bg-${cert.color}-900/40 border border-${cert.color}-500/30 rounded-full px-4 py-2`}>
                      <cert.icon className={`w-4 h-4 text-${cert.color}-400`} />
                      <span className="text-amber-200 text-xs font-semibold">{cert.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="space-y-6">
              <h4 className="text-amber-100 font-bold text-lg flex items-center space-x-2">
                <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full"></div>
                <span>Quick Links</span>
              </h4>
              
              <nav className="space-y-3">
                {[
                  { name: 'Home', action: scrollToTop },
                  { name: 'Products', action: scrollToProducts },
                  { name: 'Contact', action: scrollToFooter }
                ].map((link, index) => (
                  <button
                    key={link.name}
                    onClick={link.action}
                    className="group flex items-center space-x-2 text-amber-300/80 hover:text-orange-300 transition-all duration-300 py-1"
                  >
                    <div className="w-2 h-2 bg-amber-600 group-hover:bg-orange-400 rounded-full transition-colors duration-300"></div>
                    <span className="text-sm font-semibold">{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h4 className="text-amber-100 font-bold text-lg flex items-center space-x-2">
                <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full"></div>
                <span>Contact Us</span>
              </h4>
              
              <div className="space-y-4">
                {/* Phone Numbers */}
                <div className="space-y-2">
                  {['+91 9894446693', '+91 883885639'].map((phone, index) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="group flex items-center space-x-3 bg-amber-900/30 hover:bg-amber-800/40 border border-amber-700/40 hover:border-amber-500/40 rounded-xl p-3 transition-all duration-300"
                    >
                      <div className="bg-gradient-to-br from-emerald-600/25 to-green-600/25 p-2 rounded-lg border border-emerald-500/25">
                        <Phone className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <span className="text-amber-200 group-hover:text-amber-100 text-sm font-semibold">{phone}</span>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Email */}
                <a
                  href="mailto:sample@gmail.com"
                  className="group flex items-center space-x-3 bg-amber-900/30 hover:bg-amber-800/40 border border-amber-700/40 hover:border-amber-500/40 rounded-xl p-3 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-orange-600/25 to-red-600/25 p-2 rounded-lg border border-orange-500/25">
                    <Mail className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="text-amber-200 group-hover:text-amber-100 text-sm font-semibold">sample@gmail.com</span>
                </a>

                {/* Address */}
                <div className="flex items-start space-x-3 bg-amber-900/30 border border-amber-700/40 rounded-xl p-3">
                  <div className="bg-gradient-to-br from-amber-600/25 to-yellow-600/25 p-2 rounded-lg border border-amber-500/25 flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-amber-200 text-sm leading-relaxed">
                      181//9/19, Pernaikyanpatti, Vembakkottai, 
                      Sivakasi, Virudhunagar, Tamil Nadu - 626123
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Bottom Section */}
        <div className="border-t border-gradient-to-r from-transparent via-amber-700/50 to-transparent py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <p className="text-amber-400/80 text-sm">
                &copy; 2025 HariHaran Crackers Palace. Lighting up celebrations since inception.
              </p>
            </div>

            {/* Elegant Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 bg-gradient-to-r from-amber-500/15 to-orange-500/15 hover:from-amber-500/25 hover:to-orange-500/25 border border-amber-500/25 hover:border-amber-400/35 text-amber-400 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
              <span className="text-sm font-semibold">Back to Top</span>
            </button>
          </div>
        </div>
      </div>

      {/* Warm Background Glow */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-orange-950/80 to-transparent opacity-60"></div>
    </footer>
  );
};

export default Footer;