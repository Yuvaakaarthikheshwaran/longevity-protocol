"use client";

import { motion } from "framer-motion";
import BiomarkerDashboard from "@/components/BiomarkerDashboard";
import HumanBody from "@/components/HumanBody";
import PerformanceTrendChart from "@/components/PerformanceTrendChart";
import PlaqueSimulation from "@/components/PlaqueSimulation";
import ScrollReveal from "@/components/ScrollReveal";
import SectionShell from "@/components/SectionShell";

export default function BiomarkersPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">
      <SectionShell>
        <div className="grid min-h-[80vh] items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <ScrollReveal>
            <p className="mb-6 text-sm uppercase tracking-[0.45em] text-sky-200/70">Biomarkers</p>
            <h1 className="text-5xl font-semibold tracking-[-0.08em] md:text-7xl">
              YOU CANNOT SEE
              <br />
              <span className="gradient-text">INSIDE YOUR BODY</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-slate-300 md:text-2xl">
              The most important signals are the ones that appear before symptoms.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="glass-panel rounded-[2.5rem] p-8">
              <HumanBody />
            </div>
          </ScrollReveal>
        </div>
      </SectionShell>

      <SectionShell background="surface">
        <div className="grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <ScrollReveal>
            <p className="mb-6 text-sm uppercase tracking-[0.45em] text-sky-200/70">Signal latency</p>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              Symptoms arrive late.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="glass-panel rounded-[2rem] p-8 text-slate-300">
              <p className="text-xl leading-8">
                Disease often begins silently. Plaque can accumulate. Insulin resistance can rise. Inflammation can stay hidden for years.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionShell>

      <SectionShell>
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="mb-6 text-sm uppercase tracking-[0.45em] text-sky-200/70">Operating system</p>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              Medical dashboard
            </h2>
          </div>
        </ScrollReveal>
        <BiomarkerDashboard />
      </SectionShell>

      <SectionShell background="surface">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <ScrollReveal>
            <div>
              <p className="mb-6 text-sm uppercase tracking-[0.45em] text-sky-200/70">Trend analysis</p>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
                Performance over time.
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <PerformanceTrendChart />
          </ScrollReveal>
        </div>
      </SectionShell>

      <SectionShell background="surface">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <ScrollReveal>
            <PlaqueSimulation />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mb-6 text-sm uppercase tracking-[0.45em] text-sky-200/70">Hidden plaque</p>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              The artery wall keeps score.
            </h2>
            <p className="mt-6 text-lg text-slate-300">
              Atherosclerotic burden can accumulate quietly for decades. The body can be under stress long before there is pain, warning, or a clear crisis.
            </p>
          </ScrollReveal>
        </div>
      </SectionShell>

      <SectionShell background="accent">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.45em] text-sky-200/70">Truth before symptoms</p>
          <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
            BIOMARKERS REVEAL THE REAL SYSTEM.
          </h2>
        </motion.div>
      </SectionShell>
    </main>
  );
}
