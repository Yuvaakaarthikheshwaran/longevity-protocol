"use client";

import ScrollReveal from "@/components/ScrollReveal";
import SectionShell from "@/components/SectionShell";

export default function SupplementsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">
      <SectionShell>
        <div className="grid min-h-[80vh] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <ScrollReveal>
            <p className="mb-6 text-sm uppercase tracking-[0.45em] text-sky-200/70">Supplements</p>
            <h1 className="text-5xl font-semibold tracking-[-0.08em] md:text-7xl">
              SUPPLEMENTS ARE
              <br />
              <span className="gradient-text">TOOLS, NOT MAGIC.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="glass-panel rounded-[2.5rem] p-8">
              <p className="text-xl leading-8 text-slate-300">
                The question is not natural or synthetic; it is whether the intervention is safe, effective, and evidence-backed.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionShell>

      <SectionShell background="surface">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            ["Creatine", "Supported evidence for strength, lean mass, and cognition."],
            ["Omega-3", "Useful for cardiovascular and inflammatory support."],
            ["Vitamin D", "A foundational nutrient for immune, hormonal, and musculoskeletal health."],
            ["Magnesium", "Supports sleep, muscle recovery, and nervous system function."],
          ].map(([title, description], index) => (
            <ScrollReveal key={title} delay={index * 0.08}>
              <div className="glass-panel rounded-[2rem] p-8">
                <h3 className="text-2xl font-semibold text-sky-200">{title}</h3>
                <p className="mt-4 text-slate-300">{description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <ScrollReveal>
            <div className="glass-panel rounded-[2rem] p-8">
              <h2 className="text-4xl font-semibold tracking-[-0.05em]">How to use them</h2>
              <ul className="mt-6 space-y-4 text-slate-300">
                <li>• Use supplements to cover known gaps, not replace the fundamentals.</li>
                <li>• Prioritize quality, third-party testing, and clean formulations.</li>
                <li>• Track outcomes over time with biomarkers and symptom monitoring.</li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="glass-panel rounded-[2rem] p-8">
              <h2 className="text-4xl font-semibold tracking-[-0.05em]">The safest mindset</h2>
              <ul className="mt-6 space-y-4 text-slate-300">
                <li>• Start with the basics: sleep, diet, movement, stress management.</li>
                <li>• Consider supplements only after labs, symptoms, and goals are clear.</li>
                <li>• Seek clinician guidance for medical conditions, medications, or long-term stacks.</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </SectionShell>
    </main>
  );
}
