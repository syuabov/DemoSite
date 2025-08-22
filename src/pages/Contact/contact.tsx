import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import './contact.css';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with Firebase or email service
    console.log('Form submitted');
  };

  return (
    <div className="contact-page">

      <title>MTJ Contact</title>
      <meta name="description" content="MTJ Contact Page" />
      <link rel="canonical" href="http://localhost:5173/contact" />
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-title"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-subtitle"
          >
            Have questions about our jewelry? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="contact-form-section"
            >
              <div className="form-header">
                <MessageCircle className="form-icon" />
                <h2>Send us a Message</h2>
                <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select id="subject" name="subject" required>
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="product">Product Information</option>
                    <option value="order">Order Status</option>
                    <option value="return">Returns & Exchanges</option>
                    <option value="custom">Custom Jewelry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="contact-info-section"
            >
              <div className="info-header">
                <h2>Contact Information</h2>
                <p>We're here to help and answer any questions you might have.</p>
              </div>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <Mail size={24} />
                  </div>
                  <div className="method-content">
                    <h3>Email Us</h3>
                    <p>info@mtjjewelry.com</p>
                    <p>support@mtjjewelry.com</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <Phone size={24} />
                  </div>
                  <div className="method-content">
                    <h3>Call Us</h3>
                    <p>+1 (555) 123-4567</p>
                    <p>Mon-Fri: 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="method-content">
                    <h3>Visit Us</h3>
                    <p>123 Jewelry Street</p>
                    <p>New York, NY 10001</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <Clock size={24} />
                  </div>
                  <div className="method-content">
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 9AM - 6PM</p>
                    <p>Saturday: 10AM - 4PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="additional-info">
                <h3>Why Choose MTJ Jewelry?</h3>
                <ul>
                  <li>Expert craftsmanship and quality materials</li>
                  <li>Lifetime warranty on all pieces</li>
                  <li>Free shipping on orders over $500</li>
                  <li>30-day return policy</li>
                  <li>Personalized customer service</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="faq-content"
          >
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>What is your return policy?</h3>
                <p>We offer a 30-day return policy for all items in their original condition. Custom pieces are non-returnable.</p>
              </div>
              <div className="faq-item">
                <h3>Do you offer custom jewelry?</h3>
                <p>Yes! We specialize in custom jewelry design. Contact us to discuss your vision and get a quote.</p>
              </div>
              <div className="faq-item">
                <h3>How long does shipping take?</h3>
                <p>Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available for an additional fee.</p>
              </div>
              <div className="faq-item">
                <h3>Do you provide certificates?</h3>
                <p>All diamonds and precious stones come with certified documentation from reputable gemological laboratories.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;