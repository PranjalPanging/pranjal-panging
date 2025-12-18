"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaBrain,
  FaCode,
  FaRocket,
  FaAtom,
  FaLaptopCode,
  FaLanguage,
} from "react-icons/fa";

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
          <div className="max-w-4xl mx-auto p-6 bg-slate-50 min-h-screen font-sans">
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-6 border border-slate-200">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-100 shadow-inner shrink-0">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Pranjal"
                    alt="Pranjal Panging"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center md:text-left">
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                    Pranjal Panging
                  </h1>
                  <p className="text-blue-600 font-medium text-lg mb-3">
                    Student Researcher & Tech Enthusiast
                  </p>
                  <p className="text-slate-600 max-w-xl leading-relaxed">
                    Class 11 CBSE student passionate about solving problems
                    through Maths, Physics, and Deep Learning. Currently working
                    on my first math research paper.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-200 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                    <FaUserGraduate size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">
                    Education
                  </h3>
                </div>

                <div className="pl-2 border-l-2 border-blue-100 ml-4 space-y-6">
                  <div className="relative pl-6">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                    <h4 className="font-semibold text-slate-800">
                      PM Shri KV AFS Digaru
                    </h4>
                    <p className="text-sm text-slate-500 mb-2">
                      Class 1 – 12 | 2016 – 2027 (Expected)
                    </p>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mt-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                        Stream (11th & 12th)
                      </span>
                      <p className="text-slate-700 font-medium">PCM + CS</p>
                      <p className="text-slate-500 text-sm mt-1">
                        Physics, Chemistry, Math, Computer Science
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-200 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                    <FaRocket size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">
                    What I’m Up To
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  I’m constantly exploring ideas that challenge me. Currently, I
                  am:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-700 text-sm">
                    <FaLaptopCode className="mt-1 text-purple-500" />
                    <span>
                      Diving into AI, Machine Learning, and Deep Learning.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm">
                    <FaBrain className="mt-1 text-purple-500" />
                    <span>
                      Authoring my{" "}
                      <strong>first math-related research paper</strong>.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="md:col-span-2 bg-white rounded-2xl shadow-sm p-6 border border-slate-200 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-teal-50 text-teal-600 rounded-lg">
                    <FaAtom size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">
                    Interests & Passions
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-2 mb-2 text-slate-800 font-semibold">
                      <FaBrain className="text-teal-500" /> Mathematics
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                        Pattern Recognition
                      </span>
                      <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                        Logic
                      </span>
                      <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                        Research
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-2 mb-2 text-slate-800 font-semibold">
                      <FaCode className="text-teal-500" /> Computer Science
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                        Coding
                      </span>
                      <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                        AI / ML
                      </span>
                      <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                        Deep Learning
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-2 mb-2 text-slate-800 font-semibold">
                      <FaAtom className="text-teal-500" /> Physics
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                        Theoretical Physics
                      </span>
                      <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                        Mechanics
                      </span>
                      <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                        Exploration
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-2 mb-2 text-slate-800 font-semibold">
                      <FaLanguage className="text-teal-500" /> Linguistics
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                        Language Structure
                      </span>
                      <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                        Semantics
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
