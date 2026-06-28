"use client";

import { motion } from "framer-motion";

export default function CaseStudiesPage() {
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
            REAL WORLD <span className="gradient-text">EXPERIMENTS</span>
          </h1>

          <p className="text-gray-400 max-w-4xl mx-auto text-lg md:text-2xl">
            Longevity is no longer theory.
            People are actively testing its limits.
          </p>
        </motion.div>
      </section>

      {/* BRYAN */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto card-bg rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            Bryan Johnson
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Bryan Johnson is one of the most extreme public longevity experiments.
          </p>

          <p className="text-gray-400 leading-relaxed">
            His protocol focuses on:
            <br />• Sleep optimization
            <br />• Biomarker obsession
            <br />• Exercise
            <br />• Precision nutrition
            <br />• Supplements
            <br /><br />
            His approach is expensive and extreme.
            But it proves something important:
            biology can be aggressively measured and optimized.
          </p>
        </div>
      </section>

      {/* BLUE ZONES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto card-bg rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            Blue Zones
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Blue Zones are regions where people live unusually long lives.
            <br /><br />
            Common traits:
            <br />• Daily movement
            <br />• Strong social bonds
            <br />• Low chronic stress
            <br />• Mostly whole foods
            <br />• Purpose-driven living
          </p>
        </div>
      </section>

      {/* ATHLETES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto card-bg rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            Elite Athletes
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Elite athletes demonstrate the power of:
            <br />• high VO₂ max
            <br />• strength
            <br />• recovery
            <br />• disciplined nutrition
            <br /><br />
            But excessive training can also create stress.
            Optimization matters more than extremes.
          </p>
        </div>
      </section>
    </main>
  );
}
