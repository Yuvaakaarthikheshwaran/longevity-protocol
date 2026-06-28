"use client";

import { motion } from "framer-motion";
import {
  Moon,
  Dumbbell,
  Pill,
  Activity,
  Brain,
  Leaf,
  ShieldAlert,
} from "lucide-react";

export default function Home() {
  const pillars = [
    { name: "Sleep", icon: Moon, href: "/sleep" },
    { name: "Nutrition", icon: Leaf, href: "/nutrition" },
    { name: "Exercise", icon: Dumbbell, href: "/exercise" },
    { name: "Supplements", icon: Pill, href: "/supplements" },
    { name: "Biomarkers", icon: Activity, href: "/biomarkers" },
    { name: "Philosophy", icon: Brain, href: "/philosophy" },
    { name: "Myths", icon: ShieldAlert, href: "/myths" },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-8xl font-bold mb-6">
            YOU ARE{" "}
            <span className="gradient-text">BIOLOGICAL MACHINERY</span>
          </h1>

          <p className="text-gray-400 max-w-4xl mx-auto text-lg md:text-2xl mb-10">
            Carbon became conscious.
            <br />
            Biology remained law.
            <br /><br />
            Understand the machine. Delay the decay.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/philosophy"
              className="px-8 py-4 bg-cyan-500 rounded-full font-semibold hover:bg-cyan-400 transition"
            >
              Start Journey
            </a>

            <a
              href="/myths"
              className="px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition"
            >
              Break Myths
            </a>
          </div>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto card-bg rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            The Problem
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Most people think health is visible.
            <br /><br />
            It is not.
            <br /><br />
            You can look lean, muscular, and energetic while hidden disease grows.
            Plaque can build in arteries.
            Insulin resistance can develop silently.
            Metabolic dysfunction can worsen without symptoms.
            <br /><br />
            Appearance can lie.
            Biology does not.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 px-6">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text">
          AEVUM Core Pillars
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;

            return (
              <motion.a
                href={pillar.href}
                key={pillar.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="card-bg rounded-2xl p-8 hover:scale-105 transition"
              >
                <Icon size={40} className="text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">{pillar.name}</h3>
                <p className="text-gray-400">
                  Explore {pillar.name.toLowerCase()} and its role in longevity.
                </p>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-8">
            LONGEVITY BEGINS WHEN BELIEF STOPS
          </h2>

          <p className="text-gray-400 text-xl md:text-2xl">
            and reality starts.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <section className="py-16 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold gradient-text mb-4">AEVUM</h2>
          <p className="text-gray-500">
            Engineer longevity through truth, biology, and evidence.
          </p>
        </div>
      </section>
    </main>
  );
}
