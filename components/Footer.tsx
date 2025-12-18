"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

interface FooterLink {
  name: string;
  href: string;
}

const footerLinks: FooterLink[] = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Publications", href: "/publications" },
  { name: "Contact", href: "/contact" },
  { name: "Projects", href: "/projects" },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden pt-16 bg-black border-none">
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-move-star"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 60 + 40}s`,
              animationDelay: `${Math.random() * 20}s`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          ></div>
        ))}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0 text-white">
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
            Pranjal Panging<span className="text-blue-400">.</span>
          </h1>
          <p className="mt-3 max-w-xs text-gray-300">
            Enthusiastic about coding, mathematics, and discovering new ideas.
            Welcome to my little corner of the universe.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-semibold mb-3 relative text-white drop-shadow-md">
            Explore
            <span className="block w-10 h-0.5 bg-blue-400 mt-1 rounded"></span>
          </h2>
          <ul className="space-y-2">
            {footerLinks.map((link: FooterLink) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h2 className="font-semibold mb-2 relative text-white drop-shadow-md">
            Connect
            <span className="block w-10 h-0.5 bg-blue-400 mt-1 rounded"></span>
          </h2>
          <div className="flex space-x-5">
            <a
              href="https://github.com/PranjalPanging"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transform hover:scale-110 transition-all duration-300 drop-shadow-md"
            >
              <FaGithub size={26} />
            </a>
            <a
              href="https://linkedin.com/pranjalpanging"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transform hover:scale-110 transition-all duration-300 drop-shadow-md"
            >
              <FaLinkedin size={26} />
            </a>
            <a
              href="https://instagram.com/pangnosis"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transform hover:scale-110 transition-all duration-300 drop-shadow-md"
            >
              <FaInstagram size={26} />
            </a>
          </div>
        </div>
      </div>
      <div className="relative z-10 text-center text-gray-400 text-sm py-5 border-t border-gray-700">
        &copy; {new Date().getFullYear()} Pranjal Panging. All rights reserved.
      </div>
      <style jsx>{`
        /* Moving Stars */
        @keyframes moveStar {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translate(-50px, 30px) scale(1.3);
            opacity: 1;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
        }
        .animate-move-star {
          animation: moveStar infinite linear;
        }

        /* Shooting stars */
        @keyframes shootingStar {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(300px, 200px) scale(0);
            opacity: 0;
          }
        }
        .animate-shooting-star {
          animation: shootingStar 3s linear infinite;
        }
        .animate-shooting-star-delay {
          animation: shootingStar 3s linear infinite 1.5s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
