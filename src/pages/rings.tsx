import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Filter, Search } from 'lucide-react';

interface Ring {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  isNew?: boolean;
  isSale?: boolean;
}

const mockRings: Ring[] = [
  {
    id: 1,
    name: "Diamond Solitaire Ring",
    price: 2999,
    image: "/placeholder-ring-1.jpg",
    category: "Engagement",
    rating: 4.9,
    reviews: 127,
    inStock: true,
    isNew: true
  },
  {
    id: 2,
    name: "Rose Gold Band",
    price: 899,
    image: "/placeholder-ring-2.jpg",
    category: "Wedding",
    rating: 4.7,
    reviews: 89,
    inStock: true
  },
  {
    id: 3,
    name: "Sapphire Halo Ring",
    price: 1899,
    image: "/placeholder-ring-3.jpg",
    category: "Engagement",
    rating: 4.8,
    reviews: 156,
    inStock: true,
    isSale: true
  },
  {
    id: 4,
    name: "Vintage Art Deco Ring",
    price: 2499,
    image: "/placeholder-ring-4.jpg",
    category: "Vintage",
    rating: 4.6,
    reviews: 73,
    inStock: true
  },
  {
    id: 5,
    name: "Emerald Cut Diamond",
    price: 3999,
    image: "/placeholder-ring-5.jpg",
    category: "Engagement",
    rating: 4.9,
    reviews: 94,
    inStock: true
  },
  {
    id: 6,
    name: "Platinum Wedding Band",
    price: 1299,
    image: "/placeholder-ring-6.jpg",
    category: "Wedding",
    rating: 4.7,
    reviews: 112,
    inStock: true
  },
  {
    id: 7,
    name: "Morganite Ring",
    price: 799,
    image: "/placeholder-ring-7.jpg",
    category: "Fashion",
    rating: 4.5,
    reviews: 67,
    inStock: true,
    isSale: true
  },
  {
    id: 8,
    name: "Three Stone Ring",
    price: 3499,
    image: "/placeholder-ring-8.jpg",
    category: "Engagement",
    rating: 4.8,
    reviews: 143,
    inStock: true
  }
];

const Rings: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', 'engagement', 'wedding', 'fashion', 'vintage'];
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest' }
  ];

  const filteredRings = mockRings.filter(ring => {
    const matchesCategory = selectedCategory === 'all' || ring.category.toLowerCase() === selectedCategory;
    const matchesSearch = ring.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedRings = [...filteredRings].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white py-20 sm:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Exquisite Rings
          </h1>
          <p className="text-xl sm:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Discover our stunning collection of rings, from timeless engagement rings to elegant wedding bands
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-white border-b border-slate-200 sticky top-[70px] sm:top-[80px] z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search rings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-amber-400 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-slate-600" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {sortedRings.map((ring) => (
            <div key={ring.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-amber-400/30">
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                <img
                  src={ring.image}
                  alt={ring.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {ring.isNew && (
                    <span className="bg-cyan-400 text-white text-xs font-bold px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                  {ring.isSale && (
                    <span className="bg-pink-400 text-white text-xs font-bold px-2 py-1 rounded-full">
                      SALE
                    </span>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
                    <Heart className="w-5 h-5 text-slate-600" />
                  </button>
                  <button className="w-10 h-10 bg-amber-400 hover:bg-amber-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-6">
                <div className="mb-3">
                  <span className="text-xs font-medium text-amber-400 uppercase tracking-wider">
                    {ring.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors duration-200">
                  {ring.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(ring.rating)
                            ? 'text-amber-400 fill-current'
                            : 'text-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-slate-500">
                    ({ring.reviews})
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-slate-800">
                    ${ring.price.toLocaleString()}
                  </span>
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                    ring.inStock
                      ? 'bg-emerald-100 text-emerald-600'
                      : 'bg-red-100 text-red-600'
                  }`}>
                    {ring.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {sortedRings.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              No rings found
            </h3>
            <p className="text-slate-600 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-amber-400 hover:bg-amber-500 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Rings;
