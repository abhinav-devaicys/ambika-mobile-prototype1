import { motion } from "motion/react";

const products = [
  { name: "Smartphone X", category: "Smartphones", price: "$999" },
  { name: "Pro Audio Buds", category: "Audio Devices", price: "$199" },
  { name: "Smart Watch S", category: "Smartwatches", price: "$349" },
  { name: "Fast Charger 30W", category: "Accessories", price: "$29" },
];

export default function Products() {
  return (
    <section id="products" className="py-24 px-6 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black mb-16 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-gray-50 p-6 rounded-3xl border border-gray-100 hover:border-gray-200 transition-colors"
          >
            <div className="bg-gray-200 h-64 rounded-2xl mb-6"></div>
            <h3 className="text-lg font-semibold text-black mb-1">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{product.category}</p>
            <p className="text-xl font-bold text-black mb-6">{product.price}</p>
            <button className="w-full border border-black text-black py-2 rounded-full font-medium hover:bg-black hover:text-white transition-colors">
              View Details
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
