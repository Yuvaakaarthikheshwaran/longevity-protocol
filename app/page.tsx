"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen text-white overflow-x-hidden">

      {/* SCREEN 1 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <p className="text-cyan-400 tracking-[0.4em] uppercase mb-8">
            AEVUM
          </p>

          <h1 className="text-5xl md:text-8xl font-bold leading-tight">
            YOU ARE
            <br />
            <span className="gradient-text">BIOLOGICAL MACHINERY</span>
          </h1>
        </motion.div>
      </section>

      {/* SCREEN 2 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
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

      {/* SCREEN 3 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-8 gradient-text">
            Hidden disease
          </h2>

          <p className="text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Plaque can build silently.
            <br /><br />
            Insulin resistance can develop silently.
            <br /><br />
            Metabolic dysfunction can worsen silently.
          </p>
        </motion.div>
      </section>

      {/* SCREEN 4 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-8">
            Biology does not care
            <br />
            about belief.
          </h2>

          <p className="text-gray-400 text-xl md:text-3xl">
            It only responds to reality.
          </p>
        </motion.div>
      </section>

      {/* SCREEN 5 */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 gradient-text">
            Core Systems
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <a href="/sleep" className="card-bg rounded-3xl p-8 text-2xl font-bold">Sleep</a>
            <a href="/nutrition" className="card-bg rounded-3xl p-8 text-2xl font-bold">Nutrition</a>
            <a href="/exercise" className="card-bg rounded-3xl p-8 text-2xl font-bold">Exercise</a>
            <a href="/biomarkers" className="card-bg rounded-3xl p-8 text-2xl font-bold">Biomarkers</a>
            <a href="/supplements" className="card-bg rounded-3xl p-8 text-2xl font-bold">Supplements</a>
            <a href="/philosophy" className="card-bg rounded-3xl p-8 text-2xl font-bold">Philosophy</a>
          </div>
        </div>
      </section>

      {/* SCREEN 6 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <p className="text-red-400 text-xl tracking-[0.4em] mb-6">
            WARNING
          </p>

          <h2 className="text-4xl md:text-7xl font-bold mb-8">
            FALSE BELIEFS
            <br />
            DESTROY HEALTH
          </h2>

          <a href="/myths" className="primary-btn inline-block">
            Break Myths
          </a>
        </motion.div>
      </section>

      {/* SCREEN 7 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h2 className="text-5xl md:text-8xl font-bold gradient-text leading-tight mb-8">
            LONGEVITY BEGINS
            <br />
            WHEN BELIEF STOPS
          </h2>

          <p className="text-gray-400 text-2xl">
            and reality starts.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
