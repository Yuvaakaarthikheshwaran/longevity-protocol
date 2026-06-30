"use client";

import ScrollReveal from "@/components/ScrollReveal";
import SectionShell from "@/components/SectionShell";

export default function PhilosophyPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">
      <SectionShell>
        <div className="grid min-h-[82vh] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <ScrollReveal>
            <p className="mb-6 text-sm uppercase tracking-[0.45em] text-sky-200/70">Philosophy</p>
            <h1 className="text-5xl font-semibold tracking-[-0.08em] md:text-7xl">
              HUMANS EVOLVED
              <br />
              <span className="gradient-text">TO SURVIVE.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="glass-panel rounded-[2.5rem] p-8">
              <p className="text-xl leading-8 text-slate-300">
                We do not believe perception is the same as truth. The senses are useful for survival, not complete understanding.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionShell>

      <SectionShell background="surface">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            ["Reality", "Biology obeys laws whether we feel them or not."],
            ["Systems", "Cells, arteries, hormones, and the brain are one integrated network."],
            ["Measurement", "The fastest path to better health is precise observation."],
          ].map(([title, description], index) => (
            <ScrollReveal key={title} delay={index * 0.12}>
              <div className="glass-panel rounded-[2rem] p-8">
                <h3 className="text-3xl font-semibold text-sky-200">{title}</h3>
                <p className="mt-4 text-slate-300">{description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <ScrollReveal>
          <div className="text-center">
            <p className="mb-6 text-sm uppercase tracking-[0.45em] text-sky-200/70">Position</p>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              COMFORT IS NOT A HEALTH STRATEGY.
            </h2>
          </div>
        </ScrollReveal>
      </SectionShell>
    </main>
  );
}
