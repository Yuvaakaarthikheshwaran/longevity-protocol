"use client";

import { motion } from "framer-motion";
import { Moon, Apple, Dumbbell, Pill, Sparkles, AlertTriangle } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-black text-white antialiased">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold tracking-tight">Aevum</h1>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#philosophy" className="hover:text-white transition">Philosophy</a>
            <a href="#sleep" className="hover:text-white transition">Sleep</a>
            <a href="#diet" className="hover:text-white transition">Diet</a>
            <a href="#exercise" className="hover:text-white transition">Exercise</a>
            <a href="#supplements" className="hover:text-white transition">Supplements</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="z-10"
        >
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            You are Carbon.<br />Defy the Decay.
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light">
            Through blind evolution, we gained intelligence. Yet, our egos trick us into rationalizing our desires as truth. 
            In a universe of vast randomness, extending the human lifespan is not about magic—it is about precise, biological mechanics.
          </p>
        </motion.div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section id="philosophy" className="py-32 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <h3 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8">The Illusion of Certainty</h3>
            <div className="space-y-6 text-xl text-gray-400 font-light leading-relaxed">
              <p>
                We are an assembly of carbon atoms, forged in the cores of dying stars, briefly organized into consciousness. 
                Evolution gifted us intelligence, but that same intelligence is deeply biased. We construct realities that justify our cravings, 
                assuming our fleeting thoughts represent universal truths.
              </p>
              <p>
                When it comes to aging, we invent stories. We seek quick fixes, magical berries, and ancient rituals because they satisfy 
                our need for control. But biology does not care about our narratives. It obeys physics and chemistry. 
                To live longer, we must strip away the ego, acknowledge our biological fragility, and apply protocols grounded in hard evidence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SLEEP SECTION */}
      <section id="sleep" className="py-32 px-6 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Moon className="w-12 h-12 mb-6 text-blue-400" />
            <h3 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">The Nightly Reset</h3>
            <p className="text-xl text-gray-400 mb-8">
              Your brain’s waste management system only works in the dark. During deep sleep, the glymphatic system flushes out amyloid-beta proteins—the very proteins that cause cognitive decline.
            </p>
            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex gap-4"><span className="text-blue-400 font-bold">01.</span> Temperature: Drop room to 65°F (18°C) to trigger core body cooling.</li>
              <li className="flex gap-4"><span className="text-blue-400 font-bold">02.</span> Light: Zero lux. Even minor light leaks disrupt melatonin production.</li>
              <li className="flex gap-4"><span className="text-blue-400 font-bold">03.</span> Consistency: The circadian rhythm rewards strict sleep/wake times.</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h4 className="text-2xl font-bold mb-4">The Hard Proof</h4>
            <p className="text-gray-400">
              Epidemiological data shows chronic sleep deprivation (under 6 hours) correlates with a 40% increase in cardiovascular events. 
              Sleep is not passive time; it is the most active period of cellular repair.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DIET SECTION */}
      <section id="diet" className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Apple className="w-12 h-12 mx-auto mb-6 text-green-400" />
          <h3 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">Fueling the Machine</h3>
          <p className="max-w-3xl mx-auto text-xl text-gray-400 mb-16">
            There is no single "perfect" diet. But there is biological truth: nutrient density and metabolic flexibility dictate longevity. 
            Insulin spikes and chronic snacking accelerate cellular senescence.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h4 className="text-2xl font-bold mb-4">Time-Restricted Eating</h4>
              <p className="text-gray-400">Compressing eating to an 8-10 hour window allows autophagy—the body eating its own damaged cells—to occur.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h4 className="text-2xl font-bold mb-4">The Mediterranean Baseline</h4>
              <p className="text-gray-400">High olive oil, omega-3s, and polyphenols. Proven in RCTs to reduce major cardiovascular events by 30%.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h4 className="text-2xl font-bold mb-4">Protein Moderation</h4>
              <p className="text-gray-400">Excess mTOR activation via constant high protein accelerates aging. Cycle your protein, prioritize plants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXERCISE SECTION */}
      <section id="exercise" className="py-32 px-6 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white/5 p-8 rounded-3xl border border-white/10 order-2 md:order-1">
            <h4 className="text-2xl font-bold mb-4">VO2 Max is King</h4>
            <p className="text-gray-400">
              A 2016 Mayo Clinic study showed that high-intensity interval training (HIIT) reverses age-related decline in mitochondrial function. 
              Your lungs and heart are engines; if you don't push them to redline, they rust.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-1 md:order-2">
            <Dumbbell className="w-12 h-12 mb-6 text-red-400" />
            <h3 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">Architectural Stress</h3>
            <p className="text-xl text-gray-400 mb-8">
              Muscle is not just for movement; it is a metabolic sink. It absorbs glucose and prevents insulin resistance. 
              Bone density and muscle mass are the greatest predictors of lifespan independence in your 80s.
            </p>
            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex gap-4"><span className="text-red-400 font-bold">01.</span> Lift heavy objects 2-3 times a week to trigger osteoblast activity.</li>
              <li className="flex gap-4"><span className="text-red-400 font-bold">02.</span> Zone 2 Cardio: 150 minutes weekly of conversational pace cardio.</li>
              <li className="flex gap-4"><span className="text-red-400 font-bold">03.</span> Sprint once a week to force cardiovascular adaptation.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SUPPLEMENTS & MYTHS SECTION */}
      <section id="supplements" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <Pill className="w-12 h-12 mb-6 text-purple-400" />
          <h3 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">Stripping the Noise</h3>
          
          <div className="space-y-12 mt-16">
            <div className="border-l-2 border-green-500 pl-8">
              <h4 className="text-3xl font-bold mb-4 text-green-500">The Essentials</h4>
              <p className="text-gray-400 text-lg mb-4">
                Most of us lack optimal levels of Vitamin D3, Omega-3, and Magnesium. These are not magic; they are biological prerequisites 
                that modern indoor living has stripped from us.
              </p>
              <p className="text-gray-500 text-md">Proof: D3 supplementation reduces cancer mortality in vitamin-deficient populations. Omega-3 reduces systemic inflammation.</p>
            </div>

            <div className="border-l-2 border-yellow-500 pl-8">
              <h4 className="text-3xl font-bold mb-4 text-yellow-500">The Nuanced</h4>
              <p className="text-gray-400 text-lg mb-4">
                NAD+ precursors (NR, NMN) and Rapamycin show immense promise in mice, extending lifespan by up to 25%. 
              </p>
              <p className="text-gray-500 text-md">Caveat: Mouse biology is not human biology. They are tools of optimization, not tickets to immortality.</p>
            </div>

            <div className="border-l-2 border-red-500 pl-8">
              <h4 className="text-3xl font-bold mb-4 text-red-500">The Illusions</h4>
              <p className="text-gray-400 text-lg mb-4">
                Detox teas, goji berries, "anti-aging" creams, and homeopathy. Our biased minds love the idea of a single exotic ingredient saving us. 
                It satisfies our need for a savior, but fails basic pharmacokinetics.
              </p>
              <p className="text-gray-500 text-md">Reality: If it sounds like magic, it is marketing. Biology requires structural, consistent inputs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 border-t border-white/10 text-center">
        <Sparkles className="w-8 h-8 mx-auto mb-4 text-gray-600" />
        <p className="text-gray-500 max-w-2xl mx-auto">
          We are a brief spark of consciousness in a cold universe. Equip yourself with truth, not comfort. 
          The protocols above do not promise eternity; they promise a longer, sharper journey through the void.
        </p>
        <p className="text-gray-700 mt-8 text-sm">Built with Next.js. Hosted on GitHub. Grounded in science.</p>
      </footer>
    </main>
  );
}