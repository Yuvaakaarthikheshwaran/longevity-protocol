"use client";

import Link from "next/link";
import Hero3D from "@/components/Hero3D";
import ScrollReveal from "@/components/ScrollReveal";
import SectionShell from "@/components/SectionShell";

const pillars = [
  { title: "Nutrition", href: "/nutrition", blurb: "Fuel the body with precision, structure, and intention." },
  { title: "Exercise", href: "/exercise", blurb: "Train for strength, resilience, and sustained vitality." },
  { title: "Sleep", href: "/sleep", blurb: "Recover through circadian rhythm, restoration, and depth." },
  { title: "Supplements", href: "/supplements", blurb: "Use evidence-backed tools to close the gaps." },
];

const metrics = [
  { label: "ApoB", value: "85" },
  { label: "HbA1c", value: "5.2%" },
  { label: "hs-CRP", value: "0.7" },
  { label: "VO₂ max", value: "52" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <section className="relative z-10 flex min-h-screen items-center px-6 pt-24">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[0.98fr_1.02fr]">
          <div>
            <ScrollReveal delay={0.05}>
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.52em] text-[color:var(--muted)]">
                AEVERTINUS
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <h1 className="text-5xl font-black leading-[0.94] tracking-[-0.08em] md:text-7xl lg:text-8xl">
                Design your life
                <span className="gradient-text block">around the signals.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[color:var(--muted)] md:text-2xl">
                A precision platform for longevity, biomarker awareness, and the daily systems that quietly shape your future.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.28}>
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

          <ScrollReveal delay={0.18} className="glass-panel rounded-[2.5rem] p-6">
            <Hero3D />
          </ScrollReveal>
        </div>
      </section>

      <SectionShell id="signal" background="surface">
        <div className="grid items-center gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <ScrollReveal>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.5em] text-[color:var(--muted)]">
              Signal architecture
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.06em] md:text-6xl">
              The body reveals itself long before symptoms do.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="glass-panel rounded-[2.25rem] p-8">
              <p className="text-lg leading-8 text-[color:var(--muted)]">
                Measure the hidden drivers: inflammation, glucose control, vascular burden, recovery, and the systems that either accelerate or slow your biological age.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {metrics.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.38em] text-[color:var(--muted)]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </SectionShell>

      <SectionShell background="default">
        <div className="space-y-10">
          <ScrollReveal>
            <div className="text-center">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.52em] text-[color:var(--muted)]">
                Protocol pillars
              </p>
              <h2 className="text-4xl font-semibold tracking-[-0.06em] md:text-6xl">
                Four systems. One long-term strategy.
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 0.06}>
                <Link href={pillar.href} className="group block rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--primary)]/40">
                  <div className="mb-6 h-2 w-16 rounded-full bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)]" />
                  <h3 className="text-2xl font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">{pillar.blurb}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell background="accent">
        <ScrollReveal className="text-center">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.52em] text-[color:var(--muted)]">
            Philosophy
          </p>
          <h2 className="text-5xl font-semibold tracking-[-0.08em] md:text-7xl">
            Longevity is a design problem.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[color:var(--muted)] md:text-2xl">
            The best systems clarify the invisible, align the daily, and make the future feel actionable.
          </p>
          <Link href="/philosophy" className="primary-btn mt-10">
            Explore the philosophy
          </Link>
        </ScrollReveal>
      </SectionShell>
    </main>
  );
}
