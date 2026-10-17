import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white mb-6">
          Ambika Mobile.
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
          Your Mobile, Our Priority. Quality Sales & Expert Repairs in Gwalior.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#products" className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
            Explore Products
          </a>
          <a href="#repair-services" className="border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
            Book a Repair
          </a>
        </div>
      </motion.div>
    </section>
  );
}
