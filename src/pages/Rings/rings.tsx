import { motion } from 'framer-motion';
import { Filter, Search, Heart, ShoppingCart, Star } from 'lucide-react';
import './rings.css';

// Mock data for rings - replace with Firebase data
const rings = [
  {
    id: '1',
    name: 'Diamond Eternity Ring',
    price: 2499.99,
    material: '18k White Gold',
    image: '/placeholder-ring-1.jpg',
    featured: true,
    rating: 4.9,
    reviews: 127
  },
  {
    id: '2',
    name: 'Sapphire Engagement Ring',
    price: 1899.99,
    material: '14k Yellow Gold',
    image: '/placeholder-ring-2.jpg',
    featured: false,
    rating: 4.8,
    reviews: 89
  },
  {
    id: '3',
    name: 'Pearl Ring Set',
    price: 599.99,
    material: 'Sterling Silver',
    image: '/placeholder-ring-3.jpg',
    featured: false,
    rating: 4.7,
    reviews: 156
  },
  {
    id: '4',
    name: 'Emerald Cut Diamond Ring',
    price: 3299.99,
    material: '18k White Gold',
    image: '/placeholder-ring-4.jpg',
    featured: true,
    rating: 5.0,
    reviews: 203
  },
  {
    id: '5',
    name: 'Vintage Style Ring',
    price: 1299.99,
    material: '14k Rose Gold',
    image: '/placeholder-ring-5.jpg',
    featured: false,
    rating: 4.6,
    reviews: 78
  },
  {
    id: '6',
    name: 'Modern Minimalist Ring',
    price: 899.99,
    material: 'Platinum',
    image: '/placeholder-ring-6.jpg',
    featured: false,
    rating: 4.5,
    reviews: 92
  }
];

const Rings = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="rings-page">

      <title>MTJ Rings</title>
      <meta name="description" content="MTJ Rings" />
      <link rel="canonical" href="http://localhost:5173/rings" />
      \
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-title"
          >
            Exquisite Rings Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-subtitle"
          >
            Discover our stunning collection of rings, from classic engagement rings to modern statement pieces
          </motion.p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-content">
            <div className="search-bar">
              <Search className="search-icon" />
              <input type="text" placeholder="Search rings..." />
            </div>
            
            <div className="filter-options">
              <button className="filter-btn">
                <Filter className="filter-icon" />
                Filters
              </button>
              
              <select className="sort-select">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="products-grid"
          >
            {rings.map((ring, index) => (
              <motion.div
                key={ring.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="product-card"
                whileHover={{ y: -5 }}
              >
                <div className="product-image">
                  <div className="image-placeholder">
                    <span>Ring Image</span>
                  </div>
                  
                  {ring.featured && (
                    <div className="featured-badge">
                      <Star size={16} />
                      <span>Featured</span>
                    </div>
                  )}
                  
                  <div className="product-overlay">
                    <button className="overlay-btn" title="Add to Wishlist">
                      <Heart size={20} />
                    </button>
                    <button className="overlay-btn quickview-btn" title="Quick View">
                      <Search size={20} />
                    </button>
                  </div>
                </div>

                <div className="product-info">
                  <h3 className="product-name">{ring.name}</h3>
                  
                  <div className="product-meta">
                    <span className="material">{ring.material}</span>
                    <div className="rating">
                      <Star size={16} className="star-icon" />
                      <span>{ring.rating}</span>
                      <span className="reviews">({ring.reviews})</span>
                    </div>
                  </div>

                  <div className="product-footer">
                    <div className="price">{formatPrice(ring.price)}</div>
                    
                    <button className="add-to-cart-btn">
                      <ShoppingCart size={18} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="load-more-section"
          >
            <button className="load-more-btn">
              Load More Rings
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Rings;
