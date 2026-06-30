"use client";

import ScrollReveal from "@/components/ScrollReveal";
import SectionShell from "@/components/SectionShell";

export default function NutritionPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">
      <SectionShell>
        <div className="grid min-h-[80vh] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <ScrollReveal>
            <p className="mb-6 text-sm uppercase tracking-[0.45em] text-sky-200/70">Nutrition</p>
            <h1 className="text-5xl font-semibold tracking-[-0.08em] md:text-7xl">
              FOOD IS NOT
              <br />
              <span className="gradient-text">JUST CALORIES.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="glass-panel rounded-[2.5rem] p-8">
              <p className="text-xl leading-8 text-slate-300">
                Every meal transmits signals that shape insulin, hormones, inflammation, and cellular adaptation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionShell>

      <SectionShell background="surface">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Protein", "Supports muscle, repair, enzyme function, and satiety."],
            ["Fats", "Fuel for hormones, nerve signaling, and membrane integrity."],
            ["Carbs", "The right amount supports training, recovery, and performance."],
          ].map(([title, description], index) => (
            <ScrollReveal key={title} delay={index * 0.1}>
              <div className="glass-panel rounded-[2rem] p-8">
                <h3 className="text-2xl font-semibold text-sky-200">{title}</h3>
                <p className="mt-4 text-slate-300">{description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionShell>
    </main>
  );
}
