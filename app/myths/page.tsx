"use client";

import { motion } from "framer-motion";

export default function MythsPage() {
  return (
    <main className="min-h-screen text-white overflow-x-hidden relative">
      {/* SCREEN 1 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <p className="text-red-400 tracking-[0.4em] uppercase mb-8">
            WARNING
          </p>

          <h1 className="text-5xl md:text-[7rem] font-black leading-tight">
            FALSE BELIEFS
            <br />
            <span className="gradient-text">DESTROY HEALTH</span>
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
            Myth 1
          </h2>

          <p className="text-3xl md:text-5xl text-red-400 font-bold mb-8">
            “I look healthy.”
          </p>

          <p className="text-xl md:text-3xl text-gray-400">
            Appearance can lie.
            <br />
            Biology does not.
          </p>
        </motion.div>
      </section>

      {/* SCREEN 3 */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl w-full">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 gradient-text">
            Common False Beliefs
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-bg rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-red-400">
                Natural = Safe
              </h3>
              <p className="text-gray-400">
                Arsenic is natural. Cyanide is natural.
              </p>
            </div>

            <div className="card-bg rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-red-400">
                Artificial = Harmful
              </h3>
              <p className="text-gray-400">
                Synthetic insulin saves lives.
              </p>
            </div>

            <div className="card-bg rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-red-400">
                I’m Young
              </h3>
              <p className="text-gray-400">
                Damage compounds silently over decades.
              </p>
            </div>

            <div className="card-bg rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-red-400">
                I Feel Fine
              </h3>
              <p className="text-gray-400">
                Symptoms often appear late.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 4 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-4xl md:text-7xl font-bold mb-8 text-red-400">
            The Dangerous Truth
          </h2>

          <p className="text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Humans prefer comfort.
            <br />
            Biology only obeys reality.
          </p>
        </motion.div>
      </section>

      {/* SCREEN 5 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-5xl md:text-8xl font-bold gradient-text leading-tight mb-8">
            TRUTH
            <br />
            FIRST
          </h2>

          <p className="text-gray-400 text-2xl">
            comfort later.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
