import React from 'react';
import { 
  Star, 
  Shield, 
  Award, 
  Phone, 
  Mail, 
  Tag, 
  Flame, 
  Sparkles,
  Gift,
  Users,
  Clock,
  CheckCircle,
  Sun
} from 'lucide-react';

const HeroSection = ({ scrollToProducts }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Warm Festive Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950 via-amber-900 to-emerald-950"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-red-900/40 via-transparent to-green-900/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/30 via-orange-950/50 to-orange-950"></div>
        
        {/* Festive pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Festival Ready */}
          <div className="text-left lg:pr-8 space-y-8">
            {/* Festival Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-lg border border-amber-400/30 rounded-full px-6 py-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <Sun className="w-5 h-5 text-amber-400 animate-spin-slow" />
                <span className="text-amber-200 text-sm font-bold tracking-wide">FESTIVAL FIREWORKS</span>
              </div>
            </div>

            {/* Powerful Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className="text-amber-100 tracking-tight">Celebrate With</span>
                <br />
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 animate-gradient-x">
                    BRILLIANCE
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 opacity-25 blur-lg animate-pulse"></div>
                </span>
              </h1>
            </div>

            {/* Rich Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl text-amber-200/90 max-w-2xl leading-relaxed font-medium">
              Experience the joy of festivals with our premium, 
              <span className="text-emerald-400 font-bold"> eco-safe</span> collection of spectacular fireworks that light up hearts and skies.
            </p>

            {/* Vibrant Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProducts}
                className="group relative bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/30 border border-orange-400/40"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Flame className="w-5 h-5" />
                  <span>SHOP CRACKERS</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-300/20 to-red-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Trust Badges - Festival Theme */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {[
                { icon: Shield, text: '100% Safe', color: 'text-emerald-400', bg: 'bg-emerald-800/20 border-emerald-500/30' },
                { icon: Award, text: 'Certified', color: 'text-amber-400', bg: 'bg-amber-800/20 border-amber-500/30' },
                { icon: CheckCircle, text: 'Eco-Green', color: 'text-green-400', bg: 'bg-green-800/20 border-green-500/30' }
              ].map((item, index) => (
                <div key={index} className={`flex items-center space-x-2 ${item.bg} backdrop-blur border rounded-xl px-3 py-2`}>
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-amber-100 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Festival Cards */}
          <div className="space-y-6">
            {/* Festival Sale Card */}
            <div className="group relative bg-gradient-to-br from-red-600/15 via-orange-600/15 to-amber-600/15 backdrop-blur-2xl border border-red-400/25 rounded-3xl p-6 lg:p-8 hover:border-red-400/45 transition-all duration-500 overflow-hidden">
              {/* Festive Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Festival Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-black px-4 py-2 rounded-full animate-bounce shadow-lg flex items-center space-x-1">
                <Flame className="w-3 h-3" />
                <span>FESTIVAL SALE</span>
              </div>
              
              <div className="relative flex items-start space-x-4">
                <div className="bg-gradient-to-br from-red-500/25 to-orange-500/25 p-4 rounded-2xl border border-red-400/25">
                  <Tag className="w-7 h-7 text-red-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-amber-100 mb-3">
                    <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                      81% OFF Festival Special!
                    </span>
                  </h3>
                  <p className="text-amber-200/90 text-sm leading-relaxed mb-4">
                    Biggest Diwali discount ever! Premium crackers, sparklers, 
                    and aerial fireworks at unbeatable prices.
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2 text-red-400 font-bold text-sm">
                      <Clock className="w-4 h-4" />
                      <span>Festival Rush - Limited Stock</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Eco-Safe Card */}
            <div className="group relative bg-gradient-to-br from-emerald-600/15 via-green-600/15 to-teal-600/15 backdrop-blur-2xl border border-emerald-400/25 rounded-3xl p-6 lg:p-8 hover:border-emerald-400/45 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative flex items-start space-x-4">
                <div className="bg-gradient-to-br from-emerald-500/25 to-green-500/25 p-4 rounded-2xl border border-emerald-400/25">
                  <Sparkles className="w-7 h-7 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-amber-100 mb-3">
                    <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                      Green & Clean
                    </span>
                  </h3>
                  <p className="text-amber-200/90 text-sm leading-relaxed mb-4">
                    Celebrate guilt-free with our eco-certified crackers. 
                    Zero harmful chemicals, maximum joy for you and nature.
                  </p>
                  <div className="flex items-center space-x-2 text-emerald-400 font-semibold text-sm">
                    <CheckCircle className="w-4 h-4" />
                    <span>Government Approved Green Formula</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="group relative bg-gradient-to-br from-amber-600/15 via-orange-600/15 to-yellow-600/15 backdrop-blur-2xl border border-amber-400/25 rounded-3xl p-6 lg:p-8 hover:border-amber-400/45 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative text-center">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Users className="w-6 h-6 text-amber-400" />
                  <h3 className="text-xl font-black text-amber-100">
                    <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                      Bulk Festival Orders
                    </span>
                  </h3>
                </div>
                
                <p className="text-amber-200/90 text-sm mb-6 leading-relaxed">
                  Special rates for celebrations, weddings & community events
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a 
                    href="tel:+919894446693"
                    className="group flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500/25 to-orange-500/25 hover:from-amber-500/35 hover:to-orange-500/35 text-amber-300 px-4 py-3 rounded-xl text-sm transition-all duration-300 border border-amber-500/25 hover:border-amber-400/35"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-semibold">+91 9894446693</span>
                  </a>
                  <a 
                    href="mailto:sample@gmail.com"
                    className="group flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500/25 to-green-500/25 hover:from-emerald-500/35 hover:to-green-500/35 text-emerald-300 px-4 py-3 rounded-xl text-sm transition-all duration-300 border border-emerald-500/25 hover:border-emerald-400/35"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="font-semibold">Festival Quote</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Festive Decorative Elements */}
      <div className="absolute top-24 left-12 w-28 h-28 bg-gradient-to-br from-amber-500/15 to-orange-500/15 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-32 right-20 w-36 h-36 bg-gradient-to-br from-red-500/15 to-rose-500/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
      <div className="absolute top-2/3 left-1/4 w-20 h-20 bg-gradient-to-br from-emerald-500/15 to-green-500/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s', animationDuration: '6s' }}></div>
      
      {/* Festival geometric shapes */}
      <div className="absolute top-1/3 right-1/4 w-8 h-8 border-2 border-amber-400/40 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-orange-400/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-3/4 right-1/3 w-10 h-10 border-2 border-red-400/30 rounded-full animate-pulse"></div>
      
      {/* Festival sparkle effects */}
      <div className="absolute top-1/5 left-2/3 w-3 h-3 bg-amber-400 rounded-full animate-ping opacity-60"></div>
      <div className="absolute bottom-1/5 left-1/5 w-2 h-2 bg-orange-500 rounded-full animate-ping opacity-50" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};

export default HeroSection;