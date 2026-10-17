import { businessConfig } from "../config";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black mb-16 text-center">We’re Here to Help.</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-gray-700">
            <p><strong>Address:</strong><br />{businessConfig.address}</p>
            <p><strong>Phone:</strong><br />{businessConfig.phone}</p>
            <p><strong>Email:</strong><br />{businessConfig.email || "Email details coming soon"}</p>
            <p><strong>Hours:</strong><br />{businessConfig.hours}</p>
          </div>
          <div className="flex flex-col gap-4">
            <a href={`tel:${businessConfig.phone.replace(/\s+/g, '')}`} className="bg-black text-white py-3 rounded-full font-medium text-center hover:bg-gray-800 transition-colors">Call Us</a>
            <a href={businessConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="border border-black text-black py-3 rounded-full font-medium text-center hover:bg-black hover:text-white transition-colors">Chat on WhatsApp</a>
            <a href={businessConfig.mapsLink} target="_blank" rel="noopener noreferrer" className="border border-black text-black py-3 rounded-full font-medium text-center hover:bg-black hover:text-white transition-colors">Get Directions</a>
          </div>
        </div>
      </div>
    </section>
  );
}
