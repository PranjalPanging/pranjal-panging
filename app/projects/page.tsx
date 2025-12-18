"use client";

import React from "react";
import { projectsData } from "../data/projects";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaRocket,
  FaFolderOpen,
} from "react-icons/fa";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen w-full bg-[#0a0f16] text-slate-300 font-sans selection:bg-blue-500/30">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-slate-800/50 hidden md:block" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-slate-800/50 hidden md:block" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <header className="mb-20 border-b border-slate-800 pb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-blue-500 font-mono text-sm mb-4"
          >
            <FaFolderOpen /> <span>projects / development_log</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Technical Projects
          </h1>

          <p className="text-slate-400 max-w-2xl leading-relaxed text-base">
            Detailed overview of software solutions and research
            implementations. All projects are open-source and available for
            review on{" "}
            <a
              href="https://github.com/PranjalPanging"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white underline decoration-blue-500/30 transition-colors"
            >
              GitHub
            </a>
            .
          </p>
        </header>
        <div className="grid gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative grid md:grid-cols-[1fr_300px] gap-8 p-8 rounded-2xl bg-[#111823] border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-blue-500 bg-blue-500/10 p-2 rounded-lg">
                    <FaRocket size={16} />
                  </span>
                  <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h2>
                </div>

                <p className="text-slate-400 leading-relaxed mb-6 text-sm md:text-base italic">
                  "{project.description}"
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-slate-800/50 text-slate-400 rounded-md text-[11px] font-mono border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-auto">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-semibold transition-colors border border-slate-700"
                  >
                    <FaGithub /> Source Code
                  </Link>
                  <Link
                    href={project.link}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-semibold transition-colors"
                  >
                    View Demo <FaExternalLinkAlt size={12} />
                  </Link>
                </div>
              </div>
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 flex flex-col justify-center">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Event Context
                </h4>
                <p className="text-sm text-blue-400 font-semibold mb-4">
                  {project.achievement}
                </p>
                <div className="space-y-3 pt-4 border-t border-slate-700">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-500">Status</span>
                    <span className="text-green-400 font-mono">
                      ● Completed
                    </span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-500">Architecture</span>
                    <span className="text-slate-300 font-mono">Full-Stack</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
