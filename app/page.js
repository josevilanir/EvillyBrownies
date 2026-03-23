import Hero from '../components/Hero/Hero';
import Menu from '../components/Menu/Menu';
import About from '../components/About/About';
import Instagram from '../components/Instagram/Instagram';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Menu />
      <About />
      <Instagram />
      <Footer />
    </main>
  );
}
