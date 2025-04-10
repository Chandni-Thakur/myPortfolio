"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-500">Chandni Thakur</h1>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <ul className={`md:flex gap-6 ${isOpen ? "block mt-4" : "hidden md:block"}`}>
          <li>
            <a href="#about" className="hover:text-indigo-400 transition">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
          </li>
          <li>
           <a href="#certifications" className="hover:text-indigo-400">Certifications</a>
          </li>

          <li>
            <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
