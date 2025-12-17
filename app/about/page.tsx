"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-28 px-6 overflow-hidden bg-linear-to-r from-blue-600 via-purple-600 to-indigo-600 text-white"
    >
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
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-xl border border-white/20"
        >
          <h3 className="text-2xl font-semibold">About Me</h3>
          <p>
            Hi, I’m <strong>Pranjal Panging</strong>, a Class 11 CBSE student
            with a love for{" "}
            <strong>Maths, Physics, Chemistry, and Computer Science</strong>. I
            enjoy solving problems, spotting patterns, and figuring out how
            things work, especially in Maths.
          </p>
          <p>
            I’m diving into{" "}
            <strong>AI, Machine Learning, and Deep Learning</strong> and working
            on my <strong>first math-related research paper</strong>. I love
            learning by exploring ideas that challenge me.
          </p>
          <h3 className="text-2xl font-semibold">Education</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>CBSE, Class 1 – Class 12 | 2016 – 2027</li>
            <li>
              Started school in 2016, currently in Class 11, finishing Class 12
              in 2027
            </li>
            <li>
              Stream in Classes 11–12: Physics, Chemistry, Mathematics, and
              Computer Science (PCM + CS)
            </li>
            <li>
              Focus on understanding concepts deeply and applying them
              creatively
            </li>
          </ul>
          <h3 className="text-2xl font-semibold">Interests & Passions</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Maths: problem-solving, patterns, logical thinking</li>
            <li>Physics and Chemistry</li>
            <li>Coding and Computer Science</li>
            <li>AI, Machine Learning, and Deep Learning</li>
            <li>Math research and scientific exploration</li>
          </ul>
          <h3 className="text-2xl font-semibold">What I’m Up To</h3>
          <p>
            I’m learning new things every day, exploring science and technology,
            and working on my math research. My goal is to develop my skills,
            contribute to knowledge, and keep challenging myself along the way.
          </p>{" "}
        </motion.div>
      </motion.div>
    </section>
  );
}
