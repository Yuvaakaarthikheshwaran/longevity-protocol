"use client";

import { motion } from "framer-motion";
import { Moon, Brain, Clock3, ShieldCheck } from "lucide-react";

export default function SleepPage() {
  const sleepCards = [
    {
      title: "Deep Sleep",
      description:
        "This is when your body repairs tissue, builds muscle, restores hormones, and performs physical recovery.",
      icon: Moon,
    },
    {
      title: "REM Sleep",
      description:
        "Critical for memory, emotional processing, learning, creativity, and cognitive performance.",
      icon: Brain,
    },
    {
      title: "Circadian Rhythm",
      description:
        "Your internal clock controls melatonin, cortisol, temperature, energy, and sleep timing.",
      icon: Clock3,
    },
    {
      title: "Recovery",
      description:
        "Good sleep lowers disease risk, improves metabolism, and protects long-term brain health.",
      icon: ShieldCheck,
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-8xl font-bold mb-6">
            SLEEP IS NOT <span className="gradient-text">PASSIVE</span>
          </h1>

          <p className="text-gray-400 max-w-4xl mx-auto text-lg md:text-2xl">
            While you sleep, your brain removes waste, your hormones rebalance,
            your muscles recover, and your biology repairs itself.
          </p>
        </motion.div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="py-24 px-6">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text">
          Why Sleep Matters
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {sleepCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="card-bg rounded-2xl p-8"
              >
                <Icon size={40} className="text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-400">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SLEEP DEBT */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto card-bg rounded-2xl p-10">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            Sleep Debt
          </h2>

          <p className="text-gray-400 text-lg mb-6">
            You may feel adapted to sleeping 5–6 hours. Your biology does not.
            Sleep deprivation compounds silently.
          </p>

          <ul className="space-y-4 text-lg text-gray-300">
            <li>• Reduced testosterone</li>
            <li>• Higher insulin resistance</li>
            <li>• Poor cognitive performance</li>
            <li>• Increased cardiovascular risk</li>
            <li>• Higher long-term neurodegeneration risk</li>
          </ul>
        </div>
      </section>

      {/* PROTOCOL */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto card-bg rounded-2xl p-10">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            Practical Sleep Protocol
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-300 text-lg">
            <div>✓ Sleep 7.5–9 hours daily</div>
            <div>✓ Wake at consistent times</div>
            <div>✓ Morning sunlight exposure</div>
            <div>✓ Avoid late caffeine</div>
            <div>✓ Keep room cool and dark</div>
            <div>✓ Reduce night screen exposure</div>
          </div>
        </div>
      </section>
    </main>
  );
}
