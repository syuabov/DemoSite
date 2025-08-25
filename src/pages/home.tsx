import Hero from '../components/Hero/hero';
import FeaturedProducts from '../components/FeaturedProducts/featuredProducts';
import CategoryShowcase from '../components/CategoryShowcase/categoryShowcase';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProducts />
      <CategoryShowcase />
    </div>
  );
};

export default Home;