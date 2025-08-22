import { motion } from 'framer-motion';
import { Filter, Search, Heart, ShoppingCart, Star } from 'lucide-react';
import './watches.css';

// Mock data for watches - replace with Firebase data
const watches = [
  {
    id: '1',
    name: 'Luxury Chronograph Watch',
    price: 2499.99,
    material: 'Stainless Steel',
    image: '/placeholder-watch-1.jpg',
    featured: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: '2',
    name: 'Classic Dress Watch',
    price: 899.99,
    material: '18k Gold',
    image: '/placeholder-watch-2.jpg',
    featured: false,
    rating: 4.8,
    reviews: 203
  },
  {
    id: '3',
    name: 'Sport Diver Watch',
    price: 1299.99,
    material: 'Titanium',
    image: '/placeholder-watch-3.jpg',
    featured: false,
    rating: 4.7,
    reviews: 89
  },
  {
    id: '4',
    name: 'Minimalist Watch',
    price: 599.99,
    material: 'Stainless Steel',
    image: '/placeholder-watch-4.jpg',
    featured: true,
    rating: 4.6,
    reviews: 134
  },
  {
    id: '5',
    name: 'Vintage Style Watch',
    price: 799.99,
    material: 'Leather & Steel',
    image: '/placeholder-watch-5.jpg',
    featured: false,
    rating: 4.5,
    reviews: 67
  },
  {
    id: '6',
    name: 'Smart Luxury Watch',
    price: 1899.99,
    material: 'Ceramic & Steel',
    image: '/placeholder-watch-6.jpg',
    featured: false,
    rating: 4.4,
    reviews: 112
  }
];

const Watches = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="watches-page">
      
      <title>MTJ Watches</title>
      <meta name="description" content="MTJ Watches" />
      <link rel="canonical" href="http://localhost:5173/watches" />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-title"
          >
            Luxury Timepieces Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-subtitle"
          >
            Discover our exquisite collection of luxury watches, from classic dress watches to modern chronographs
          </motion.p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-content">
            <div className="search-bar">
              <Search className="search-icon" />
              <input type="text" placeholder="Search watches..." />
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
            {watches.map((watch, index) => (
              <motion.div
                key={watch.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="product-card"
                whileHover={{ y: -5 }}
              >
                <div className="product-image">
                  <div className="image-placeholder">
                    <span>Watch Image</span>
                  </div>
                  
                  {watch.featured && (
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
                  <h3 className="product-name">{watch.name}</h3>
                  
                  <div className="product-meta">
                    <span className="material">{watch.material}</span>
                    <div className="rating">
                      <Star size={16} className="star-icon" />
                      <span>{watch.rating}</span>
                      <span className="reviews">({watch.reviews})</span>
                    </div>
                  </div>

                  <div className="product-footer">
                    <div className="price">{formatPrice(watch.price)}</div>
                    
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
              Load More Watches
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Watches;
