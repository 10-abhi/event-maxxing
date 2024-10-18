"use client"

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SignupModal } from './modal';
import { signOut, useSession } from 'next-auth/react';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setisVisible] = useState(false);
  const session = useSession();

  const loginLogoutHandler = async () => {
    if (session.status === "authenticated") {
      await signOut();
    } else setisVisible(true);
  }
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (session.status === "loading") {
    return;
  }

  return (
    <nav className="bg-black p-4 border-b-2 border-b-violet-950 border-opacity-45">
      <SignupModal isVisible={isVisible} onClose={() => setisVisible(false)}></SignupModal>
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-12">
          <div className="flex font-bold text-2xl">
            <div className="text-white text-opacity-80">Event</div>
            <div className="text-violet-900">Maxxing</div>
          </div>

          <div className="hidden md:flex space-x-4">
            <div className="text-white text-xl hover:text-gray-300 cursor-pointer">Home</div>
            <div className="text-white text-xl hover:text-gray-300 cursor-pointer">About</div>
            <div className="text-white text-xl hover:text-gray-300 cursor-pointer" onClick={loginLogoutHandler}>{session.status === "authenticated" ? "Logout" : "Sign In/Sign Up"}</div>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 bg-gray-900 bg-opacity-70 rounded-lg p-4">
            <div className="text-white text-xl hover:text-gray-300">Home</div>
            <div className="text-white text-xl hover:text-gray-300">About</div>
            {
              session.status === "authenticated" ?
                <div>Logout</div> :
                <div onClick={() => setisVisible(true)} className="text-white text-xl hover:text-gray-300">Sign up</div>
            }
            <div className="text-white text-xl hover:text-gray-300" onClick={loginLogoutHandler}>{session.status === "authenticated" ? "Logout" : "Sign In/Sign Up"}</div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;