"use client";

import { motion } from "framer-motion";
import { Leaf, Beef, Wheat, Droplets } from "lucide-react";

export default function NutritionPage() {
  const cards = [
    {
      title: "Protein",
      description:
        "Critical for muscle retention, recovery, hormones, and healthy aging. Low muscle mass strongly predicts mortality.",
      icon: Beef,
    },
    {
      title: "Carbohydrates",
      description:
        "Primary energy source. Quality matters more than ideology. Whole-food carbs support performance and recovery.",
      icon: Wheat,
    },
    {
      title: "Healthy Fats",
      description:
        "Essential for hormones, brain health, cell membranes, and long-term metabolic function.",
      icon: Droplets,
    },
    {
      title: "Micronutrients",
      description:
        "Vitamins and minerals regulate thousands of biological reactions every day.",
      icon: Leaf,
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
            FOOD IS <span className="gradient-text">INFORMATION</span>
          </h1>

          <p className="text-gray-400 max-w-4xl mx-auto text-lg md:text-2xl">
            Every meal sends signals to your biology. Nutrition influences
            metabolism, hormones, inflammation, and long-term health.
          </p>
        </motion.div>
      </section>

      {/* CORE PILLARS */}
      <section className="py-24 px-6">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text">
          Core Nutrition Pillars
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

      {/* PRINCIPLES */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto card-bg rounded-2xl p-10">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            Practical Nutrition Principles
          </h2>

          <ul className="space-y-4 text-lg text-gray-300">
            <li>• Prioritize protein intake daily</li>
            <li>• Eat mostly whole foods</li>
            <li>• Reduce ultra-processed foods</li>
            <li>• Eat enough fiber</li>
            <li>• Maintain healthy body composition</li>
          </ul>
        </div>
      </section>

      {/* DIET COMPARISON */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto card-bg rounded-2xl p-10">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            Diets
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Mediterranean, Blue Zone, Keto, Vegan, Carnivore — no single diet
            works for everyone. The best diet is the one that consistently
            improves biomarkers, body composition, and long-term adherence.
          </p>
        </div>
      </section>
    </main>
  );
}
