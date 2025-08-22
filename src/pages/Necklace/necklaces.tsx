import { motion } from 'framer-motion';
import { Filter, Search, Heart, ShoppingCart, Star } from 'lucide-react';
import './necklaces.css';

// Mock data for necklaces - replace with Firebase data
const necklaces = [
  {
    id: '1',
    name: 'Pearl Drop Necklace',
    price: 299.99,
    material: 'Sterling Silver',
    image: '/placeholder-necklace-1.jpg',
    featured: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: '2',
    name: 'Diamond Pendant Necklace',
    price: 899.99,
    material: '18k White Gold',
    image: '/placeholder-necklace-2.jpg',
    featured: false,
    rating: 4.9,
    reviews: 203
  },
  {
    id: '3',
    name: 'Layered Gold Chain',
    price: 199.99,
    material: '14k Yellow Gold',
    image: '/placeholder-necklace-3.jpg',
    featured: false,
    rating: 4.7,
    reviews: 89
  },
  {
    id: '4',
    name: 'Sapphire Statement Necklace',
    price: 599.99,
    material: '18k White Gold',
    image: '/placeholder-necklace-4.jpg',
    featured: true,
    rating: 4.6,
    reviews: 134
  },
  {
    id: '5',
    name: 'Minimalist Bar Necklace',
    price: 149.99,
    material: 'Sterling Silver',
    image: '/placeholder-necklace-5.jpg',
    featured: false,
    rating: 4.5,
    reviews: 67
  },
  {
    id: '6',
    name: 'Vintage Choker',
    price: 399.99,
    material: '14k Rose Gold',
    image: '/placeholder-necklace-6.jpg',
    featured: false,
    rating: 4.4,
    reviews: 112
  }
];

const Necklaces = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="necklaces-page">

      <title>MTJ Necklaces</title>
      <meta name="description" content="MTJ Necklaces" />
      <link rel="canonical" href="http://localhost:5173/necklaces" />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-title"
          >
            Stunning Necklaces Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-subtitle"
          >
            Elevate your style with our elegant necklaces, from delicate pendants to bold statement pieces
          </motion.p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-content">
            <div className="search-bar">
              <Search className="search-icon" />
              <input type="text" placeholder="Search necklaces..." />
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
            {necklaces.map((necklace, index) => (
              <motion.div
                key={necklace.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="product-card"
                whileHover={{ y: -5 }}
              >
                <div className="product-image">
                  <div className="image-placeholder">
                    <span>Necklace Image</span>
                  </div>
                  
                  {necklace.featured && (
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
                  <h3 className="product-name">{necklace.name}</h3>
                  
                  <div className="product-meta">
                    <span className="material">{necklace.material}</span>
                    <div className="rating">
                      <Star size={16} className="star-icon" />
                      <span>{necklace.rating}</span>
                      <span className="reviews">({necklace.reviews})</span>
                    </div>
                  </div>

                  <div className="product-footer">
                    <div className="price">{formatPrice(necklace.price)}</div>
                    
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
              Load More Necklaces
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Necklaces;
