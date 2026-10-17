export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black mb-16 text-center">We’re Here to Help.</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-500">Email: [INSERT EMAIL]</p>
            <p className="text-gray-500">Phone: [INSERT PHONE]</p>
            <p className="text-gray-500">Address: [INSERT ADDRESS]</p>
            <p className="text-gray-500">Hours: [INSERT HOURS]</p>
          </div>
          <div className="flex flex-col gap-4">
            <button className="bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800">Call Us</button>
            <button className="border border-black text-black py-3 rounded-full font-medium hover:bg-black hover:text-white">Chat on WhatsApp</button>
          </div>
        </div>
      </div>
    </section>
  );
}
