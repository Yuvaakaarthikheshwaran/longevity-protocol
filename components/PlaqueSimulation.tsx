"use client";

import { motion } from "framer-motion";

export default function PlaqueSimulation() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.2),rgba(15,23,42,0.9))] p-6 backdrop-blur-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.35),transparent_35%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.25),transparent_30%)]" />
      <div className="relative z-10 flex h-[360px] items-center justify-center">
        <div className="relative h-[240px] w-[320px] rounded-[50%] border border-sky-200/30 bg-[radial-gradient(circle_at_50%_45%,rgba(125,211,252,0.25),transparent_30%),linear-gradient(180deg,rgba(15,23,42,0.4),rgba(2,6,23,0.9))]">
          <div className="absolute top-[30%] left-[22%] h-[60px] w-[60px] rounded-full bg-sky-100/15 blur-[2px]" />
          <div className="absolute bottom-[28%] right-[22%] h-[90px] w-[90px] rounded-full bg-rose-400/15 blur-[2px]" />
          <motion.div
            animate={{ scale: [1, 1.04, 1], x: [0, 6, -4, 0], y: [0, -8, 6, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[40%] top-[44%] h-[80px] w-[80px] rounded-full border border-rose-300/30 bg-rose-500/10"
          />
        </div>
      </div>
    </div>
  );
}
