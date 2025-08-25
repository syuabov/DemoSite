import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import Home from './pages/home';
import Rings from './pages/rings';
import Necklaces from './pages/necklaces';
import Earrings from './pages/earrings';
import Bracelets from './pages/bracelets';
import Watches from './pages/watches';
import Contact from './pages/contact';
import Cart from './pages/cart';
import Account from './pages/account';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 mt-[70px] sm:mt-[80px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rings" element={<Rings />} />
            <Route path="/necklaces" element={<Necklaces />} />
            <Route path="/earrings" element={<Earrings />} />
            <Route path="/bracelets" element={<Bracelets />} />
            <Route path="/watches" element={<Watches />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;