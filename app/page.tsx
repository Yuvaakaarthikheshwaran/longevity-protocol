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
  ArrowRight,
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
    <main className="min-h-screen text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-bold gradient-text">AEVUM</h1>

          <div className="hidden md:flex gap-6 text-gray-300">
            <a href="/philosophy">Philosophy</a>
            <a href="/biomarkers">Biomarkers</a>
            <a href="/myths">Myths</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl"
        >
          <p className="text-cyan-400 mb-6 tracking-[0.3em] uppercase">
            Engineer Longevity
          </p>

          <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
            YOU ARE <span className="gradient-text">BIOLOGICAL MACHINERY</span>
          </h1>

          <p className="text-gray-400 max-w-4xl mx-auto text-lg md:text-2xl mb-10 leading-relaxed">
            Carbon became conscious.
            <br />
            Biology remained law.
            <br /><br />
            Understand the machine.
            Delay the decay.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="/philosophy" className="primary-btn">
              Start Journey
            </a>

            <a href="/myths" className="secondary-btn">
              Break Myths
            </a>
          </div>
        </motion.div>
      </section>

      {/* PROBLEM */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto card-bg rounded-3xl p-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">
            The Problem
          </h2>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Most people think health is visible.
            <br /><br />
            It isn’t.
            <br /><br />
            You can look lean, muscular, and energetic while silent disease grows.
            Plaque can build in arteries.
            Insulin resistance can develop.
            Metabolic dysfunction can worsen.
            <br /><br />
            Appearance can lie.
            Biology does not.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text">
          Core Pillars
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
                transition={{ delay: i * 0.07 }}
                className="card-bg rounded-3xl p-8"
              >
                <Icon size={42} className="text-cyan-400 mb-5" />
                <h3 className="text-2xl font-bold mb-4">{pillar.name}</h3>
                <p className="text-gray-400 mb-5">
                  Explore {pillar.name.toLowerCase()} and its role in longevity.
                </p>
                <div className="flex items-center text-cyan-400 gap-2">
                  Explore <ArrowRight size={18} />
                </div>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto card-bg rounded-3xl p-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">
            Real-World Experiments
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Longevity is no longer theoretical.
            <br /><br />
            Scientists, athletes, and public figures are actively pushing human optimization.
          </p>

          <a href="/case-studies" className="primary-btn inline-block">
            Explore Case Studies
          </a>
        </div>
      </section>

      {/* FINAL */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-8">
          LONGEVITY BEGINS WHEN BELIEF STOPS
        </h2>

        <p className="text-gray-400 text-xl md:text-2xl">
          and reality starts.
        </p>
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
