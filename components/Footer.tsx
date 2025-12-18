"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080808] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <h2 className="text-xl font-bold tracking-tight text-white">
              Pranjal Panging<span className="text-blue-500">.</span>
            </h2>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-sm">
              Enthusiastic about coding, mathematics, and discovering new ideas.
              Welcome to my little corner of the universe
            </p>
          </div>
          <div className="md:col-span-6 grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-bold">
                Explore
              </span>
              <FooterLink href="/" label="Home" />
              <FooterLink href="/about" label="About Me" />
              <FooterLink href="/projects" label="Projects" />
              <FooterLink href="/research" label="Research" />
              <FooterLink href="/blog" label="Blog" />
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-bold">
                Connect
              </span>
              <SocialLink
                href="mailto:contact@pranjalpanging.com"
                label="Contact"
                icon={<FaEnvelope size={12} />}
              />
              <SocialLink
                href="https://github.com/PranjalPanging"
                label="GitHub"
                icon={<FaGithub size={12} />}
              />
              <SocialLink
                href="https://linkedin.com/in/pranjalpanging"
                label="LinkedIn"
                icon={<FaLinkedin size={12} />}
              />
              <SocialLink
                href="https://instagram.com/pangnosis"
                label="Instagram"
                icon={<FaInstagram size={12} />}
              />
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/5">
          <p className="text-[11px] text-gray-600 uppercase tracking-widest font-medium">
            © 2025 Pranjal Panging
          </p>
        </div>
      </div>
    </footer>
  );
};
const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-block"
  >
    {label}
  </Link>
);

const SocialLink = ({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
  >
    <span className="opacity-70">{icon}</span> {label}
  </a>
);

export default Footer;
