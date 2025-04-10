"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Hover animation + scroll dimming
  const navClasses = `inline-block transition-transform duration-300 ${
    scrolled ? "opacity-60" : "opacity-100"
  } hover:scale-105 hover:-translate-y-1`;

  const navLinks = (
    <>
      <li>
        <Link href="/about" className={navClasses}>
          About
        </Link>
      </li>
      <li>
        <Link href="/projects" className={navClasses}>
          Projects
        </Link>
      </li>
      <li>
        <Link href="/research" className={navClasses}>
          Research
        </Link>
      </li>
      <li>
        <Link href="/contact" className={navClasses}>
          Contact
        </Link>
      </li>
    </>
  );

  // Navbar background & border colors
  const navbarBackground = scrolled
    ? "bg-[#fffff0]/90 backdrop-blur-md shadow-sm border-gray-300"
    : "bg-[#f7e7ce] border-[#f3dec3]"; // soft champagne border

  return (
    <header
      className={`sticky top-4 z-50 mx-4 md:mx-6 lg:mx-10 border-b rounded-lg transition-all duration-300 ${navbarBackground}`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className={`text-lg font-semibold transition-colors duration-300 ${
            scrolled ? "text-gray-500" : "text-gray-900"
          }`}
        >
          Portfolio
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="space-y-4 text-sm font-medium">{navLinks}</ul>
        </div>
      )}
    </header>
  );
}
