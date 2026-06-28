"use client";

import { motion } from "framer-motion";

export default function Hero3D() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      <div className="bg-orb w-[260px] h-[260px] bg-cyan-500/30"></div>
      <div className="bg-orb w-[220px] h-[220px] bg-blue-500/20 absolute top-20 left-20"></div>
      <div className="bg-orb w-[220px] h-[220px] bg-purple-500/20 absolute bottom-20 right-20"></div>

      <motion.div
        animate={{
          rotateY: [0, 180, 360],
          rotateX: [0, 8, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative w-[280px] h-[280px] rounded-full border border-cyan-400/20 glow"
        style={{
          transformStyle: "preserve-3d",
          background:
            "radial-gradient(circle, rgba(0,217,255,0.18), rgba(0,0,0,0))",
        }}
      >
        <div className="absolute inset-8 rounded-full border border-cyan-400/20"></div>
        <div className="absolute inset-16 rounded-full border border-blue-400/20"></div>

        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyan-400/20"></div>
        <div className="absolute left-1/2 top-0 h-full w-[1px] bg-cyan-400/20"></div>
      </motion.div>
    </div>
  );
}
