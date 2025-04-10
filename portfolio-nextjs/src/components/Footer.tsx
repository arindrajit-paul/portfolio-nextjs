"use client";

import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-16 border-t border-gray-200 py-8 text-sm text-gray-600 transition duration-300 hover:bg-[#f7f4eb]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Copyright */}
        <p>
          &copy; {new Date().getFullYear()} — Debugging life one semicolon at a
          time.
        </p>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/arindrajit-paul"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/arin-p/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 bg-gray-200 hover:bg-blue-100 p-2 rounded-full shadow transition-colors"
        >
          <ArrowUp className="h-5 w-5 text-gray-700" />
        </button>
      </div>
    </footer>
  );
}
