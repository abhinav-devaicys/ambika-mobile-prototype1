export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-black text-gray-500 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-bold text-white">AMBIKA MOBILE</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
        <div>&copy; {new Date().getFullYear()} Ambika Mobile. All rights reserved.</div>
      </div>
    </footer>
  );
}
