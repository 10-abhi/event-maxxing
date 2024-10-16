"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-black p-4 border-b-2 border-b-violet-950 border-opacity-45">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-12">
          <div className="flex font-bold text-2xl">
            <div className="text-white text-opacity-80">Event</div>
            <div className="text-violet-900">Maxxing</div>
          </div>
          
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-white text-xl hover:text-gray-300">
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden mt-4 bg-gray-700 rounded-lg p-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="block text-white hover:text-gray-300 py-2">
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;