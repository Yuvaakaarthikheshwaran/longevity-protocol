"use client";

import { motion } from "framer-motion";
import { Dumbbell, Heart, Activity, Zap } from "lucide-react";

export default function ExercisePage() {
  const cards = [
    {
      title: "Strength Training",
      description:
        "Preserves muscle mass, strength, bone density, and metabolic health. One of the strongest anti-aging interventions.",
      icon: Dumbbell,
    },
    {
      title: "Cardio",
      description:
        "Improves cardiovascular health, circulation, and mitochondrial efficiency.",
      icon: Heart,
    },
    {
      title: "VO₂ Max",
      description:
        "One of the strongest predictors of longevity and all-cause mortality.",
      icon: Activity,
    },
    {
      title: "Power & Mobility",
      description:
        "Explosive movement and mobility preserve movement quality and reduce injury risk.",
      icon: Zap,
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
            MOVEMENT IS <span className="gradient-text">SURVIVAL</span>
          </h1>

          <p className="text-gray-400 max-w-4xl mx-auto text-lg md:text-2xl">
            Your body adapts to what you demand from it. Strength, endurance,
            power, and mobility determine how well you age.
          </p>
        </motion.div>
      </section>

      {/* CORE PILLARS */}
      <section className="py-24 px-6">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text">
          Core Exercise Pillars
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

      {/* WHY IT MATTERS */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto card-bg rounded-2xl p-10">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            Why Exercise Matters
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Aging naturally reduces muscle mass, strength, cardiovascular
            capacity, balance, and mobility. Exercise slows or even reverses
            much of this decline.
          </p>
        </div>
      </section>

      {/* PROTOCOL */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto card-bg rounded-2xl p-10">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            Practical Exercise Protocol
          </h2>

          <ul className="space-y-4 text-lg text-gray-300">
            <li>• Strength training 3–4x per week</li>
            <li>• Zone 2 cardio 2–3x per week</li>
            <li>• Intense cardio 1x per week</li>
            <li>• Daily walking and movement</li>
            <li>• Mobility work several times weekly</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
