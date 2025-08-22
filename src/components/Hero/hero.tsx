import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Gem } from 'lucide-react';
import './hero.css';

import ring from '../../assets/ring.png'
import watch from '../../assets/watch.png'
import bracelet from '../../assets/bracelet.png'
import earrings from '../../assets/earrings.png'


const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-badge"
          >
            <Sparkles className="sparkle-icon" />
            <span>Premium Jewelry Collection</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-title"
          >
            Timeless Elegance
            <br />
            <span className="gradient-text">Handcrafted</span> for You
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-description"
          >
            Discover our exclusive collection of fine jewelry, where every piece tells a story 
            of craftsmanship and beauty. From classic designs to contemporary masterpieces.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-actions"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Shop Collection
              <ArrowRight className="arrow-icon" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              View Gallery
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-visual"
        >
          <div className="floating-gem">
            <Gem className="gem-icon" />
          </div>
          <div className="hero-image-placeholder">
            <div className="image-grid">
              <div className="grid-item">
                <div className="image-container">
                  <img 
                    src={ring}
                    alt="Diamond Ring" 
                    className="grid-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="image-fallback hidden">
                    <span className="fallback-text">Ring Image</span>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="image-container">
                  <img 
                    src={bracelet} 
                    alt="Bracelet" 
                    className="grid-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="image-fallback hidden">
                    <span className="fallback-text">Bracelet Image</span>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="image-container">
                  <img 
                    src={earrings}
                    alt="Earrings" 
                    className="grid-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="image-fallback hidden">
                    <span className="fallback-text">Earrings Image</span>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="image-container">
                  <img 
                    src={watch}
                    alt="Luxury Watch" 
                    className="grid-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="image-fallback hidden">
                    <span className="fallback-text">Watch Image</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="scroll-indicator"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="scroll-arrow"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
