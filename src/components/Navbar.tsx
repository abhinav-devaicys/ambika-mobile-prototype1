import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "Products", "Repair Services", "About Us", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-4 left-4 right-4 z-50 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl transition-all duration-300 ${scrolled ? "py-3 px-6 shadow-2xl" : "py-4 px-8"}`}
    >
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter text-white">AMBIKA MOBILE</div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="hover:text-white transition-colors">
              {link}
            </a>
          ))}
          <a href="#products" className="bg-white text-black px-5 py-2 rounded-full font-medium text-xs uppercase tracking-wider hover:bg-gray-200 transition-colors">
            Explore
          </a>
        </div>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </motion.nav>
  );
}
