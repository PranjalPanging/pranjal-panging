"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-28 px-6 bg-linear-to-r from-blue-600 to-indigo-600 text-white overflow-hidden"
    >
      {/* Floating blobs – matching Hero exactly */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-purple-500 rounded-full opacity-30 animate-ping -top-20 -left-16" />
        <div className="absolute w-72 h-72 bg-pink-500 rounded-full opacity-20 animate-pulse bottom-0 right-0" />
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-xl border border-white/20"
        >
          <p className="text-lg md:text-xl leading-relaxed mb-6">
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
