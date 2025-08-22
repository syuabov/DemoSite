import Hero from '../../components/Hero/hero';
import FeaturedProducts from '../../components/FeaturedProducts/featuredProducts';
import CategoryShowcase from '../../components/CategoryShowcase/categoryShowcase';
import './home.css';

function Home() {
  return (
    <div className="home-page">
      <title>Fast Jewelry | Custom Designs</title>
      <meta name="description" content="Custom jewelry made in NYC. Rings, bracelets, and more." />
      <link rel="canonical" href="http://localhost:5173/" />

      {/* Open Graph / Twitter */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Fast Jewelry | Custom Designs" />
      <meta property="og:description" content="Custom jewelry made in NYC. Rings, bracelets, and more." />

      
      <Hero />
      <FeaturedProducts />
      <CategoryShowcase />
    </div>
  );
}

export default Home;