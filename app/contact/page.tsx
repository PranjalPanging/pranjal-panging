"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaAtom,
  FaInfinity,
} from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message transmitted through the cosmos! I'll get back to you soon.");
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full bg-[#030712] py-20 px-6 md:px-12 lg:px-24 overflow-hidden flex items-center"
    >      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-500/20 text-4xl pointer-events-none hidden md:block"
          initial={{ x: Math.random() * 1000, y: Math.random() * 800 }}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 10 + i, repeat: Infinity, ease: "linear" }}
        >
          {i % 2 === 0 ? <FaAtom /> : <FaInfinity />}
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-400 to-indigo-400 mb-4 tracking-tighter">
            Initialize Contact
          </h2>
          <p className="text-gray-400 mt-6 max-w-lg mx-auto font-mono text-sm uppercase tracking-widest">
            // Quantum messaging enabled <br />
            Ready for collaboration across the digital plane.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col justify-between overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <svg width="150" height="150" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="white"
                  strokeWidth="0.5"
                  fill="none"
                />
                <rect
                  x="20"
                  y="20"
                  width="60"
                  height="60"
                  stroke="white"
                  strokeWidth="0.5"
                  fill="none"
                  transform="rotate(45 50 50)"
                />
              </svg>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="h-px w-8 bg-blue-500"></span> Metadata
              </h3>
              <div className="space-y-8">
                <div className="group flex items-center gap-6 cursor-pointer">
                  <div className="bg-blue-500/10 p-4 rounded-full border border-blue-500/20 group-hover:bg-blue-500/30 transition-all duration-300">
                    <FaEnvelope className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-400 font-mono uppercase">
                      Protocol: Email
                    </p>
                    <p className="text-gray-200">pranjalpanging@email.com</p>
                  </div>
                </div>
                <div className="group flex items-center gap-6 cursor-pointer">
                  <div className="bg-purple-500/10 p-4 rounded-full border border-purple-500/20 group-hover:bg-purple-500/30 transition-all duration-300">
                    <FaMapMarkerAlt className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-purple-400 font-mono uppercase">
                      Coordinates
                    </p>
                    <p className="text-gray-200">
                      Assam, India [26.2006° N, 92.9376° E]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 p-6 border-l-2 border-blue-500/50 bg-blue-500/5">
              <p className="text-blue-200/80 italic font-light text-lg">
                "In the language of the universe, mathematics is the only syntax
                that never falters."
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#0f172a]/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label className="text-xs font-mono text-blue-400 uppercase tracking-tighter ml-1 mb-2 block">
                  Source Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-gray-600"
                  placeholder="IDENTIFY YOURSELF"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="text-xs font-mono text-blue-400 uppercase tracking-tighter ml-1 mb-2 block">
                  Return Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-gray-600"
                  placeholder="EMAIL@UNIVERSE.COM"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="text-xs font-mono text-blue-400 uppercase tracking-tighter ml-1 mb-2 block">
                  Transmission Data
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-gray-600 resize-none"
                  placeholder="ENTER MESSAGE CONTENT..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
              >
                Execute Transmission <FaPaperPlane className="text-xs" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
