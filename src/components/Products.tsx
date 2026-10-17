import { motion } from "motion/react";

const brands = [
  { brand: "Samsung", logo: "/samsung.jpg" },
  { brand: "Vivo", logo: "/images.png" },
  { brand: "Oppo", logo: "/oppo-logo-png_seeklogo-253623.png" },
  { brand: "Xiaomi", logo: "/Xiaomi-logo.png" },
  { brand: "Apple", logo: "/images (1).png" },
];

export default function Products() {
  return (
    <section id="products" className="py-24 px-6 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black mb-16 text-center">Explore Smartphones</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {brands.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-white border-2 border-gray-300 shadow-lg shadow-gray-200/50 hover:shadow-xl transition-shadow rounded-3xl"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-50 border border-gray-200 px-3 py-1 rounded-full">Brand</span>
              <h3 className="text-2xl font-bold text-black">{item.brand}</h3>
              <div className="h-20 w-20 flex items-center justify-center p-2">
                <img src={item.logo} alt={`${item.brand} Logo`} className="max-h-full max-w-full object-contain" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
