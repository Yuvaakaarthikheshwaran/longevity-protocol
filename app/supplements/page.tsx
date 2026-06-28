"use client";

import { motion } from "framer-motion";

export default function SupplementsPage() {
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
            SUPPLEMENTS
          </p>

          <h1 className="text-5xl md:text-[7rem] font-black leading-tight">
            SUPPLEMENTS ARE NOT MAGIC
            <br />
            <span className="gradient-text">THEY ARE TOOLS</span>
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
            The question is not:
            <br />
            natural or synthetic.
          </h2>

          <p className="text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            The real questions are:
            <br />
            Is it safe?
            <br />
            Is it effective?
            <br />
            Is it proven?
          </p>
        </motion.div>
      </section>

      {/* SCREEN 3 */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 gradient-text">
            Evidence-Based Tools
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-bg rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">
                Creatine
              </h3>
              <p className="text-gray-400">
                Strong evidence for muscle performance, strength, and cognition.
              </p>
            </div>

            <div className="card-bg rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">
                Omega-3
              </h3>
              <p className="text-gray-400">
                Supports heart, brain, and inflammation regulation.
              </p>
            </div>

            <div className="card-bg rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">
                Vitamin D
              </h3>
              <p className="text-gray-400">
                Critical for immune function, hormones, and bone health.
              </p>
            </div>

            <div className="card-bg rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">
                Magnesium
              </h3>
              <p className="text-gray-400">
                Supports sleep, nerves, recovery, and muscle function.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 4 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-4xl md:text-7xl font-bold mb-8 text-red-400">
            Biggest Mistake
          </h2>

          <p className="text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Supplements cannot fix:
            <br />
            Poor sleep
            <br />
            Inactivity
            <br />
            Terrible diet
            <br />
            Chronic stress
          </p>
        </motion.div>
      </section>

      {/* SCREEN 5 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-5xl md:text-8xl font-bold gradient-text leading-tight mb-8">
            MASTER
            <br />
            THE BASICS FIRST
          </h2>

          <p className="text-gray-400 text-2xl">
            then optimize.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
