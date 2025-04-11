"use client";

import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export const metadata = {
  title: "Contact | My Portfolio",
  description: "How to get in touch with me.",
};

export default function ContactPage() {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:" + "arindrajit.paul.careers" + "@hotmail.com";
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-12 space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Let&apos;s Connect</h1>
        <p className="mt-4 text-gray-700 text-lg">
          Whether you’re interested in working together, want to chat about
          research, or just want to say hi — I’d love to hear from you. The best
          way to reach me is via email or LinkedIn.
        </p>
      </div>

      <div className="space-y-4 text-gray-700 text-base">
        <p className="flex items-center gap-2">
          <FaEnvelope className="text-gray-500" />
          <button
            onClick={handleEmailClick}
            className="text-blue-600 hover:underline"
          >
            firstname.lastname.careers [at] hotmail.com
          </button>
        </p>

        <p className="flex items-center gap-2">
          <FaLinkedin className="text-gray-500" />
          <a
            href="https://linkedin.com/in/arin-p"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </p>

        <p className="flex items-center gap-2">
          <FaGithub className="text-gray-500" />
          <a
            href="https://github.com/arindrajit-paul"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
