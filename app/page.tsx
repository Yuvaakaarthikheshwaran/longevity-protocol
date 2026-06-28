"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen text-white overflow-x-hidden relative">

      <div className="neural-bg">
  <div className="node top-[18%] left-[20%]"></div>
  <div className="node top-[30%] left-[55%]"></div>
  <div className="node top-[48%] left-[35%]"></div>
  <div className="node top-[70%] left-[70%]"></div>
  <div className="node top-[78%] left-[22%]"></div>

  <div className="line top-[18.5%] left-[20.5%] w-[420px] rotate-[18deg]"></div>
  <div className="line top-[30.5%] left-[55.5%] w-[260px] rotate-[130deg]"></div>
  <div className="line top-[48.5%] left-[35.5%] w-[500px] rotate-[25deg]"></div>
</div>
      {/* BACKGROUND FX */}
      <div className="scan-line"></div>

      <div className="bg-orb fixed w-[300px] h-[300px] bg-cyan-500/20 top-[10%] left-[10%]"></div>
      <div className="bg-orb fixed w-[260px] h-[260px] bg-blue-500/20 top-[50%] right-[10%]"></div>
      <div className="bg-orb fixed w-[280px] h-[280px] bg-purple-500/20 bottom-[10%] left-[40%]"></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="text-2xl font-bold gradient-text">AEVUM</h1>
          <div className="flex gap-6 text-sm md:text-base text-gray-300">
            <a href="/philosophy">Philosophy</a>
            <a href="/myths">Myths</a>
            <a href="/biomarkers">Biomarkers</a>
          </div>
        </div>
      </nav>

      {/* SCREEN 1 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <p className="text-cyan-400 tracking-[0.4em] uppercase mb-8">
            AEVUM
          </p>

          <h1 className="text-5xl md:text-[8rem] font-black leading-tight float-slow">
            YOU ARE
            <br />
            <span className="gradient-text">BIOLOGICAL MACHINERY</span>
          </h1>

          <p className="mt-8 text-gray-400 text-lg md:text-2xl">
            Carbon became conscious.
            <br />
            Biology remained law.
          </p>
        </motion.div>
      </section>

      {/* SCREEN 2 */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }}>
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
      <section className="min-h-screen flex items-center justify-center px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }}>
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

      {/* CORE SYSTEMS */}
      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 gradient-text">
            Core Systems
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Sleep", "/sleep"],
              ["Nutrition", "/nutrition"],
              ["Exercise", "/exercise"],
              ["Biomarkers", "/biomarkers"],
              ["Supplements", "/supplements"],
              ["Philosophy", "/philosophy"],
            ].map(([name, link]) => (
              <a
                key={name}
                href={link}
                className="card-bg rounded-3xl p-10 text-2xl font-bold glow"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MYTHS */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
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

      {/* FINAL */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-5xl md:text-8xl font-bold gradient-text leading-tight mb-8">
            LONGEVITY BEGINS
            <br />
            WHEN BELIEF STOPS
          </h2>

          <p className="text-gray-400 text-2xl mb-8">
            and reality starts.
          </p>

          <a href="/philosophy" className="primary-btn inline-block">
            Begin
          </a>
        </motion.div>
      </section>
    </main>
  );
}
