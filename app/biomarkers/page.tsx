"use client";

import { motion } from "framer-motion";
import {
  Activity,
  HeartPulse,
  Droplets,
  Brain,
} from "lucide-react";

export default function BiomarkersPage() {
  const cards = [
    {
      title: "ApoB",
      description:
        "Measures total atherogenic lipoproteins that can enter artery walls and form plaque.",
      icon: HeartPulse,
    },
    {
      title: "HbA1c",
      description:
        "Average blood glucose over ~3 months. Strong indicator of glucose control and diabetes risk.",
      icon: Droplets,
    },
    {
      title: "Inflammation",
      description:
        "Markers like hs-CRP reveal chronic inflammation linked to cardiovascular disease.",
      icon: Activity,
    },
    {
      title: "Brain & Hormones",
      description:
        "Hormones and neurological markers influence cognition, recovery, and aging.",
      icon: Brain,
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-8xl font-bold mb-6">
            YOU CANNOT SEE <span className="gradient-text">INSIDE</span>
          </h1>

          <p className="text-gray-400 max-w-4xl mx-auto text-lg md:text-2xl">
            You can look fit, muscular, and energetic while silent damage grows
            inside arteries, organs, and metabolic systems.
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-6">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text">
          Why Biomarkers Matter
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

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-8">

          <div className="card-bg rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 gradient-text">ApoB</h2>
            <p className="text-gray-300 leading-relaxed">
              ApoB is arguably one of the most important cardiovascular biomarkers.
              Every atherogenic particle (mainly LDL, VLDL remnants, Lp(a)) carries
              one ApoB molecule.
              <br /><br />
              More ApoB = more particles capable of entering artery walls.
              More particles = higher plaque formation risk.
              <br /><br />
              You can have normal LDL-C but elevated ApoB.
              That means hidden cardiovascular risk.
            </p>
          </div>

          <div className="card-bg rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 gradient-text">HbA1c</h2>
            <p className="text-gray-300 leading-relaxed">
              HbA1c estimates average blood sugar over roughly 3 months.
              <br /><br />
              High HbA1c indicates poor glucose control.
              Chronic elevation damages:
              blood vessels, kidneys, nerves, and eyes.
              <br /><br />
              Even prediabetic ranges significantly raise long-term risk.
            </p>
          </div>

          <div className="card-bg rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Fasting Insulin</h2>
            <p className="text-gray-300 leading-relaxed">
              Insulin resistance often develops years before glucose becomes abnormal.
              <br /><br />
              Fasting glucose can appear normal while fasting insulin is elevated.
              That means metabolic dysfunction may already be progressing silently.
            </p>
          </div>

          <div className="card-bg rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 gradient-text">hs-CRP</h2>
            <p className="text-gray-300 leading-relaxed">
              hs-CRP measures systemic inflammation.
              Chronic inflammation accelerates:
              plaque instability, metabolic dysfunction, and disease progression.
            </p>
          </div>

          <div className="card-bg rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Blood Pressure</h2>
            <p className="text-gray-300 leading-relaxed">
              High blood pressure damages artery walls continuously.
              <br /><br />
              This increases risk of:
              stroke, heart attack, kidney damage, and cognitive decline.
            </p>
          </div>

          <div className="card-bg rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Resting Heart Rate</h2>
            <p className="text-gray-300 leading-relaxed">
              Elevated resting heart rate can indicate poor cardiovascular fitness,
              chronic stress, or recovery issues.
            </p>
          </div>

          <div className="card-bg rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Vitamin D</h2>
            <p className="text-gray-300 leading-relaxed">
              Low vitamin D is associated with poor immune health,
              reduced bone health, and hormonal issues.
            </p>
          </div>

          <div className="card-bg rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Testosterone</h2>
            <p className="text-gray-300 leading-relaxed">
              Testosterone affects muscle mass, recovery, mood, energy,
              and overall vitality in men.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
