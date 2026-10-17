import { businessConfig } from "../config";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-black text-gray-500 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <div className="font-bold text-white mb-2">{businessConfig.name}</div>
          <p>{businessConfig.address}</p>
          <p>{businessConfig.phone}</p>
          <p>{businessConfig.email || "Email details coming soon"}</p>
          <p>Hours: {businessConfig.hours}</p>
        </div>
        <div className="flex flex-col gap-2">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
        <div>&copy; {new Date().getFullYear()} Ambika Mobile Sale & Service. All rights reserved.</div>
      </div>
    </footer>
  );
}
