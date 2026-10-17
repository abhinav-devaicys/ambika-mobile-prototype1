import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import RepairServices from "./components/RepairServices";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Products />
        <RepairServices />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
