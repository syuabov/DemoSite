import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white">MTJ Jewelry</h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Crafting timeless elegance with the finest materials and exceptional craftsmanship.
              Every piece tells a story of beauty and sophistication.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-200 ease-in-out hover:scale-105"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-200 ease-in-out hover:scale-105"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-200 ease-in-out hover:scale-105"
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
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white">Shop</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/rings" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 ease-in-out text-sm sm:text-base">Rings</Link></li>
              <li><Link to="/necklaces" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 ease-in-out text-sm sm:text-base">Necklaces</Link></li>
              <li><Link to="/earrings" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 ease-in-out text-sm sm:text-base">Earrings</Link></li>
              <li><Link to="/bracelets" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 ease-in-out text-sm sm:text-base">Bracelets</Link></li>
              <li><Link to="/watches" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 ease-in-out text-sm sm:text-base">Watches</Link></li>
              <li><Link to="/new-arrivals" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 ease-in-out text-sm sm:text-base">New Arrivals</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white">Customer Service</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/contact" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 ease-in-out text-sm sm:text-base">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 ease-in-out text-sm sm:text-base">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 ease-in-out text-sm sm:text-base">Returns</Link></li>
              <li><Link to="/size-guide" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 ease-in-out text-sm sm:text-base">Size Guide</Link></li>
              <li><Link to="/care-instructions" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 ease-in-out text-sm sm:text-base">Care Instructions</Link></li>
              <li><Link to="/faq" className="text-slate-300 hover:text-amber-400 transition-colors duration-200 ease-in-out text-sm sm:text-base">FAQ</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white">Contact Info</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm sm:text-base">123 Jewelry Lane, Diamond City, DC 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                <span className="text-slate-300 text-sm sm:text-base">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                <span className="text-slate-300 text-sm sm:text-base">info@mtjjewelry.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/5 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-2 sm:mb-4">Stay Updated</h3>
          <p className="text-slate-300 text-center text-sm sm:text-base mb-6 sm:mb-8">
            Subscribe to our newsletter for exclusive offers and new arrivals
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 sm:px-6 sm:py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200 ease-in-out min-h-[44px]"
              required
            />
            <button type="submit" className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-semibold rounded-full hover:shadow-lg hover:shadow-amber-400/30 transition-all duration-200 ease-in-out min-h-[44px] hover:-translate-y-0.5">
              Subscribe
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 sm:pt-12 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8">
            <p className="text-slate-400 text-sm sm:text-base text-center sm:text-left">
              © {currentYear} MTJ Jewelry. All rights reserved.
            </p>
            <div className="flex gap-6 sm:gap-8">
              <Link to="/privacy" className="text-slate-400 hover:text-amber-400 transition-colors duration-200 ease-in-out text-sm sm:text-base">Privacy Policy</Link>
              <Link to="/terms" className="text-slate-400 hover:text-amber-400 transition-colors duration-200 ease-in-out text-sm sm:text-base">Terms of Service</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;