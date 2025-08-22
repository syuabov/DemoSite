import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home/home";
import Rings from "./pages/Rings/rings";
import Necklaces from "./pages/Necklace/necklaces";
import Earrings from "./pages/Earrings/earrings";
import Bracelets from "./pages/Bracelet/bracelets";
import Watches from "./pages/Watches/watches";
import Contact from "./pages/Contact/contact";
import Cart from "./pages/Cart/cart";
import Account from "./pages/Account/account";

function App(){
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
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
  );
}

export default App;