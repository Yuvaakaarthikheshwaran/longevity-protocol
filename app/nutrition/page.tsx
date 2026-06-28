"use client";

import { motion } from "framer-motion";

export default function NutritionPage() {
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
            NUTRITION
          </p>

          <h1 className="text-5xl md:text-[7rem] font-black leading-tight">
            FOOD IS NOT JUST CALORIES
            <br />
            <span className="gradient-text">IT IS INFORMATION</span>
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
            Every meal sends
            <br />
            biological signals.
          </h2>

          <p className="text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Hormones respond.
            <br />
            Blood sugar changes.
            <br />
            Cells adapt.
            <br />
            Biology listens.
          </p>
        </motion.div>
      </section>

      {/* SCREEN 3 */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 gradient-text">
            Core Foundations
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-bg rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">
                Protein
              </h3>
              <p className="text-gray-400">
                Essential for muscle, repair, hormones, and structure.
              </p>
            </div>

            <div className="card-bg rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">
                Fats
              </h3>
              <p className="text-gray-400">
                Critical for hormones, brain function, and cell membranes.
              </p>
            </div>

            <div className="card-bg rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">
                Carbs
              </h3>
              <p className="text-gray-400">
                Primary fuel source for movement and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 4 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-4xl md:text-7xl font-bold mb-8 text-red-400">
            Poor Nutrition
          </h2>

          <p className="text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Chronic poor nutrition increases:
            <br />
            Inflammation
            <br />
            Metabolic dysfunction
            <br />
            Insulin resistance
            <br />
            Disease risk
          </p>
        </motion.div>
      </section>

      {/* SCREEN 5 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-5xl md:text-8xl font-bold gradient-text leading-tight mb-8">
            EAT
            <br />
            TO BUILD
          </h2>

          <p className="text-gray-400 text-2xl">
            not just to fill.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
