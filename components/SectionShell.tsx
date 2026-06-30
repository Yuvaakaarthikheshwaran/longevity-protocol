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
      ? "bg-[linear-gradient(180deg,rgba(15,23,42,0.58),rgba(10,14,25,0.22))]"
      : background === "accent"
      ? "bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_26%),linear-gradient(180deg,rgba(14,28,45,0.12),rgba(7,12,22,0.32))]"
      : "bg-transparent";

  return (
    <section id={id} className={`relative flex min-h-[100svh] items-center px-6 py-20 md:py-28 ${backgroundClass} ${className}`}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}
