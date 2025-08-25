import { ArrowRight, Sparkles, Gem } from 'lucide-react';
import { Link } from 'react-router-dom';


import ring from '../../assets/ring.png'
import watch from '../../assets/watch.png'
import bracelet from '../../assets/bracelet.png'
import earrings from '../../assets/earrings.png'




const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 sm:p-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-700/20 via-transparent to-pink-600/20"></div>
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Main Content */}
      <div className="relative z-10 grid grid-cols-1 gap-8 max-w-7xl mx-auto p-0 items-center text-center lg:grid-cols-2 lg:gap-16 lg:p-0 lg:text-left">
        {/* Hero Text */}
        <div className="order-2 lg:order-1 text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 text-sm sm:text-base font-medium text-slate-200">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
            Premium Quality Jewelry
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 text-slate-50">
            Discover Timeless
            <span className="block bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent pb-2">
              Elegance
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-slate-300 mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0">
            Crafted with the finest materials and exceptional craftsmanship. Every piece tells a story of beauty and sophistication.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 items-center sm:flex-row sm:justify-center lg:justify-start">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base border-none cursor-pointer transition-all duration-200 ease-in-out shadow-lg shadow-amber-400/30 min-h-[44px] min-w-[200px] justify-center hover:shadow-xl hover:shadow-amber-400/40 hover:-translate-y-0.5">
              Shop Collection
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
            </button>
            <button className="bg-white/10 border border-white/20 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base cursor-pointer transition-all duration-200 ease-in-out min-h-[44px] min-w-[200px] justify-center hover:bg-white/20 hover:border-white/30">
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative flex justify-center items-center order-1 lg:order-2">
          {/* Floating Gem */}
          <div className="absolute -top-2.5 -right-2.5 sm:-top-5 sm:-right-5 w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-400/30">
            <Gem className="w-5 h-5 sm:w-7 sm:h-7 text-slate-900" />
          </div>

          {/* Image Grid */}
          <div className="w-[280px] h-[280px] sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="grid grid-cols-2 grid-rows-2 gap-px h-full">
              {/* Ring */}
              <div className="bg-gradient-to-br from-amber-400/15 to-amber-500/15 transition-all duration-200 ease-in-out flex flex-col items-center justify-center gap-1 sm:gap-2 relative overflow-hidden hover:bg-gradient-to-br hover:from-amber-400/30 hover:to-amber-500/30 hover:scale-105">
                <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                  <Link to="/rings">
                    <img
                      src={ring}
                      alt="Diamond Ring"
                      className="w-full h-full object-cover transition-transform duration-200 ease-in-out z-10 relative hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  </Link>
                  <div className="hidden flex items-center justify-center w-full h-full bg-gradient-to-br from-amber-400/20 to-amber-500/20 text-amber-400 text-sm sm:text-lg font-semibold text-center z-10 relative p-2 sm:p-4">
                    <span className="text-amber-400 font-semibold drop-shadow-lg">Ring Image</span>
                  </div>
                </div>
              </div>

              {/* Necklace */}
              <div className="bg-gradient-to-br from-pink-500/15 to-pink-600/15 transition-all duration-200 ease-in-out flex flex-col items-center justify-center gap-1 sm:gap-2 relative overflow-hidden hover:bg-gradient-to-br hover:from-pink-500/30 hover:to-pink-500/30 hover:scale-105">
                <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                  <Link to="/bracelets">
                    <img
                      src={bracelet}
                      alt="Bracelet"
                      className="w-full h-full object-cover transition-transform duration-200 ease-in-out z-10 relative hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  </Link>
                  <div className="hidden flex items-center justify-center w-full h-full bg-gradient-to-br from-pink-500/20 to-pink-600/20 text-pink-400 text-sm sm:text-lg font-semibold text-center z-10 relative p-2 sm:p-4">
                    <span className="text-pink-400 font-semibold drop-shadow-lg">Bracelet Image</span>
                  </div>
                </div>
              </div>

              {/* Earrings */}
              <div className="bg-gradient-to-br from-purple-500/15 to-purple-600/15 transition-all duration-200 ease-in-out flex flex-col items-center justify-center gap-1 sm:gap-2 relative overflow-hidden hover:bg-gradient-to-br hover:from-purple-500/30 hover:to-purple-600/30 hover:scale-105">
                <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                  <Link to="/earrings">
                    <img
                      src={earrings}
                      alt="Sapphire Earrings"
                      className="w-full h-full object-cover transition-transform duration-200 ease-in-out z-10 relative hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  </Link>
                  <div className="hidden flex items-center justify-center w-full h-full bg-gradient-to-br from-purple-500/20 to-purple-600/20 text-purple-400 text-sm sm:text-lg font-semibold text-center z-10 relative p-2 sm:p-4">
                    <span className="text-purple-400 font-semibold drop-shadow-lg">Earrings Image</span>
                  </div>
                </div>
              </div>

              {/* Watch */}
              <div className="bg-gradient-to-br from-cyan-500/15 to-cyan-600/15 transition-all duration-200 ease-in-out flex flex-col items-center justify-center gap-1 sm:gap-2 relative overflow-hidden hover:bg-gradient-to-br hover:from-cyan-500/30 hover:to-cyan-600/30 hover:scale-105">
                <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                  <Link to="/watches">
                    <img
                      src={watch}
                      alt="Luxury Watch"
                      className="w-full h-full object-cover transition-transform duration-200 ease-in-out z-10 relative hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  </Link>
                  <div className="hidden flex items-center justify-center w-full h-full bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 text-cyan-400 text-sm sm:text-lg font-semibold text-center z-10 relative p-2 sm:p-4">
                    <span className="text-purple-400 font-semibold drop-shadow-lg">Watch Image</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white text-xl sm:text-2xl opacity-70">
        <div className="animate-bounce">
          ↓
        </div>
      </div>
    </section>
  );
};

export default Hero;
