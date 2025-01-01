// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-400 py-6">
//       <div className="text-center">
//         <p>© {new Date().getFullYear()} Tools Website. All rights reserved.</p>
//         <div className="mt-2">
//           <a
//             href="https://github.com"
//             className="text-gray-400 hover:text-white mx-2 transition"
//           >
//             GitHub
//           </a>
//           <a
//             href="https://twitter.com"
//             className="text-gray-400 hover:text-white mx-2 transition"
//           >
//             Twitter
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import bgImage from '../assets/background/bgimage.jpg'; // Background Image Path

export default function Footer() {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-white max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand / Logo Section */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-4xl font-bold tracking-wide">Toolsy</h1>
            <p className="text-gray-300 mt-2">Your Toolkit, Anytime, Anywhere</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/Akram-Hasan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-all"
            >
              <Github size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/akram-hasan-xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-all"
            >
              <Linkedin size={30} />
            </a>
            <a
              href="https://www.instagram.com/akram.hasan_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-all"
            >
              <Instagram size={30} />
            </a>
            <a
              href="https://x.com/AkramHa65598736"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-all"
            >
              <Twitter size={30} />
            </a>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="border-t border-gray-600 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Toolsy. All rights reserved.</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <LinkItem href="/privacy-policy" label="Privacy Policy" />
            <LinkItem href="/terms" label="Terms of Service" />
            <LinkItem href="/contact" label="Contact Us" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Link Item Component
const LinkItem = ({ href, label }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-white transition-all text-sm"
  >
    {label}
  </a>
);
