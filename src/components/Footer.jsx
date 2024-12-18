import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="text-center">
        <p>© {new Date().getFullYear()} Tools Website. All rights reserved.</p>
        <div className="mt-2">
          <a
            href="https://github.com"
            className="text-gray-400 hover:text-white mx-2 transition"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-400 hover:text-white mx-2 transition"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
