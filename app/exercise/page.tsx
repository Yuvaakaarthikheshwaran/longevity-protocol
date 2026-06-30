"use client";

import ScrollReveal from "@/components/ScrollReveal";
import SectionShell from "@/components/SectionShell";

export default function ExercisePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">
      <SectionShell>
        <div className="grid min-h-[80vh] items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <ScrollReveal>
            <p className="mb-6 text-sm uppercase tracking-[0.45em] text-sky-200/70">Exercise</p>
            <h1 className="text-5xl font-semibold tracking-[-0.08em] md:text-7xl">
              MOVEMENT IS
              <br />
              <span className="gradient-text">A BIOLOGICAL REQUIREMENT.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="glass-panel rounded-[2.5rem] p-8">
              <p className="text-xl leading-8 text-slate-300">
                The body is designed to move under load, recover under stress, and adapt through consistent challenge.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionShell>

      <SectionShell background="surface">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Strength", "Preserves muscle, bone density, and resilient metabolism."],
            ["Cardio", "Improves oxygen transport, VO₂ max, and vascular health."],
            ["Mobility", "Improves control, injury resistance, and long-term function."],
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
