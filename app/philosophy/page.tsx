"use client";

import { motion } from "framer-motion";
import { Brain, Atom, EyeOff, Scale } from "lucide-react";

export default function PhilosophyPage() {
  const cards = [
    {
      title: "Evolution",
      description:
        "Evolution optimized survival and reproduction—not truth, wisdom, or perfect health.",
      icon: Atom,
    },
    {
      title: "Bias",
      description:
        "Humans are deeply biased. We rationalize what feels comfortable and defend what supports our beliefs.",
      icon: Brain,
    },
    {
      title: "Blind Spots",
      description:
        "What feels right is often wrong. Biology operates independently of our perception.",
      icon: EyeOff,
    },
    {
      title: "Reality",
      description:
        "Truth is not democratic. Biology does not negotiate with opinion, ego, or belief.",
      icon: Scale,
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
            HUMANS SEEK <span className="gradient-text">COMFORT</span>
          </h1>

          <p className="text-gray-400 max-w-4xl mx-auto text-lg md:text-2xl">
            Biology seeks nothing. It simply obeys laws.
          </p>
        </motion.div>
      </section>

      {/* CORE */}
      <section className="py-24 px-6">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text">
          Why Humans Misjudge Health
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cards.map((card, i) => {
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

      {/* DEEP SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto card-bg rounded-2xl p-10">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            The Comfort Trap
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Humans constantly distort reality to reduce discomfort.
          </p>

          <ul className="space-y-4 text-lg text-gray-400">
            <li>• “I feel healthy, so I must be healthy.”</li>
            <li>• “I’m young, so damage doesn’t matter yet.”</li>
            <li>• “Natural means safe.”</li>
            <li>• “I’ll fix it later.”</li>
          </ul>
        </div>
      </section>

      {/* FINAL */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto card-bg rounded-2xl p-10">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            The Reality
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            You are carbon atoms arranged into conscious biological machinery.
            Through evolution, intelligence emerged. But intelligence did not
            remove bias. It simply made rationalization more sophisticated.
            <br />
            <br />
            Arteries do not care about beliefs.
            Cells do not care about comfort.
            Biology does not care about ego.
            <br />
            <br />
            Longevity begins when you stop trusting instinct and start respecting
            reality.
          </p>
        </div>
      </section>
    </main>
  );
}
