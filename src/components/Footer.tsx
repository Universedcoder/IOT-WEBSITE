import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SISTec - IOT CoE</h3>
            <p className="text-gray-400">
              IoT Centre of Excellence at SISTec is dedicated to nurturing innovation and technological advancement in the field of Internet of Things.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition duration-300">Home</Link>
              <Link to="/events" className="block text-gray-400 hover:text-white transition duration-300">Events</Link>
              <Link to="/initiatives" className="block text-gray-400 hover:text-white transition duration-300">Initiatives</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition duration-300">Contact</Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>SISTec Campus</p>
              <p>Gandhi Nagar, Bhopal</p>
              <p>Madhya Pradesh</p>
              <p>Email: iot@sistec.ac.in</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>Made with ❤️ by <a href="https://owner.chikaz.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Mohnish Singh</a> & <a href="https://pawani0.github.io/myself/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Rishabh Pawani</a> | Copyright 2024 | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
