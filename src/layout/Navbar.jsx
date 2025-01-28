// src/components/layout/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="text-2xl font-bold text-green-600">
            Upstart Fridge
          </a>
          <div className="flex space-x-4">
            <a href="/fridge-finder" className="text-gray-700 hover:text-green-600">
              Fridge Finder
            </a>
            <a href="/about" className="text-gray-700 hover:text-green-600">
              About Us
            </a>
            <a href="/contact" className="text-gray-700 hover:text-green-600">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}