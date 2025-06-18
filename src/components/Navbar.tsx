import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/iot-logo.webp';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 backdrop-blur-sm bg-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <img 
                src={logo} 
                alt="IoT CoE Logo" 
                className="h-12 w-auto transform transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {[
              { to: "/", label: "Home" },
              { to: "/events", label: "Events" },
              { to: "/members", label: "Members" },
              { to: "/initiatives", label: "Initiatives" },
              { to: "/contact", label: "Contact" }
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`px-4 py-2 mx-1 rounded-md text-sm font-medium transition-all duration-300 ease-in-out
                  ${location.pathname === item.to 
                    ? 'text-blue-600 bg-blue-50 scale-105' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 hover:scale-105'
                  }
                  relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                  after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 
                hover:text-blue-600 hover:bg-gray-100 transition-all duration-300 
                focus:outline-none focus:ring-2 focus:ring-blue-500 transform hover:scale-105"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <div className={`absolute transition-all duration-300 ease-in-out ${
                  isOpen ? 'rotate-0 opacity-0' : 'rotate-0 opacity-100'
                }`}>
                  <Menu className="h-6 w-6" />
                </div>
                <div className={`absolute transition-all duration-300 ease-in-out ${
                  isOpen ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
                }`}>
                  <X className="h-6 w-6" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed w-full bg-white/95 backdrop-blur-sm transform transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
        style={{ top: '64px', maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }}
      >
        <div className="px-4 py-3 space-y-2">
          {[
            { to: "/", label: "Home" },
            { to: "/events", label: "Events" },
            { to: "/members", label: "Members" },
            { to: "/initiatives", label: "Initiatives" },
            { to: "/contact", label: "Contact" }
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-102
                ${location.pathname === item.to
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }
                relative overflow-hidden before:absolute before:inset-0 before:w-0 before:bg-gray-50/50 
                before:transition-all hover:before:w-full`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}