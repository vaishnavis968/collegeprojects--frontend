import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="w-full bg-white/70 backdrop-blur-md shadow-md fixed top-0 left-0 z-50 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          MedCompare<span className="text-gray-800">+</span>
        </h1>
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
          <li><Link to="/upload" className="hover:text-blue-600 transition-colors">Upload Bill</Link></li>
          <li><Link to="/compare" className="hover:text-blue-600 transition-colors">Compare</Link></li>
          <li><Link to="/about" className="hover:text-blue-600 transition-colors">About</Link></li>
        </ul>
        <button className="md:hidden text-gray-700 focus:outline-none">
          ☰
        </button>
      </div>
    </nav>
  );
}
