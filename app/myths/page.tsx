"use client";

import ScrollReveal from "@/components/ScrollReveal";
import SectionShell from "@/components/SectionShell";

export default function MythsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">
      <SectionShell>
        <div className="grid min-h-[80vh] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <ScrollReveal>
            <p className="mb-6 text-sm uppercase tracking-[0.45em] text-rose-300/80">Myths</p>
            <h1 className="text-5xl font-semibold tracking-[-0.08em] md:text-7xl">
              FALSE BELIEFS
              <br />
              <span className="gradient-text">KILL LONGEVITY.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="glass-panel rounded-[2.5rem] p-8">
              <p className="text-xl leading-8 text-slate-300">
                A person can look fine, feel fine, and still be on a trajectory toward disease. Visibility is not the same as health.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionShell>

      <SectionShell background="surface">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            ["Natural = safe", "Arsenic and cyanide are natural. Safety depends on dose, context, and mechanism."],
            ["Artificial = harmful", "Synthetic insulin is lifesaving; the key question is evidence, not origin."],
            ["Looking healthy = healthy", "A body can look stable while biomarkers say otherwise."],
            ["I feel fine", "Symptoms often appear after the system is already damaged."],
          ].map(([title, description], index) => (
            <ScrollReveal key={title} delay={index * 0.08}>
              <div className="glass-panel rounded-[2rem] p-8">
                <h3 className="text-2xl font-semibold text-rose-200">{title}</h3>
                <p className="mt-4 text-slate-300">{description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionShell>
    </main>
  );
}
