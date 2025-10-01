"use client";
import Image from "next/image";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const HeaderLogo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Main header */}
      <div className="flex items-center justify-between px-4 md:px-6 py-2">
        {/* Left side - Promotion */}
        <div className="hidden md:flex flex-1">
          <span className="font-semibold">$2.50</span> $1 a week for one year.
        </div>

        {/* Center - Logo */}
        <div className="flex-1 flex justify-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Bhitti"
              className="h-20 md:h-24 w-auto cursor-pointer"
              width={240}
              height={360}
            />
          </Link>
        </div>

        {/* Right side - Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-end space-x-6">
          <a
            href="#"
            className="text-gray-700 hover:text-black transition-colors text-sm font-medium"
          >
            Newsletter
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-black transition-colors text-sm font-medium"
          >
            Sign In
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-black transition-colors text-sm font-medium"
          >
            Subscribe
          </a>
          <button className="p-2 text-gray-700 hover:text-black transition-colors">
            <BiSearch size={20} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex-1 flex justify-end">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 hover:text-black transition-colors"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a
              href="#"
              className="text-gray-700 hover:text-black transition-colors text-sm font-medium"
            >
              Newsletter
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-black transition-colors text-sm font-medium"
            >
              Sign In
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-black transition-colors text-sm font-medium"
            >
              Subscribe
            </a>
            <button className="p-2 text-gray-700 hover:text-black transition-colors">
              <BiSearch size={20} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderLogo;
