"use client";

import { motion } from "framer-motion";
import { Pill, ShieldCheck, AlertTriangle, FlaskConical } from "lucide-react";

export default function SupplementsPage() {
  const cards = [
    {
      title: "Evidence-Based",
      description:
        "Supplements should be judged by evidence, safety, dosage, and outcomes—not marketing or emotion.",
      icon: ShieldCheck,
    },
    {
      title: "Useful",
      description:
        "Some supplements provide real benefits when used correctly and in proper contexts.",
      icon: Pill,
    },
    {
      title: "Overhyped",
      description:
        "Many supplements sell hope, not results. Marketing often exceeds scientific evidence.",
      icon: AlertTriangle,
    },
    {
      title: "Engineered Biology",
      description:
        "Human-made compounds are not automatically harmful. What matters is mechanism and evidence.",
      icon: FlaskConical,
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
            SUPPLEMENTS ≠ <span className="gradient-text">MAGIC</span>
          </h1>

          <p className="text-gray-400 max-w-4xl mx-auto text-lg md:text-2xl">
            Most longevity gains come from sleep, exercise, and nutrition.
            Supplements are tools—not shortcuts.
          </p>
        </motion.div>
      </section>

      {/* CORE */}
      <section className="py-24 px-6">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text">
          The Truth About Supplements
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

      {/* NATURAL FALLACY */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto card-bg rounded-2xl p-10">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            The Natural Fallacy
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Humans often assume “natural” means safe and “artificial” means bad.
            This is emotional reasoning—not scientific reasoning.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-red-400">
                Natural ≠ Safe
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li>• Arsenic is natural</li>
                <li>• Cyanide is natural</li>
                <li>• Snake venom is natural</li>
                <li>• Deadly mushrooms are natural</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                Artificial ≠ Harmful
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li>• Vaccines save millions</li>
                <li>• Synthetic insulin saves lives</li>
                <li>• Purified creatine is highly studied</li>
                <li>• Engineered medicine extends lifespan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BEST SUPPLEMENTS */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto card-bg rounded-2xl p-10">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            High-Evidence Supplements
          </h2>

          <ul className="space-y-4 text-lg text-gray-300">
            <li>• Creatine</li>
            <li>• Omega-3</li>
            <li>• Vitamin D (if deficient)</li>
            <li>• Magnesium (if deficient)</li>
            <li>• Protein powder (if needed)</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
