"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-28 px-6 overflow-hidden bg-linear-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-72 h-72 bg-purple-500 rounded-full opacity-30 -top-20 -left-16"
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
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 drop-shadow-lg">
          About Me
        </h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-xl border border-white/20"
        >
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            My name is Pranjal Panging. I am a student in Class 11, and I am
            focusing on improving myself in all my subjects, especially Physics,
            Chemistry, and Math. I try to study in a consistent way, understand
            each concept slowly and clearly, and build my knowledge step by step
            so that I can perform well in my exams and feel confident about what
            I’m learning. I have a strong interest in coding, and I want to
            explore the fields of AI, machine learning, and deep learning in the
            future because I find the idea of creating intelligent systems and
            solving real-world problems with technology very exciting. I am also
            interested in linguistics, as I enjoy understanding how languages
            work and how communication shapes the way people think. Even though
            I follow politics and stay aware of what is happening around me, I
            try not to get too involved because it can sometimes feel
            overwhelming or distracting. Outside my studies, I enjoy spending my
            time playing and watching football and volleyball, since both sports
            keep me active and help me stay balanced. I also like solving the
            Rubik’s Cube, which challenges my mind, improves my logical
            thinking, and gives me a sense of satisfaction when I complete it.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
