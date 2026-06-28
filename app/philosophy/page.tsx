"use client";

import { motion } from "framer-motion";

export default function PhilosophyPage() {
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
            PHILOSOPHY
          </p>

          <h1 className="text-5xl md:text-[7rem] font-black leading-tight">
            HUMANS EVOLVED
            <br />
            <span className="gradient-text">TO SURVIVE</span>
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
            Not to perceive
            <br />
            full reality.
          </h2>

          <p className="text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Your senses are limited.
            <br />
            Your instincts are biased.
            <br />
            Your biology hides truth.
          </p>
        </motion.div>
      </section>

      {/* SCREEN 3 */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 gradient-text">
            Reality
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-bg rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">Cells</h3>
              <p className="text-gray-400">
                Every cell obeys chemistry.
              </p>
            </div>

            <div className="card-bg rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">Arteries</h3>
              <p className="text-gray-400">
                Every artery obeys physics.
              </p>
            </div>

            <div className="card-bg rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">Body</h3>
              <p className="text-gray-400">
                Every system obeys biology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 4 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-4xl md:text-7xl font-bold mb-8 text-red-400">
            Comfort Is Dangerous
          </h2>

          <p className="text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Humans rationalize.
            <br />
            Humans delay.
            <br />
            Humans prefer comforting lies.
          </p>
        </motion.div>
      </section>

      {/* SCREEN 5 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-5xl md:text-8xl font-bold gradient-text leading-tight mb-8">
            LONGEVITY BEGINS
            <br />
            WITH TRUTH
          </h2>

          <p className="text-gray-400 text-2xl">
            not comfort.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
