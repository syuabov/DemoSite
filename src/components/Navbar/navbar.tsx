import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag, User } from 'lucide-react';
import "./navbar.css";

import mainLogo from '../../assets/mainLogo.png'

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`nav-container ${isScrolled ? 'scrolled' : ''}`}>
            <Link to='/' className="nav-logo-container" onClick={closeMobileMenu}>
                <img src={mainLogo} alt="MTJ Jewelry" className="nav-logo" />
            </Link>

            {/* Desktop Navigation */}
            <div className="nav-links nav-desktop">
                <Link to="/" onClick={closeMobileMenu}>Home</Link>
                <Link to="/rings" onClick={closeMobileMenu}>Rings</Link>
                <Link to="/necklaces" onClick={closeMobileMenu}>Necklaces</Link>
                <Link to="/earrings" onClick={closeMobileMenu}>Earrings</Link>
                <Link to="/bracelets" onClick={closeMobileMenu}>Bracelets</Link>
                <Link to="/watches" onClick={closeMobileMenu}>Watches</Link>
                <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
            </div>

            {/* Desktop Icons */}
            <div className="nav-icons nav-desktop">
                <Link to="/account" onClick={closeMobileMenu}>
                    <User size={24} />
                </Link>
                <Link to="/cart" onClick={closeMobileMenu}>
                    <ShoppingBag size={24} />
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
                className="mobile-menu-btn nav-mobile"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Navigation Overlay */}
            <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-content">
                    <div className="mobile-menu-header">
                        <Link to='/' className="mobile-logo" onClick={closeMobileMenu}>
                            <img src={mainLogo} alt="MTJ Jewelry" className="nav-logo" />
                        </Link>
                        <button 
                            className="close-mobile-menu"
                            onClick={closeMobileMenu}
                            aria-label="Close mobile menu"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    
                    <div className="mobile-nav-links">
                        <Link to="/" onClick={closeMobileMenu}>Home</Link>
                        <Link to="/rings" onClick={closeMobileMenu}>Rings</Link>
                        <Link to="/necklaces" onClick={closeMobileMenu}>Necklaces</Link>
                        <Link to="/earrings" onClick={closeMobileMenu}>Earrings</Link>
                        <Link to="/bracelets" onClick={closeMobileMenu}>Bracelets</Link>
                        <Link to="/watches" onClick={closeMobileMenu}>Watches</Link>
                        <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
                    </div>

                    <div className="mobile-nav-actions">
                        <Link to="/account" className="mobile-action-btn" onClick={closeMobileMenu}>
                            <User size={20} />
                            <span>My Account</span>
                        </Link>
                        <Link to="/cart" className="mobile-action-btn" onClick={closeMobileMenu}>
                            <ShoppingBag size={20} />
                            <span>Shopping Cart</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;