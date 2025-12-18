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
  FaDownload,
} from "react-icons/fa";

export default function AboutSection() {
  const handleDownload = () => {
    const bioText = `
      Name: Pranjal Panging
      Role: Student Researcher & Tech Enthusiast
      Education: PM Shri KV AFS Digaru (PCM + CS)
      Interests: Mathematics, AI/ML, Physics, Linguistics
      Current Project: Authoring first math-related research paper.
    `;
    const element = document.createElement("a");
    const file = new Blob([bioText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "Pranjal_Panging_Bio.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <section
      id="about"
      className="relative w-full py-28 px-6 overflow-hidden bg-[#0f172a]"
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12 border-b border-white/10 pb-12">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Pranjal"
                    alt="Pranjal Panging"
                    className="w-full h-full object-cover bg-slate-800"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-4 border-[#1e293b] rounded-full"></div>
              </div>

              <div className="text-center md:text-left flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                      Pranjal Panging
                    </h1>
                    <p className="text-blue-400 font-semibold text-xl">
                      Student Researcher & Tech Enthusiast
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownload}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-colors shadow-lg shadow-blue-900/20"
                  >
                    <FaDownload /> Download Bio
                  </motion.button>
                </div>

                <p className="text-slate-300 mt-6 max-w-2xl leading-relaxed text-lg">
                  Class 11 CBSE student passionate about solving problems
                  through{" "}
                  <span className="text-white font-medium">
                    Maths, Physics, and Deep Learning
                  </span>
                  . Currently working on my first math research paper.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-500/20 text-blue-400 rounded-lg">
                    <FaUserGraduate size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Education</h3>
                </div>
                <div className="pl-4 border-l-2 border-blue-500/30">
                  <h4 className="font-bold text-white">
                    PM Shri KV AFS Digaru
                  </h4>
                  <p className="text-sm text-slate-400 mb-4">
                    2016 – 2027 (Expected)
                  </p>
                  <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                      Stream
                    </span>
                    <p className="text-white font-bold">PCM + CS</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-500/20 text-purple-400 rounded-lg">
                    <FaRocket size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Focus</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-300">
                    <FaLaptopCode className="mt-1 text-purple-400 shrink-0" />
                    <span>
                      AI, Machine Learning, and Deep Learning exploration.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <FaBrain className="mt-1 text-purple-400 shrink-0" />
                    <span>
                      Authoring a{" "}
                      <span className="text-white font-semibold">
                        math research paper
                      </span>
                      .
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-teal-500/20 text-teal-400 rounded-lg">
                    <FaAtom size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Interests</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Pattern Recognition",
                    "Logic",
                    "Coding",
                    "Deep Learning",
                    "Theoretical Physics",
                    "Semantics",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-slate-300 hover:bg-white/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
