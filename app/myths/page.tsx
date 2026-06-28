"use client";

import { motion } from "framer-motion";

export default function MythsPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-8xl font-bold mb-6">
            MOST PEOPLE BELIEVE{" "}
            <span className="gradient-text">COMFORTING LIES</span>
          </h1>

          <p className="text-gray-400 max-w-4xl mx-auto text-lg md:text-2xl">
            Biology does not care what feels comfortable.
            It responds only to reality.
          </p>
        </motion.div>
      </section>

      {/* MYTH 1 */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto card-bg rounded-2xl p-10">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            Myth 1: “I look healthy, so I am healthy.”
          </h2>

          <p className="text-gray-300 text-lg mb-6">
            You can look lean, muscular, athletic, and energetic—and still have serious hidden disease.
          </p>

          <h3 className="text-2xl font-bold mb-4">What is plaque?</h3>

          <p className="text-gray-400 leading-relaxed mb-6">
            Plaque is dangerous buildup inside artery walls made of:
            <br />• Cholesterol
            <br />• Fat
            <br />• Inflammatory immune cells
            <br />• Calcium
          </p>

          <h3 className="text-2xl font-bold mb-4">What is ApoB?</h3>

          <p className="text-gray-400 leading-relaxed">
            ApoB is a protein found on cholesterol-carrying particles.
            Think of ApoB particles as delivery trucks carrying cholesterol.
            More trucks means more chances they enter artery walls and form plaque.
          </p>
        </div>
      </section>

      {/* MYTH 2 */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto card-bg rounded-2xl p-10">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            Myth 2: “Natural means safe.”
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Natural does not mean safe.
            <br /><br />
            Arsenic is natural.
            <br />Cyanide is natural.
            <br />Snake venom is natural.
            <br />Poisonous mushrooms are natural.
            <br /><br />
            The real question is:
            <br />Is it safe? Effective? Proven?
          </p>
        </div>
      </section>

      {/* MYTH 3 */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto card-bg rounded-2xl p-10">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            Myth 3: “Artificial means harmful.”
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Everything is chemistry.
            Your body is chemistry.
            Nature is chemistry.
            <br /><br />
            Synthetic insulin saves lives.
            Vaccines save millions.
            Antibiotics transformed medicine.
            <br /><br />
            Molecules do not care about origin.
            Only structure and biological effect matter.
          </p>
        </div>
      </section>

      {/* MYTH 4 */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto card-bg rounded-2xl p-10">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            Myth 4: “I’m young. I’ll fix it later.”
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Biology compounds.
            Damage compounds.
            <br /><br />
            Atherosclerosis develops over decades.
            Insulin resistance develops over years.
            Metabolic dysfunction accumulates silently.
          </p>
        </div>
      </section>

      {/* MYTH 5 */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto card-bg rounded-2xl p-10">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            Myth 5: “If I feel fine, everything is fine.”
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Some of the deadliest diseases are silent.
            <br /><br />
            High blood pressure often has no symptoms.
            Plaque buildup often has no symptoms.
            Prediabetes often has no symptoms.
          </p>
        </div>
      </section>

      {/* MYTH 6 */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto card-bg rounded-2xl p-10">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            Myth 6: “Supplements can replace lifestyle.”
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Biggest impact:
            <br />1. Sleep
            <br />2. Exercise
            <br />3. Nutrition
            <br />4. Body composition
            <br />5. Stress management
            <br />6. Supplements
          </p>
        </div>
      </section>

      {/* FINAL */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto card-bg rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            Final Reality
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Humans evolved to survive, not to perceive truth.
            <br /><br />
            We rationalize comfort.
            We defend comforting lies.
            We reject uncomfortable truths.
            <br /><br />
            But biology does not care.
            <br /><br />
            Cells obey chemistry.
            Arteries obey physics.
            Metabolism obeys biology.
            <br /><br />
            Longevity begins when belief stops and reality starts.
          </p>
        </div>
      </section>
    </main>
  );
}
