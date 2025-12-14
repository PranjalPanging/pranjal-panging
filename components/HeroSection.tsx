"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-linear-to-r from-blue-600 via-purple-600 to-indigo-600 flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-72 h-72 bg-purple-500 rounded-full opacity-30 -top-16 -left-16"
          animate={{ y: [0, 20, 0], x: [0, 15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-pink-500 rounded-full opacity-20 bottom-0 right-0"
          animate={{ y: [0, -15, 0], x: [0, -20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-56 h-56 bg-blue-400 rounded-full opacity-20 top-1/3 left-1/4"
          animate={{ y: [0, 10, 0], x: [0, 10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
            animate={{
              y: [0, Math.random() * 10 - 5, 0],
              x: [0, Math.random() * 10 - 5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-4 max-w-2xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Hi, I&apos;m Pranjal Panging
        </h1>
        <p className="text-lg md:text-xl mb-8 drop-shadow-md">
          I love coding, mathematics, and linguistics.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="#about"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-400 transition-colors duration-200"
          >
            Contact Me
          </a>
        </div>

        <div className="flex gap-6 justify-center mt-4 text-2xl">
          <a
            href="https://github.com/PranjalPanging"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/pranjalpanging"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/pangnosis"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
