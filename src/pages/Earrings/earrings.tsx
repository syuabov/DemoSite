import { motion } from 'framer-motion';
import { Filter, Search, Heart, ShoppingCart, Star } from 'lucide-react';
import './earrings.css';

// Mock data for earrings - replace with Firebase data
const earrings = [
  {
    id: '1',
    name: 'Sapphire Stud Earrings',
    price: 899.99,
    material: '14k Yellow Gold',
    image: '/placeholder-earrings-1.jpg',
    featured: true,
    rating: 4.9,
    reviews: 203
  },
  {
    id: '2',
    name: 'Pearl Drop Earrings',
    price: 299.99,
    material: 'Sterling Silver',
    image: '/placeholder-earrings-2.jpg',
    featured: false,
    rating: 4.8,
    reviews: 156
  },
  {
    id: '3',
    name: 'Diamond Hoop Earrings',
    price: 1299.99,
    material: '18k White Gold',
    image: '/placeholder-earrings-3.jpg',
    featured: false,
    rating: 4.7,
    reviews: 89
  },
  {
    id: '4',
    name: 'Emerald Chandelier Earrings',
    price: 799.99,
    material: '14k Yellow Gold',
    image: '/placeholder-earrings-4.jpg',
    featured: true,
    rating: 4.6,
    reviews: 134
  },
  {
    id: '5',
    name: 'Minimalist Studs',
    price: 199.99,
    material: 'Sterling Silver',
    image: '/placeholder-earrings-5.jpg',
    featured: false,
    rating: 4.5,
    reviews: 67
  },
  {
    id: '6',
    name: 'Vintage Style Earrings',
    price: 449.99,
    material: '14k Rose Gold',
    image: '/placeholder-earrings-6.jpg',
    featured: false,
    rating: 4.4,
    reviews: 112
  }
];

const Earrings = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="earrings-page">

      <title>MTJ Earrings</title>
      <meta name="description" content="MTJ Earrings" />
      <link rel="canonical" href="http://localhost:5173/earrings" />
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-title"
          >
            Beautiful Earrings Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-subtitle"
          >
            Adorn your ears with our stunning collection of earrings, from classic studs to elegant drops
          </motion.p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-content">
            <div className="search-bar">
              <Search className="search-icon" />
              <input type="text" placeholder="Search earrings..." />
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
            {earrings.map((earring, index) => (
              <motion.div
                key={earring.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="product-card"
                whileHover={{ y: -5 }}
              >
                <div className="product-image">
                  <div className="image-placeholder">
                    <span>Earrings Image</span>
                  </div>
                  
                  {earring.featured && (
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
                  <h3 className="product-name">{earring.name}</h3>
                  
                  <div className="product-meta">
                    <span className="material">{earring.material}</span>
                    <div className="rating">
                      <Star size={16} className="star-icon" />
                      <span>{earring.rating}</span>
                      <span className="reviews">({earring.reviews})</span>
                    </div>
                  </div>

                  <div className="product-footer">
                    <div className="price">{formatPrice(earring.price)}</div>
                    
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
              Load More Earrings
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Earrings;
