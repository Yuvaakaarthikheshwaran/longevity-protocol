"use client";

import { motion } from "framer-motion";

const biomarkers = [
  { name: "ApoB", value: "85", unit: "mg/dL", range: "< 70", note: "Atherogenic particles" },
  { name: "HbA1c", value: "5.2", unit: "%", range: "< 5.7", note: "3-month glucose signal" },
  { name: "Insulin", value: "6", unit: "μIU/mL", range: "2-6", note: "Metabolic stress" },
  { name: "hs-CRP", value: "0.7", unit: "mg/L", range: "< 1.0", note: "Inflammation" },
  { name: "Glucose", value: "92", unit: "mg/dL", range: "70-99", note: "Fasted state" },
  { name: "LDL", value: "102", unit: "mg/dL", range: "< 100", note: "Cholesterol transport" },
];

export default function BiomarkerDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {biomarkers.map((biomarker, index) => (
        <motion.div
          key={biomarker.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.08 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="text-sm uppercase tracking-[0.35em] text-sky-200/70">{biomarker.name}</span>
            <span className="rounded-full border border-sky-100/20 px-3 py-1 text-xs text-sky-100/70">{biomarker.range}</span>
          </div>
          <div className="mb-4 flex items-end gap-2">
            <span className="text-5xl font-semibold text-white">{biomarker.value}</span>
            <span className="pb-2 text-sm text-slate-400">{biomarker.unit}</span>
          </div>
          <div className="mb-6 h-2 rounded-full bg-slate-800">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500"
              style={{ width: `${Math.min(100, Number(biomarker.value) * 1.2)}%` }}
            />
          </div>
          <p className="text-sm text-slate-300">{biomarker.note}</p>
        </motion.div>
      ))}
    </div>
  );
}
