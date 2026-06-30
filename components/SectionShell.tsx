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
      ? "bg-[linear-gradient(180deg,rgba(23,17,28,0.48),rgba(12,8,14,0.18))]"
      : background === "accent"
      ? "bg-[radial-gradient(circle_at_top,rgba(255,139,122,0.16),transparent_28%),linear-gradient(180deg,rgba(18,13,19,0.12),rgba(7,4,8,0.22))]"
      : "bg-transparent";

  return (
    <section id={id} className={`relative flex min-h-[100svh] items-center px-6 py-20 md:py-28 ${backgroundClass} ${className}`}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}
