import { motion } from "motion/react";
import { useState } from "react";

const repairServices = [
  "Screen Repair", "Battery Replacement", "Charging Port", "Speaker/Mic Faults", "Camera Issues", "Software Errors"
];

export default function RepairServices() {
  const [formData, setFormData] = useState({ name: "", phone: "", model: "", issue: "", message: "" });

  return (
    <section id="repair-services" className="py-24 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-center">Your Device. Our Expertise.</h2>
        <p className="text-gray-400 text-center mb-16">Reliable device diagnostics and repair services designed to get you connected again.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {repairServices.map((service, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white/5 p-4 rounded-xl border border-white/10 text-center text-sm">
              {service}
            </motion.div>
          ))}
        </div>

        <form className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-6">
          <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-white/20 p-2 focus:border-white outline-none" onChange={(e) => setFormData({...formData, name: e.target.value})} />
          <input type="tel" placeholder="Phone Number" className="w-full bg-transparent border-b border-white/20 p-2 focus:border-white outline-none" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
          <input type="text" placeholder="Device Brand & Model" className="w-full bg-transparent border-b border-white/20 p-2 focus:border-white outline-none" onChange={(e) => setFormData({...formData, model: e.target.value})} />
          <textarea placeholder="Description of the issue" className="w-full bg-transparent border-b border-white/20 p-2 focus:border-white outline-none" onChange={(e) => setFormData({...formData, message: e.target.value})} />
          <button type="submit" className="w-full bg-white text-black py-3 rounded-full font-bold hover:bg-gray-200">Request Repair</button>
        </form>
      </div>
    </section>
  );
}
