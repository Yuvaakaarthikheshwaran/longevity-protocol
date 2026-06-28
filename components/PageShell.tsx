"use client";

import { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  prev?: string;
  next?: string;
};

export default function PageShell({
  children,
  prev,
  next,
}: PageShellProps) {
  return (
    <main className="min-h-screen text-white overflow-x-hidden relative">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold gradient-text">
            AEVUM
          </a>

          <div className="flex gap-6 text-sm md:text-base text-gray-300">
            <a href="/philosophy">Philosophy</a>
            <a href="/biomarkers">Biomarkers</a>
            <a href="/myths">Myths</a>
          </div>
        </div>
      </nav>

      <div>{children}</div>

      {/* PAGE NAV */}
      <div className="fixed bottom-6 left-0 w-full z-50 px-6">
        <div className="max-w-7xl mx-auto flex justify-between">
          {prev ? (
            <a href={prev} className="secondary-btn">
              ← Previous
            </a>
          ) : (
            <div />
          )}

          {next ? (
            <a href={next} className="primary-btn">
              Next →
            </a>
          ) : null}
        </div>
      </div>
    </main>
  );
}
