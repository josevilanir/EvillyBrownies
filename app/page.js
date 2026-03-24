import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Menu from '../components/Menu/Menu';
import FloatingBrownies from '../components/FloatingBrownies/FloatingBrownies';
import Stats from '../components/Stats/Stats';
import About from '../components/About/About';
import Instagram from '../components/Instagram/Instagram';
import Comparison from '../components/Comparison/Comparison';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FloatingBrownies />
        <Menu />
        <Stats />
        <About />
        <Comparison />
        <Instagram />
        <Footer />
      </main>
    </>
  );
}
