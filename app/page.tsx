"use client";

import { motion } from "framer-motion";
import NeuralBackground from "@/components/NeuralBackground";
import Hero3D from "@/components/Hero3D";

export default function Home() {
  return (
    <main className="min-h-screen text-white overflow-x-hidden relative">
      <NeuralBackground />
      <div className="scan-line"></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">AEVUM</h1>

          <div className="flex gap-6 text-gray-300">
            <a href="/philosophy">Philosophy</a>
            <a href="/biomarkers">Biomarkers</a>
            <a href="/myths">Myths</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <p className="text-cyan-400 tracking-[0.4em] uppercase mb-8">
            AEVUM
          </p>

          <h1 className="text-5xl md:text-[8rem] font-black leading-tight mb-8">
            YOU ARE
            <br />
            <span className="gradient-text">BIOLOGICAL MACHINERY</span>
          </h1>

          <p className="text-gray-400 text-xl md:text-2xl max-w-4xl mx-auto mb-12">
            Carbon became conscious.
            <br />
            Biology remained law.
          </p>
        </motion.div>

        <Hero3D />
      </section>

      {/* SECTION 2 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-8">
            Most people think
            <br />
            health is visible.
          </h2>

          <p className="text-3xl md:text-6xl text-red-400 font-bold">
            It isn’t.
          </p>
        </motion.div>
      </section>

      {/* SECTION 3 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-8 gradient-text">
            Hidden disease
          </h2>

          <p className="text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto">
            Plaque builds silently.
            <br /><br />
            Insulin resistance builds silently.
            <br /><br />
            Disease grows silently.
          </p>
        </motion.div>
      </section>

      {/* SECTION 4 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
          <h2 className="text-5xl md:text-8xl font-bold gradient-text leading-tight mb-8">
            LONGEVITY BEGINS
            <br />
            WHEN BELIEF STOPS
          </h2>

          <p className="text-gray-400 text-2xl mb-10">
            and reality starts.
          </p>

          <a href="/philosophy" className="primary-btn">
            Enter AEVUM
          </a>
        </motion.div>
      </section>
    </main>
  );
}
