"use client";

import { motion } from "framer-motion";

import PageShell from "@/components/PageShell";

export default function BiomarkersPage() {
  return (
    <PageShell prev="/myths" next="/sleep">
      {/* SCREEN 1 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <p className="text-cyan-400 tracking-[0.4em] uppercase mb-8">
            BIOMARKERS
          </p>

          <h1 className="text-5xl md:text-[7rem] font-black leading-tight">
            YOU CANNOT SEE
            <br />
            <span className="gradient-text">INSIDE YOUR BODY</span>
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
            Symptoms appear late.
          </h2>

          <p className="text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Disease usually starts silently.
            <br />
            Long before pain.
            <br />
            Long before symptoms.
            <br />
            Long before diagnosis.
          </p>
        </motion.div>
      </section>

      {/* SCREEN 3 */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl w-full">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 gradient-text">
            Medical Dashboard
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-bg rounded-3xl p-8">
              <p className="text-cyan-400 mb-3">ApoB</p>
              <h3 className="text-4xl font-bold mb-4">85 mg/dL</h3>
              <p className="text-gray-400">
                Measures number of cholesterol particles capable of entering artery walls.
              </p>
            </div>

            <div className="card-bg rounded-3xl p-8">
              <p className="text-cyan-400 mb-3">HbA1c</p>
              <h3 className="text-4xl font-bold mb-4">5.2%</h3>
              <p className="text-gray-400">
                Estimates average blood glucose over ~3 months.
              </p>
            </div>

            <div className="card-bg rounded-3xl p-8">
              <p className="text-cyan-400 mb-3">Fasting Insulin</p>
              <h3 className="text-4xl font-bold mb-4">6 μIU/mL</h3>
              <p className="text-gray-400">
                Shows how hard your body works to control glucose.
              </p>
            </div>

            <div className="card-bg rounded-3xl p-8">
              <p className="text-cyan-400 mb-3">hs-CRP</p>
              <h3 className="text-4xl font-bold mb-4">0.7 mg/L</h3>
              <p className="text-gray-400">
                Marker of systemic inflammation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 4 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-8 text-red-400">
            Hidden Plaque
          </h2>

          <p className="text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Arteries can slowly accumulate plaque for decades.
            <br />
            No pain.
            <br />
            No warning.
            <br />
            Until catastrophe.
          </p>
        </motion.div>
      </section>

      {/* SCREEN 5 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-5xl md:text-8xl font-bold gradient-text leading-tight mb-8">
            BIOMARKERS
            <br />
            REVEAL TRUTH
          </h2>

          <p className="text-gray-400 text-2xl">
            before symptoms do.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
