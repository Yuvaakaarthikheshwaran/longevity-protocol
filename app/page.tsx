"use client";

import Link from "next/link";
import NeuralBackground from "@/components/NeuralBackground";
import Hero3D from "@/components/Hero3D";
import ScrollReveal from "@/components/ScrollReveal";
import SectionShell from "@/components/SectionShell";

const systemMetrics = [
  { label: "ApoB", value: "85" },
  { label: "HbA1c", value: "5.2%" },
  { label: "hs-CRP", value: "0.7" },
  { label: "VO₂ max", value: "52" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">
      <NeuralBackground />
      <div className="scan-line" />

      <section className="relative z-10 flex min-h-screen items-center px-6 pt-24">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <ScrollReveal delay={0.05}>
              <p className="mb-6 text-sm uppercase tracking-[0.5em] text-sky-200/70">AEVERTINUS</p>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <h1 className="text-5xl font-semibold leading-none tracking-[-0.08em] md:text-7xl lg:text-8xl">
                YOU ARE NOT <span className="gradient-text">A PERSON.</span>
                <br />
                YOU ARE BIOLOGY.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.28}>
              <p className="mt-8 max-w-2xl text-lg text-slate-300 md:text-2xl">
                Hidden biological reality is the only truth that matters. We expose it with precision instruments, data, and a clinical lens on every system.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/philosophy" className="primary-btn">
                  Enter the system
                </Link>
                <Link href="/biomarkers" className="secondary-btn">
                  View biomarkers
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} className="glass-panel rounded-[2.5rem] p-6">
            <Hero3D />
          </ScrollReveal>
        </div>
      </section>

      <SectionShell id="signal" background="surface">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <ScrollReveal>
            <p className="mb-6 text-sm uppercase tracking-[0.45em] text-sky-200/70">Signal</p>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              Most disease is invisible before it becomes a diagnosis.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="glass-panel rounded-[2rem] p-8">
              <p className="text-lg leading-8 text-slate-300">
                Plaque accumulates. insulin resistance rises. inflammation lingers. The body shows patterns long before symptoms emerge.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {systemMetrics.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.35em] text-sky-200/50">{item.label}</p>
                    <p className="mt-2 text-3xl font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </SectionShell>

      <SectionShell background="default">
        <div className="space-y-12">
          <ScrollReveal>
            <div className="text-center">
              <p className="mb-6 text-sm uppercase tracking-[0.45em] text-sky-200/70">Biological systems</p>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
                A single operating system for the body.
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Metabolism", "The energy economy that determines aging speed."],
              ["Cardiovascular", "The pressure, lipids, and plaque dynamics inside the vessel wall."],
              ["Inflammation", "A hidden driver of fatigue, damage, and disease progression."],
              ["Recovery", "Sleep, repair, and hormonal renewal that determine resilience."],
            ].map(([title, description], index) => (
              <ScrollReveal key={title} delay={index * 0.08}>
                <div className="glass-panel rounded-[2rem] p-6">
                  <div className="mb-6 h-2 w-16 rounded-full bg-gradient-to-r from-sky-300 to-blue-500" />
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="mt-4 text-slate-300">{description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell background="surface">
        <div className="space-y-12">
          <ScrollReveal>
            <div className="text-center">
              <p className="mb-6 text-sm uppercase tracking-[0.45em] text-sky-200/70">Protocol pillars</p>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
                The complete longevity operating system.
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Nutrition", "/nutrition", "Food as biological information and metabolic signal."],
              ["Exercise", "/exercise", "Strength, cardio, mobility, and long-term function."],
              ["Sleep", "/sleep", "The repair phase that governs hormones, memory, and recovery."],
              ["Supplements", "/supplements", "Evidence-based tools for the gaps that remain."],
            ].map(([name, href, description], index) => (
              <ScrollReveal key={name} delay={index * 0.08}>
                <Link href={href} className="block rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-sky-200/30">
                  <div className="mb-6 h-2 w-16 rounded-full bg-gradient-to-r from-sky-300 to-blue-500" />
                  <h3 className="text-2xl font-semibold">{name}</h3>
                  <p className="mt-4 text-slate-300">{description}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell background="accent">
        <ScrollReveal className="text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.45em] text-sky-200/70">Philosophy</p>
          <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
            BIOLOGY DOES NOT NEGOTIATE.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-300 md:text-2xl">
            Better decisions start with honest measurement.
          </p>
          <Link href="/philosophy" className="primary-btn mt-10">
            Explore the philosophy
          </Link>
        </ScrollReveal>
      </SectionShell>
    </main>
  );
}
