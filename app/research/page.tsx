"use client";

import React from "react";
import { motion } from "framer-motion";
import { Atom, Terminal, Activity } from "lucide-react";
import Link from "next/link";

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[#0a0f16] text-slate-300 flex flex-col items-center justify-center p-6">
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size:100%_2px,3px_100%" />

      <div className="relative z-10 w-full max-w-2xl">
        <header className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/5 border border-blue-500/20 mb-4"
          >
            <Atom size={32} className="text-blue-500/40 animate-spin-slow" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase"
          >
            Scientific <span className="text-slate-800">Inquiry</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center space-y-8"
          >
            <p className="text-slate-500 font-mono text-xs tracking-[0.3em] uppercase">
              // Status: <span className="text-blue-400">Dormant</span>
            </p>

            <div className="w-full max-w-xs h-px bg-linear-to-r from-transparent via-slate-800 to-transparent" />

            <div className="space-y-4 max-w-sm text-center">
              <p className="text-slate-400 text-sm leading-relaxed italic">
                "No research papers added yet. Data collection is in progress."
              </p>

              <div className="flex items-center justify-center gap-6 pt-6">
                <Link
                  href="/projects"
                  className="group flex items-center gap-2 text-[10px] font-bold font-mono text-slate-500 hover:text-white transition-colors tracking-widest"
                >
                  <Terminal size={12} /> VIEW_PROJECTS
                </Link>
                <div className="w-1 h-1 bg-slate-800 rounded-full" />
                <Link
                  href="/"
                  className="group flex items-center gap-2 text-[10px] font-bold font-mono text-slate-500 hover:text-white transition-colors tracking-widest"
                >
                  <Activity size={12} /> HOME
                </Link>
              </div>
            </div>
          </motion.div>
        </header>
      </div>

    </div>
  );
}
