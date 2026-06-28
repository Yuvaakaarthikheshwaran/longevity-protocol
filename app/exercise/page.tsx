"use client";

import { motion } from "framer-motion";

export default function ExercisePage() {
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
            EXERCISE
          </p>

          <h1 className="text-5xl md:text-[7rem] font-black leading-tight">
            MOVEMENT IS NOT OPTIONAL
            <br />
            <span className="gradient-text">IT IS BIOLOGY</span>
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
            Humans evolved
            <br />
            to move.
          </h2>

          <p className="text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Walk.
            <br />
            Lift.
            <br />
            Sprint.
            <br />
            Move.
          </p>
        </motion.div>
      </section>

      {/* SCREEN 3 */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 gradient-text">
            Core Systems
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-bg rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">
                Strength
              </h3>
              <p className="text-gray-400">
                Builds muscle, bone density, power, and resilience.
              </p>
            </div>

            <div className="card-bg rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">
                Cardio
              </h3>
              <p className="text-gray-400">
                Improves heart health, VO₂ max, and endurance.
              </p>
            </div>

            <div className="card-bg rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">
                Mobility
              </h3>
              <p className="text-gray-400">
                Preserves movement quality, control, and injury resistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 4 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-4xl md:text-7xl font-bold mb-8 text-red-400">
            Inactivity
          </h2>

          <p className="text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Sedentary living increases:
            <br />
            Disease risk
            <br />
            Insulin resistance
            <br />
            Frailty
            <br />
            Early mortality
          </p>
        </motion.div>
      </section>

      {/* SCREEN 5 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-5xl md:text-8xl font-bold gradient-text leading-tight mb-8">
            TRAIN
            <br />
            TO SURVIVE
          </h2>

          <p className="text-gray-400 text-2xl">
            and thrive.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
