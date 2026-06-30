"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: "default" | "surface" | "accent";
};

export default function SectionShell({ children, id, className = "", background = "default" }: Props) {
  const backgroundClass =
    background === "surface"
      ? "bg-slate-900/40"
      : background === "accent"
      ? "bg-sky-500/10"
      : "bg-transparent";

  return (
    <section id={id} className={`relative px-6 py-24 md:py-32 ${backgroundClass} ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
