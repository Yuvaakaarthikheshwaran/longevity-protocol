"use client";

import ScrollReveal from "@/components/ScrollReveal";
import SectionShell from "@/components/SectionShell";

export default function SleepPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">
      <SectionShell>
        <div className="grid min-h-[80vh] items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <ScrollReveal>
            <p className="mb-6 text-sm uppercase tracking-[0.45em] text-sky-200/70">Sleep</p>
            <h1 className="text-5xl font-semibold tracking-[-0.08em] md:text-7xl">
              SLEEP IS NOT
              <br />
              <span className="gradient-text">REST. IT IS REPAIR.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="glass-panel rounded-[2.5rem] p-8">
              <p className="text-xl leading-8 text-slate-300">
                While the body sleeps, hormones rebalance, tissue repairs, memory consolidates, and the nervous system recovers.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionShell>

      <SectionShell background="surface">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Deep sleep", "Growth hormone release, tissue repair, immune restoration."],
            ["REM", "Learning, emotional processing, memory integration."],
            ["Light sleep", "Stabilizes cycles and supports nightly recovery."],
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
