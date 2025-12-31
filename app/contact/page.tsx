"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaSpinner,
  FaTerminal,
  FaArrowRight,
} from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ProfessionalContact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setStatus("success");
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section className="relative min-h-screen w-full bg-[#030712] py-24 px-6 flex items-center justify-center overflow-hidden selection:bg-indigo-500/30">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size:40px_40px" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-zinc-800/50 border border-zinc-800/50 rounded-3xl overflow-hidden shadow-2xl">
          <div className="lg:col-span-5 bg-zinc-950 p-8 md:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-800/50">
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 text-indigo-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-8">
                  <FaTerminal /> channel.open()
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase mb-6">
                  Initialize <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-500">
                    Contact
                  </span>
                </h2>
              </motion.div>

              <div className="space-y-8">
                <blockquote className="relative p-6 bg-white/0.02 border border-white/5 rounded-2xl group">
                  <div className="absolute -top-3 left-6 px-2 bg-[#030712] text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                    Postulate
                  </div>
                  <p className="text-lg text-zinc-400 font-light leading-relaxed italic">
                    &ldquo;Mathematics is the art of giving the same name to
                    different things.&rdquo;
                  </p>
                  <footer className="text-[10px] font-mono text-indigo-500 mt-4 uppercase tracking-[0.2em]">
                    — Henri Poincaré
                  </footer>
                </blockquote>

                <div className="grid gap-6">
                  <ContactMetric
                    icon={<FaEnvelope />}
                    label="Gateway"
                    value="pranjal@dev.log"
                  />
                  <ContactMetric
                    icon={<FaMapMarkerAlt />}
                    label="Loc_ID"
                    value="Assam, India"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#050505] p-8 md:p-14">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6"
                >
                  <FaCheckCircle className="text-5xl text-indigo-500 mb-4" />
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">
                    Verified
                  </h3>
                  <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
                    Data buffer cleared. Message stored.
                  </p>
                  <Button
                    variant="ghost"
                    onClick={() => setStatus("idle")}
                    className="text-zinc-600 hover:text-white uppercase text-[10px] tracking-widest"
                  >
                    Return to Root
                  </Button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <Label
                        htmlFor="name"
                        className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500"
                      >
                        01. Identity
                      </Label>
                      <Input
                        id="name"
                        required
                        className="bg-transparent border-zinc-800 focus-visible:ring-indigo-500 text-white rounded-none border-t-0 border-x-0 border-b px-0 h-10 transition-all placeholder:text-zinc-900"
                        placeholder="NAME_REQUIRED"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="email"
                        className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500"
                      >
                        02. Return_Path
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="bg-transparent border-zinc-800 focus-visible:ring-indigo-500 text-white rounded-none border-t-0 border-x-0 border-b px-0 h-10 transition-all placeholder:text-zinc-900"
                        placeholder="EMAIL_REQUIRED"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="message"
                      className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500"
                    >
                      03. Payload
                    </Label>
                    <Textarea
                      id="message"
                      required
                      className="min-h-[200px] bg-zinc-900/10 border-zinc-800 focus-visible:ring-indigo-500 text-white resize-none p-6 rounded-2xl transition-all placeholder:text-zinc-900"
                      placeholder="DESCRIBE_PARAMETERS..."
                    />
                  </div>

                  <Button
                    disabled={status === "loading"}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold h-14 group transition-all rounded-xl shadow-indigo-900/10"
                  >
                    {status === "loading" ? (
                      <FaSpinner className="animate-spin text-xl" />
                    ) : (
                      <span className="flex items-center gap-3 tracking-[0.3em] uppercase text-[10px]">
                        Execute Transmission{" "}
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactMetric({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-5 group">
      <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-indigo-400 transition-all">
        {icon}
      </div>
      <div>
        <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-600 mb-1 leading-none">
          {label}
        </p>
        <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">
          {value}
        </p>
      </div>
    </div>
  );
}
