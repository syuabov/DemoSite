import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag, User } from 'lucide-react';

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
        <nav className={`fixed top-0 left-0 right-0 z-[1000] flex justify-between items-center px-4 py-3 sm:px-8 sm:py-4 bg-white/95 border-b border-amber-400/20 transition-all duration-200 ease-in-out shadow-sm hover:bg-white/98 hover:border-amber-400/40 h-[70px] sm:h-[80px] ${isScrolled ? 'bg-white/98 shadow-md' : ''}`}>
            <Link to='/' className="flex items-center no-underline" onClick={closeMobileMenu}>
                <img src={mainLogo} alt="MTJ Jewelry" className="w-[60px] sm:w-[80px] h-auto transition-transform duration-200 ease-in-out hover:scale-105" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-8 items-center">
                <Link to="/" onClick={closeMobileMenu} className="text-slate-800 no-underline font-semibold text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-3 rounded-full transition-all duration-200 ease-in-out relative bg-transparent border border-transparent hover:text-amber-600 hover:bg-amber-400/10 hover:border-amber-400/30 hover:-translate-y-0.5">Home</Link>
                <Link to="/rings" onClick={closeMobileMenu} className="text-slate-800 no-underline font-semibold text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-3 rounded-full transition-all duration-200 ease-in-out relative bg-transparent border border-transparent hover:text-amber-600 hover:bg-amber-400/10 hover:border-amber-400/30 hover:-translate-y-0.5">Rings</Link>
                <Link to="/necklaces" onClick={closeMobileMenu} className="text-slate-800 no-underline font-semibold text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-3 rounded-full transition-all duration-200 ease-in-out relative bg-transparent border border-transparent hover:text-amber-600 hover:bg-amber-400/10 hover:border-amber-400/30 hover:-translate-y-0.5">Necklaces</Link>
                <Link to="/earrings" onClick={closeMobileMenu} className="text-slate-800 no-underline font-semibold text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-3 rounded-full transition-all duration-200 ease-in-out relative bg-transparent border border-transparent hover:text-amber-600 hover:bg-amber-400/10 hover:border-amber-400/30 hover:-translate-y-0.5">Earrings</Link>
                <Link to="/bracelets" onClick={closeMobileMenu} className="text-slate-800 no-underline font-semibold text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-3 rounded-full transition-all duration-200 ease-in-out relative bg-transparent border border-transparent hover:text-amber-600 hover:bg-amber-400/10 hover:border-amber-400/30 hover:-translate-y-0.5">Bracelets</Link>
                <Link to="/watches" onClick={closeMobileMenu} className="text-slate-800 no-underline font-semibold text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-3 rounded-full transition-all duration-200 ease-in-out relative bg-transparent border border-transparent hover:text-amber-600 hover:bg-amber-400/10 hover:border-amber-400/30 hover:-translate-y-0.5">Watches</Link>
                <Link to="/contact" onClick={closeMobileMenu} className="text-slate-800 no-underline font-semibold text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-3 rounded-full transition-all duration-200 ease-in-out relative bg-transparent border border-transparent hover:text-amber-600 hover:bg-amber-400/10 hover:border-amber-400/30 hover:-translate-y-0.5">Contact</Link>
            </div>

            {/* Desktop Icons */}
            <div className="hidden lg:flex items-center gap-4">
                <Link to="/account" onClick={closeMobileMenu} className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white/80 rounded-full border border-amber-400/20 transition-all duration-200 ease-in-out shadow-sm hover:bg-amber-400/10 hover:border-amber-400/50 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/20 text-slate-800">
                    <User size={24} />
                </Link>
                <Link to="/cart" onClick={closeMobileMenu} className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white/80 rounded-full border border-amber-400/20 transition-all duration-200 ease-in-out shadow-sm hover:bg-amber-400/10 hover:border-amber-400/50 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/20 text-slate-800">
                    <ShoppingBag size={24} />
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
                className="lg:hidden flex items-center justify-center bg-transparent border-none text-slate-800 cursor-pointer p-2 rounded-lg transition-all duration-200 ease-in-out min-h-[44px] min-w-[44px] hover:bg-amber-400/10 hover:text-amber-600"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Navigation Overlay */}
            <div className={`fixed top-0 left-0 right-0 bottom-0 bg-black/80 z-[999] opacity-0 invisible transition-all duration-300 ease-in-out backdrop-blur-md ${isMobileMenuOpen ? 'opacity-100 visible' : ''}`}>
                <div className={`absolute top-0 right-0 w-full max-w-[350px] sm:max-w-[400px] h-full bg-white p-4 flex flex-col transform translate-x-full transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : ''}`}>
                    <div className="flex justify-between items-center pb-4 border-b border-slate-200 mb-4">
                        <Link to='/' className="flex items-center" onClick={closeMobileMenu}>
                            <img src={mainLogo} alt="MTJ Jewelry" className="w-[60px] sm:w-[80px] h-auto" />
                        </Link>
                        <button 
                            className="bg-transparent border-none text-slate-500 cursor-pointer p-2 rounded-lg transition-all duration-200 ease-in-out min-h-[44px] min-w-[44px] hover:bg-slate-100 hover:text-slate-800"
                            onClick={closeMobileMenu}
                            aria-label="Close mobile menu"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    
                    <div className="flex flex-col gap-2 mb-8">
                        <Link to="/" onClick={closeMobileMenu} className="text-slate-800 no-underline font-semibold text-lg px-4 py-4 rounded-xl transition-all duration-200 ease-in-out flex items-center min-h-[44px] hover:bg-amber-400/10 hover:text-amber-600">Home</Link>
                        <Link to="/rings" onClick={closeMobileMenu} className="text-slate-800 no-underline font-semibold text-lg px-4 py-4 rounded-xl transition-all duration-200 ease-in-out flex items-center min-h-[44px] hover:bg-amber-400/10 hover:text-amber-600">Rings</Link>
                        <Link to="/necklaces" onClick={closeMobileMenu} className="text-slate-800 no-underline font-semibold text-lg px-4 py-4 rounded-xl transition-all duration-200 ease-in-out flex items-center min-h-[44px] hover:bg-amber-400/10 hover:text-amber-600">Necklaces</Link>
                        <Link to="/earrings" onClick={closeMobileMenu} className="text-slate-800 no-underline font-semibold text-lg px-4 py-4 rounded-xl transition-all duration-200 ease-in-out flex items-center min-h-[44px] hover:bg-amber-400/10 hover:text-amber-600">Earrings</Link>
                        <Link to="/bracelets" onClick={closeMobileMenu} className="text-slate-800 no-underline font-semibold text-lg px-4 py-4 rounded-xl transition-all duration-200 ease-in-out flex items-center min-h-[44px] hover:bg-amber-400/10 hover:text-amber-600">Bracelets</Link>
                        <Link to="/watches" onClick={closeMobileMenu} className="text-slate-800 no-underline font-semibold text-lg px-4 py-4 rounded-xl transition-all duration-200 ease-in-out flex items-center min-h-[44px] hover:bg-amber-400/10 hover:text-amber-600">Watches</Link>
                        <Link to="/contact" onClick={closeMobileMenu} className="text-slate-800 no-underline font-semibold text-lg px-4 py-4 rounded-xl transition-all duration-200 ease-in-out flex items-center min-h-[44px] hover:bg-amber-400/10 hover:text-amber-600">Contact</Link>
                    </div>

                    <div className="flex flex-col gap-4 mt-auto pt-4 border-t border-slate-200">
                        <Link to="/account" className="flex items-center gap-3 bg-gradient-to-br from-slate-800 to-slate-600 text-white no-underline px-6 py-4 rounded-2xl font-semibold text-base transition-all duration-200 ease-in-out min-h-[44px] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-800/30" onClick={closeMobileMenu}>
                            <User size={20} />
                            <span>My Account</span>
                        </Link>
                        <Link to="/cart" className="flex items-center gap-3 bg-gradient-to-br from-slate-800 to-slate-600 text-white no-underline px-6 py-4 rounded-2xl font-semibold text-base transition-all duration-200 ease-in-out min-h-[44px] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-800/30" onClick={closeMobileMenu}>
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