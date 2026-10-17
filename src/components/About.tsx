export default function About() {
  return (
    <section id="about-us" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 bg-gray-200 h-96 rounded-3xl"></div>
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black mb-6">Our Story</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            At AMBIKA MOBILE, we believe technology should be accessible, reliable, and refined. From helping you find the perfect device to providing expert repair services, our mission is to ensure you stay connected with confidence.
          </p>
          <a href="#contact" className="text-black font-bold border-b-2 border-black hover:border-gray-400 transition-colors">Contact Our Team</a>
        </div>
      </div>
    </section>
  );
}
