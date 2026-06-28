"use client";

import { motion } from "framer-motion";

export default function CaseStudiesPage() {
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
            CASE STUDIES
          </p>

          <h1 className="text-5xl md:text-[7rem] font-black leading-tight">
            REAL PEOPLE
            <br />
            <span className="gradient-text">REAL EXPERIMENTS</span>
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
            Longevity is no longer
            <br />
            theoretical.
          </h2>

          <p className="text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto">
            People are actively testing
            <br />
            human optimization.
          </p>
        </motion.div>
      </section>

      {/* SCREEN 3 */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl w-full">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 gradient-text">
            Case Studies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-bg rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">
                Bryan Johnson
              </h3>
              <p className="text-gray-400">
                Aggressive biomarker tracking, supplements, sleep, and protocol optimization.
              </p>
            </div>

            <div className="card-bg rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">
                Blue Zones
              </h3>
              <p className="text-gray-400">
                Long-lived populations with movement, community, and whole-food diets.
              </p>
            </div>

            <div className="card-bg rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">
                Elite Athletes
              </h3>
              <p className="text-gray-400">
                High VO₂ max, strength, recovery, and disciplined health practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 4 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-4xl md:text-7xl font-bold mb-8 text-red-400">
            Key Lesson
          </h2>

          <p className="text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Longevity is not one thing.
            <br />
            It is systems working together.
          </p>
        </motion.div>
      </section>

      {/* SCREEN 5 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-5xl md:text-8xl font-bold gradient-text leading-tight mb-8">
            OPTIMIZE
            <br />
            THE SYSTEM
          </h2>

          <p className="text-gray-400 text-2xl">
            not one variable.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
