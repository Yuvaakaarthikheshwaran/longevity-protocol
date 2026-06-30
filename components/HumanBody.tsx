"use client";

import { motion } from "framer-motion";

export default function HumanBody() {
  return (
    <div className="relative mx-auto flex h-[380px] w-[240px] items-center justify-center">
      <motion.div
        animate={{ rotate: [0, 4, -4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-[300px] w-[180px] rounded-[42%] border border-sky-300/40 bg-[radial-gradient(circle_at_top,#67e8f9,transparent_35%),linear-gradient(180deg,rgba(14,23,42,0.6),rgba(12,18,30,0.9))] shadow-[0_0_45px_rgba(34,211,238,0.18)]"
      >
        <div className="absolute left-1/2 top-12 h-[110px] w-[2px] -translate-x-1/2 bg-sky-200/40" />
        <div className="absolute left-1/2 top-[108px] h-[120px] w-[90px] -translate-x-1/2 rounded-t-[60px] border border-sky-100/25 bg-transparent" />
        <div className="absolute left-[28px] top-[128px] h-[100px] w-[36px] rounded-full border border-sky-100/30" />
        <div className="absolute right-[28px] top-[128px] h-[100px] w-[36px] rounded-full border border-sky-100/30" />
        <div className="absolute left-[66px] top-[230px] h-[90px] w-[16px] rounded-full bg-sky-100/10" />
        <div className="absolute right-[66px] top-[230px] h-[90px] w-[16px] rounded-full bg-sky-100/10" />
      </motion.div>
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.28),transparent_55%)] blur-3xl" />
    </div>
  );
}
