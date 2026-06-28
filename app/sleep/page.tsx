"use client";

import { motion } from "framer-motion";

export default function SleepPage() {
  return (
    <main className="min-h-screen text-white overflow-x-hidden relative">
      {/* SCREEN 1 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <p className="text-cyan-400 tracking-[0.4em] uppercase mb-8">
            SLEEP
          </p>

          <h1 className="text-5xl md:text-[7rem] font-black leading-tight">
            SLEEP IS NOT REST
            <br />
            <span className="gradient-text">IT IS REPAIR</span>
          </h1>
        </motion.div>
      </section>

      {/* SCREEN 2 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-8">
            While you sleep,
            <br />
            biology works.
          </h2>

          <p className="text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Recovery happens.
            <br />
            Hormones rebalance.
            <br />
            Memory consolidates.
            <br />
            Damage gets repaired.
          </p>
        </motion.div>
      </section>

      {/* SCREEN 3 */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 gradient-text">
            Sleep Architecture
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-bg rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">Deep Sleep</h3>
              <p className="text-gray-400">
                Physical recovery, tissue repair, growth hormone release.
              </p>
            </div>

            <div className="card-bg rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">REM</h3>
              <p className="text-gray-400">
                Memory consolidation, emotional processing, brain function.
              </p>
            </div>

            <div className="card-bg rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">Light Sleep</h3>
              <p className="text-gray-400">
                Transition state supporting overall sleep cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 4 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-4xl md:text-7xl font-bold mb-8 text-red-400">
            Sleep Deprivation
          </h2>

          <p className="text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Poor sleep increases:
            <br />
            Insulin resistance
            <br />
            Cortisol
            <br />
            Hunger
            <br />
            Inflammation
          </p>
        </motion.div>
      </section>

      {/* SCREEN 5 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-5xl md:text-8xl font-bold gradient-text leading-tight mb-8">
            SLEEP
            <br />
            BUILDS YOU
          </h2>

          <p className="text-gray-400 text-2xl">
            every single night.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
