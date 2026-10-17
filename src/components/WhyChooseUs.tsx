import { motion } from "motion/react";

const features = ["Expert Assistance", "Quality-Focused Service", "Transparent Communication", "Customer-First Support"];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-gray-50 text-center">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black mb-16">Why Choose AMBIKA MOBILE?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">{i + 1}</div>
            <h3 className="text-lg font-semibold text-black">{feature}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
