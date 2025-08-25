import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'rings',
    name: 'Rings',
    description: 'Timeless engagement rings, wedding bands, and fashion rings',
    count: 45,
    priceRange: '$299 - $9,999',
    image: '/placeholder-rings.jpg',
    gradient: 'from-amber-400/20 to-amber-500/20',
    textColor: 'text-amber-400',
    borderColor: 'border-amber-400/30'
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Elegant chains, pendants, and statement necklaces',
    count: 38,
    priceRange: '$199 - $7,999',
    image: '/placeholder-necklaces.jpg',
    gradient: 'from-pink-400/20 to-pink-500/20',
    textColor: 'text-pink-400',
    borderColor: 'border-pink-400/30'
  },
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Sophisticated studs, hoops, and drop earrings',
    count: 52,
    priceRange: '$149 - $5,999',
    image: '/placeholder-earrings.jpg',
    gradient: 'from-purple-400/20 to-purple-500/20',
    textColor: 'text-purple-400',
    borderColor: 'border-purple-400/30'
  },
  {
    id: 'bracelets',
    name: 'Bracelets',
    description: 'Charming bangles, tennis bracelets, and charm bracelets',
    count: 31,
    priceRange: '$199 - $6,999',
    image: '/placeholder-bracelets.jpg',
    gradient: 'from-emerald-400/20 to-emerald-500/20',
    textColor: 'text-emerald-400',
    borderColor: 'border-emerald-400/30'
  },
  {
    id: 'watches',
    name: 'Watches',
    description: 'Luxury timepieces for every occasion and style',
    count: 24,
    priceRange: '$599 - $15,999',
    image: '/placeholder-watches.jpg',
    gradient: 'from-cyan-400/20 to-cyan-500/20',
    textColor: 'text-cyan-400',
    borderColor: 'border-cyan-400/30'
  }
];

const CategoryShowcase = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6 text-sm sm:text-base font-medium text-slate-200"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
            Explore Categories
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
          >
            Shop by Category
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto"
          >
            Discover our curated collections, each designed to complement your unique style
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={`/${category.id}`} className="block">
                <div className={`bg-gradient-to-br ${category.gradient} border ${category.borderColor} rounded-2xl sm:rounded-3xl p-4 sm:p-6 h-full transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-black/20 group-hover:border-opacity-50`}>
                  {/* Category Image */}
                  <div className="relative h-32 sm:h-40 mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    
                    {/* Fallback */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center">
                      <span className={`text-white font-semibold text-lg sm:text-xl ${category.textColor}`}>
                        {category.name}
                      </span>
                    </div>
                  </div>

                  {/* Category Content */}
                  <div className="text-center">
                    <h3 className={`text-xl sm:text-2xl font-bold ${category.textColor} mb-2 sm:mb-3`}>
                      {category.name}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Category Meta */}
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      <div className="text-xs sm:text-sm text-slate-400 bg-white/10 px-3 py-1.5 rounded-full">
                        {category.count} items
                      </div>
                      <div className="text-xs sm:text-sm text-slate-400 bg-white/10 px-3 py-1.5 rounded-full">
                        {category.priceRange}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-200 ease-in-out group-hover:bg-white/20 group-hover:scale-105">
                      Explore
                      <ArrowRight size={16} className="transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Categories Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <Link to="/categories" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 ease-in-out shadow-lg shadow-amber-400/30 min-h-[44px] hover:shadow-xl hover:shadow-amber-400/40 hover:-translate-y-0.5">
            View All Categories
            <ArrowRight size={20} className="transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
