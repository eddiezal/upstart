// src/components/layout/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Branding */}
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-green-400">Upstart Fridge</h3>
              <p className="text-gray-400 mt-2">Reducing waste, nurturing communities</p>
            </div>
  
            {/* Quick Links */}
            <div className="flex space-x-6">
              <a 
                href="/about" 
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                About Us
              </a>
              <a 
                href="/contact" 
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                Contact
              </a>
              <a 
                href="/fridge-finder" 
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                Fridge Finder
              </a>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="border-t border-gray-700 mt-6 pt-4 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Upstart Fridge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }