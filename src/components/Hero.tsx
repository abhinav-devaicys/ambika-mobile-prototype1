import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-[url('/HERO%20SECTION%20IMG.jpeg')] bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="font-['Cormorant_Garamond',serif] text-5xl md:text-7xl font-bold tracking-wider uppercase mb-4">
            AMBIKA MOBILE
          </h2>
          <h1 className="font-['Cormorant_Garamond',serif] text-4xl md:text-6xl font-light italic mb-8">
            Your Next Upgrade. Your Better Experience.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light">
            Discover the latest smartphones, premium accessories, and technology that fits your lifestyle—all at AMBIKA MOBILE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#products" className="bg-white text-black px-8 py-3 rounded-none font-medium hover:bg-gray-200 transition-colors uppercase tracking-widest text-sm">
              Explore Smartphones
            </a>
            <a href="#contact" className="border border-white/50 text-white px-8 py-3 rounded-none font-medium hover:bg-white/10 transition-colors uppercase tracking-widest text-sm">
              Visit Our Store
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-xs uppercase tracking-widest font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Scroll to discover
      </motion.div>
    </section>
  );
}
