import { motion } from 'framer-motion';
import { ArrowRight, Diamond, Heart, Watch, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import './categoryShowcase.css';

const categories = [
  {
    id: 'rings',
    name: 'Rings',
    description: 'Elegant rings for every occasion',
    icon: Diamond,
    color: '#fbbf24',
    gradient: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    image: '/placeholder-rings.jpg'
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Stunning necklaces to complement your style',
    icon: Heart,
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
    image: '/placeholder-necklaces.jpg'
  },
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Beautiful earrings for every mood',
    icon: Crown,
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    image: '/placeholder-earrings.jpg'
  },
  {
    id: 'watches',
    name: 'Watches',
    description: 'Luxury timepieces for the modern connoisseur',
    icon: Watch,
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    image: '/placeholder-watches.jpg'
  }
];

const CategoryShowcase = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="category-showcase">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Shop by Category</h2>
          <p>Explore our curated collections by jewelry type</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="categories-grid"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="category-card"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/category/${category.id}`} className="category-link">
                  <div className="category-image">
                    <div className="image-placeholder" style={{ background: category.gradient }}>
                      <IconComponent size={48} color="white" />
                    </div>
                    <div className="category-overlay">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="overlay-content"
                      >
                        <ArrowRight size={24} />
                      </motion.div>
                    </div>
                  </div>

                  <div className="category-content">
                    <div className="category-icon" style={{ color: category.color }}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className="category-name">{category.name}</h3>
                    <p className="category-description">{category.description}</p>
                    
                    <motion.div
                      className="explore-btn"
                      style={{ '--category-color': category.color } as React.CSSProperties}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      Explore Collection
                      <ArrowRight size={16} />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="browse-all-section"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="browse-all-btn"
          >
            Browse All Categories
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
