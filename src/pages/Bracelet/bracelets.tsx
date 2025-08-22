import { motion } from 'framer-motion';
import { Filter, Search, Heart, ShoppingCart, Star } from 'lucide-react';
import './bracelets.css';

// Mock data for bracelets - replace with Firebase data
const bracelets = [
  {
    id: '1',
    name: 'Diamond Tennis Bracelet',
    price: 1899.99,
    material: '18k White Gold',
    image: '/placeholder-bracelet-1.jpg',
    featured: true,
    rating: 4.9,
    reviews: 178
  },
  {
    id: '2',
    name: 'Pearl Charm Bracelet',
    price: 399.99,
    material: 'Sterling Silver',
    image: '/placeholder-bracelet-2.jpg',
    featured: false,
    rating: 4.8,
    reviews: 145
  },
  {
    id: '3',
    name: 'Gold Link Bracelet',
    price: 699.99,
    material: '14k Yellow Gold',
    image: '/placeholder-bracelet-3.jpg',
    featured: false,
    rating: 4.7,
    reviews: 92
  },
  {
    id: '4',
    name: 'Sapphire Bangle',
    price: 899.99,
    material: '18k White Gold',
    image: '/placeholder-bracelet-4.jpg',
    featured: true,
    rating: 4.6,
    reviews: 156
  },
  {
    id: '5',
    name: 'Minimalist Chain Bracelet',
    price: 249.99,
    material: 'Sterling Silver',
    image: '/placeholder-bracelet-5.jpg',
    featured: false,
    rating: 4.5,
    reviews: 78
  },
  {
    id: '6',
    name: 'Vintage Style Bracelet',
    price: 549.99,
    material: '14k Rose Gold',
    image: '/placeholder-bracelet-6.jpg',
    featured: false,
    rating: 4.4,
    reviews: 134
  }
];

const Bracelets = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="bracelets-page">

      <title>MTJ Bracelets</title>
      <meta name="description" content="MTJ Bracelets" />
      <link rel="canonical" href="http://localhost:5173/bracelets" />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-title"
          >
            Elegant Bracelets Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-subtitle"
          >
            Adorn your wrist with our stunning collection of bracelets, from delicate chains to bold statement pieces
          </motion.p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-content">
            <div className="search-bar">
              <Search className="search-icon" />
              <input type="text" placeholder="Search bracelets..." />
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
            {bracelets.map((bracelet, index) => (
              <motion.div
                key={bracelet.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="product-card"
                whileHover={{ y: -5 }}
              >
                <div className="product-image">
                  <div className="image-placeholder">
                    <span>Bracelet Image</span>
                  </div>
                  
                  {bracelet.featured && (
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
                  <h3 className="product-name">{bracelet.name}</h3>
                  
                  <div className="product-meta">
                    <span className="material">{bracelet.material}</span>
                    <div className="rating">
                      <Star size={16} className="star-icon" />
                      <span>{bracelet.rating}</span>
                      <span className="reviews">({bracelet.reviews})</span>
                    </div>
                  </div>

                  <div className="product-footer">
                    <div className="price">{formatPrice(bracelet.price)}</div>
                    
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
              Load More Bracelets
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Bracelets;
