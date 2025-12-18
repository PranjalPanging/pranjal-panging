"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function AboutPreview() {
  return (
    <section id="about" className="py-16 px-6 bg-[#0f172a]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-2xl bg-[#111823] border border-slate-800 shadow-sm"
        >
          <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-12">
            <div>
              <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-blue-500 mb-4">
                Profile
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                I am a Class 11 student.
              </p>
            </div>
            <div className="hidden md:block w-px h-16 bg-slate-800" />
            <div className="flex flex-col justify-between h-full">
              <p className="text-slate-400 text-sm mb-6 italic">
                Currently working on my first math research paper.{" "}
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[11px] font-bold text-white uppercase tracking-widest group"
              >
                Academic Journey
                <FaArrowRight className="text-blue-500 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
