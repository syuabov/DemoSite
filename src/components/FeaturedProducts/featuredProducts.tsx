import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import type { JewelryItem } from '../../types';
import './featuredProducts.css';

// Mock data for demonstration - replace with Firebase data
const mockProducts: JewelryItem[] = [
  {
    id: '1',
    name: 'Diamond Eternity Ring',
    description: 'Classic 18k white gold ring with brilliant cut diamonds',
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
    description: 'Elegant freshwater pearl pendant on sterling silver chain',
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
    description: 'Natural blue sapphire studs in 14k yellow gold setting',
    price: 899.99,
    category: 'earrings',
    material: '14k Yellow Gold',
    imageUrls: ['/placeholder-earrings-1.jpg'],
    inStock: true,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '4',
    name: 'Tennis Bracelet',
    description: 'Diamond tennis bracelet with 5 carats total weight',
    price: 3999.99,
    category: 'bracelets',
    material: '18k White Gold',
    imageUrls: ['/placeholder-bracelet-1.jpg'],
    inStock: true,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

const FeaturedProducts = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <section className="featured-products">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Featured Collection</h2>
          <p>Discover our most popular and exclusive jewelry pieces</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="products-grid"
        >
          {mockProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="product-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="product-image">
                <div className="image-placeholder">
                  <div className="placeholder-content">
                    <span>{product.category}</span>
                  </div>
                </div>
                
                <div className="product-overlay">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="overlay-btn"
                    title="Add to Wishlist"
                  >
                    <Heart size={20} />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="overlay-btn quickview-btn"
                    title="Quick View"
                  >
                    <Eye size={20} />
                  </motion.button>
                </div>

                {product.featured && (
                  <div className="featured-badge">
                    <Star size={16} />
                    <span>Featured</span>
                  </div>
                )}
              </div>

              <div className="product-info">
                <div className="product-category">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </div>
                
                <h3 className="product-name">{product.name}</h3>
                
                <p className="product-description">{product.description}</p>
                
                <div className="product-meta">
                  <span className="material">{product.material}</span>
                  <span className={`stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>

                <div className="product-footer">
                  <div className="price">{formatPrice(product.price)}</div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="add-to-cart-btn"
                    disabled={!product.inStock}
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="view-all-section"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="view-all-btn"
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
