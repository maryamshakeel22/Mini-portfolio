import About from './components/about';
import Contact from "./components/contact";
import Footer from './components/footer';
import Hero from "./components/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
