export default function About() {
  return (
    <section id="about-us" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 bg-gray-200 h-96 rounded-3xl"></div>
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black mb-6">Your Local Experts in Gwalior</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Ambika Mobile Sale & Service has been serving the Gwalior community with dedication. We specialize in bringing the latest mobile technology to you, backed by professional repair services you can trust. Located at Hazira Chowk, we are here to ensure your devices perform at their best.
          </p>
          <a href="#contact" className="text-black font-semibold border-b-2 border-black hover:border-gray-400 transition-colors">Visit Us in Gwalior</a>
        </div>
      </div>
    </section>
  );
}
