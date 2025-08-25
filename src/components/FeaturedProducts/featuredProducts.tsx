import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star, ArrowRight } from 'lucide-react';
import type { JewelryItem } from '../../types';

// Mock featured products data
const featuredProducts: JewelryItem[] = [
  {
    id: '1',
    name: 'Diamond Eternity Ring',
    description: 'Exquisite 18k white gold ring featuring brilliant-cut diamonds in a timeless eternity setting.',
    price: 2499.99,
    category: 'rings',
    material: '18k White Gold',
    imageUrls: ['/placeholder-ring-1.jpg'],
    inStock: true,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    name: 'Pearl Drop Necklace',
    description: 'Elegant freshwater pearl pendant suspended from a delicate sterling silver chain.',
    price: 299.99,
    category: 'necklaces',
    material: 'Sterling Silver',
    imageUrls: ['/placeholder-necklace-1.jpg'],
    inStock: true,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    name: 'Sapphire Stud Earrings',
    description: 'Classic round sapphire studs set in 14k yellow gold with a sophisticated design.',
    price: 899.99,
    category: 'earrings',
    material: '14k Yellow Gold',
    imageUrls: ['/placeholder-earrings-1.jpg'],
    inStock: true,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

const FeaturedProducts = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-slate-50 to-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
            Featured Collection
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto">
            Discover our most popular pieces, crafted with exceptional quality and timeless design
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ease-in-out flex flex-col"
            >
              {/* Product Image */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <img
                  src={product.imageUrls[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-200 ease-in-out hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                
                {/* Featured Badge */}
                {product.featured && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-amber-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg shadow-amber-400/30">
                    <Star size={12} />
                    Featured
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-800 mb-2 leading-tight">
                  {product.name}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed flex-1">
                  {product.description}
                </p>

                {/* Product Meta */}
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-600">
                    {formatPrice(product.price)}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full uppercase tracking-wider font-semibold">
                    {product.category}
                  </div>
                </div>

                {/* Product Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-4 py-3 sm:px-6 sm:py-4 rounded-full font-semibold text-sm sm:text-base border-none cursor-pointer transition-all duration-200 ease-in-out shadow-md shadow-amber-400/30 min-h-[44px] hover:shadow-lg hover:shadow-amber-400/40 hover:-translate-y-0.5">
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                  <button className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full border border-slate-200 transition-all duration-200 ease-in-out min-h-[44px] min-w-[44px] hover:scale-105">
                    <Heart size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-600 text-white px-8 py-4 rounded-full font-semibold text-lg cursor-pointer transition-all duration-200 ease-in-out shadow-lg shadow-slate-800/30 min-h-[44px] hover:shadow-xl hover:shadow-slate-800/40 hover:-translate-y-0.5"
          >
            View All Products
            <ArrowRight size={20} className="transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
