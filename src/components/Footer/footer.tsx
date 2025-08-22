import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="footer-section"
          >
            <h3>MTJ Jewelry</h3>
            <p>
              Crafting timeless elegance with the finest materials and exceptional craftsmanship. 
              Every piece tells a story of beauty and sophistication.
            </p>
            <div className="social-links">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="social-link"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="social-link"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="social-link"
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="footer-section"
          >
            <h3>Shop</h3>
            <ul className="footer-links">
              <li><Link to="/rings">Rings</Link></li>
              <li><Link to="/necklaces">Necklaces</Link></li>
              <li><Link to="/earrings">Earrings</Link></li>
              <li><Link to="/bracelets">Bracelets</Link></li>
              <li><Link to="/watches">Watches</Link></li>
              <li><Link to="/new-arrivals">New Arrivals</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="footer-section"
          >
            <h3>Customer Service</h3>
            <ul className="footer-links">
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/shipping">Shipping Info</Link></li>
              <li><Link to="/returns">Returns</Link></li>
              <li><Link to="/size-guide">Size Guide</Link></li>
              <li><Link to="/care-instructions">Care Instructions</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="footer-section"
          >
            <h3>Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin className="contact-icon" size={16} />
                <span>123 Jewelry Lane, Diamond City, DC 12345</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" size={16} />
                <span>info@mtjjewelry.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="newsletter-section"
        >
          <h3 className="newsletter-title">Stay Updated</h3>
          <p className="newsletter-subtitle">
            Subscribe to our newsletter for exclusive offers and new arrivals
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="footer-bottom"
        >
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} MTJ Jewelry. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/sitemap">Sitemap</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;