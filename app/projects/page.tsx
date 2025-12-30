"use client";

import React from "react";
import { projectsData, Project } from "../data/projects";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaRocket,
  FaFolderOpen,
  FaTerminal,
} from "react-icons/fa";
import { SiNpm, SiPython } from "react-icons/si";

const ProjectCard = ({ project }: { project: Project }) => {
  const isLibrary = !!(project.npm || project.pypi);
  const isGithubLink = project.link.includes("github.com");
  const isSystemTool =
    project.tech.includes("Rust") || project.tech.includes("FFmpeg");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative grid md:grid-cols-[1fr_300px] gap-8 p-8 rounded-2xl bg-[#111823] border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl"
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-blue-500 bg-blue-500/10 p-2 rounded-lg">
            {isSystemTool ? <FaTerminal size={16} /> : <FaRocket size={16} />}
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

        <div className="flex flex-wrap gap-3 mt-auto">
          <Link
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-semibold transition-colors border border-slate-700"
          >
            <FaGithub /> Source
          </Link>

          {project.npm && (
            <Link
              href={project.npm}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-[#CB3837]/10 hover:bg-[#CB3837]/20 text-white rounded-lg text-sm font-semibold transition-colors border border-[#CB3837]/30"
            >
              <SiNpm className="text-[#CB3837]" /> NPM
            </Link>
          )}

          {project.pypi && (
            <Link
              href={project.pypi}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-[#3776AB]/10 hover:bg-[#3776AB]/20 text-white rounded-lg text-sm font-semibold transition-colors border border-[#3776AB]/30"
            >
              <SiPython className="text-[#FFD43B]" /> PyPI
            </Link>
          )}

          {!isLibrary && project.link && (
            <Link
              href={project.link}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-semibold transition-colors"
            >
              {isGithubLink ? "Setup Guide" : "View Demo"}{" "}
              <FaExternalLinkAlt size={12} />
            </Link>
          )}
        </div>
      </div>

      <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 flex flex-col justify-center">
        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
          Project Context
        </h4>
        <p className="text-sm text-blue-400 font-semibold mb-4">
          {project.achievement}
        </p>
        <div className="space-y-3 pt-4 border-t border-slate-700">
          <div className="flex justify-between text-[11px]">
            <span className="text-slate-500">Status</span>
            <span className="text-green-400 font-mono">● Active</span>
          </div>
          <div className="flex justify-between text-[11px]">
            <span className="text-slate-500">Environment</span>
            <span className="text-slate-300 font-mono">
              {isLibrary
                ? "WASM/Native"
                : isGithubLink
                ? "Local Python"
                : "Web/Cloud"}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen w-full bg-[#0a0f16] text-slate-300 font-sans selection:bg-blue-500/30">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-slate-900/20 hidden md:block" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-slate-900/20 hidden md:block" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <header className="mb-20 border-b border-slate-800/50 pb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-blue-500 font-mono text-sm mb-4"
          >
            <FaFolderOpen /> <span>projects / dev_log</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Technical Projects
          </h1>
          <p className="text-slate-400 max-w-2xl leading-relaxed text-base">
            Exploring system-level tools, media processing, and AI integrations.
            All projects are open-source on{" "}
            <a
              href="https://github.com/PranjalPanging"
              className="text-blue-400 hover:text-white underline transition-colors"
            >
              GitHub
            </a>
            .
          </p>
        </header>

        <div className="grid gap-12">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
