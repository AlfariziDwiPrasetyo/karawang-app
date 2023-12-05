"use client";
import React from "react";
import { useState } from "react";

const NavMain = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      {/* Logo di samping kiri */}
      <div className="flex items-center">
        <img
          src="/logo.png" // Ganti dengan path/logo Anda
          alt="Logo"
          className="h-8 w-8 mr-2"
        />
        <span className="text-white text-lg font-bold">Nama Brand</span>
      </div>

      {/* Item-item di samping kanan */}
      <ul className="flex items-center space-x-4">
        {/* Tujuh item */}
        <li>
          <a href="#" className="text-white hover:text-gray-300">
            Item 1
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-300">
            Item 2
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-300">
            Item 3
          </a>
        </li>
        <li>
          {/* Item dengan dropdown */}
          <div className="relative">
            <a
              href="#"
              className="text-white hover:text-gray-300 cursor-pointer"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              Item 4 ▼
            </a>
            {/* Dropdown */}
            {showDropdown && (
              <div className="absolute z-10 top-full left-0 bg-gray-800 text-white p-2">
                <a href="#" className="block hover:text-gray-300">
                  Sub Item 1
                </a>
                <a href="#" className="block hover:text-gray-300">
                  Sub Item 2
                </a>
                <a href="#" className="block hover:text-gray-300">
                  Sub Item 3
                </a>
              </div>
            )}
          </div>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-300">
            Item 5
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-300">
            Item 6
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-300">
            Item 7
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMain;
