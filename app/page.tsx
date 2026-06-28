"use client";

import { motion } from "framer-motion";
import {
  Moon,
  Dumbbell,
  Pill,
  Activity,
  Brain,
  Leaf,
} from "lucide-react";

const pillars = [
  { name: "Sleep", icon: Moon, href: "/sleep" },
  { name: "Exercise", icon: Dumbbell, href: "/exercise" },
  { name: "Supplements", icon: Pill, href: "/supplements" },
  { name: "Biomarkers", icon: Activity, href: "/biomarkers" },
  { name: "Philosophy", icon: Brain, href: "/philosophy" },
  { name: "Nutrition", icon: Apple, href: "/nutrition" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between">
          <h1 className="text-2xl font-bold gradient-text">AEVUM</h1>
          <div className="hidden md:flex gap-8 text-gray-300">
            <a href="#philosophy">Philosophy</a>
            <a href="#pillars">Pillars</a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-8xl font-bold mb-6">
            YOU ARE <span className="gradient-text">BIOLOGICAL MACHINERY</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-2xl">
            Carbon became conscious. Biology remained law.
            Understand the machine. Delay the decay.
          </p>

          <div className="mt-10 flex gap-5 justify-center">
            <button className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 transition">
              Start Protocol
            </button>
            <button className="px-8 py-4 rounded-full border border-white/20">
              Explore Science
            </button>
          </div>
        </motion.div>
      </section>

      <section id="philosophy" className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 gradient-text">
            Philosophy
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed">
            Humans evolved to survive, not to perceive truth.
            We rationalize comfort, justify habits, and mistake belief for reality.
            Biology does not care what we believe.
          </p>
        </div>
      </section>

      <section id="pillars" className="py-20 px-6">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text">
          Longevity Pillars
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.a
                href={pillar.href}
                key={pillar.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="card-bg rounded-2xl p-8 hover:scale-105 transition"
              >
                <Icon size={42} className="text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold">{pillar.name}</h3>
              </motion.a>
            );
          })}
        </div>
      </section>
    </main>
  );
}
