"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { href: "/philosophy", label: "Philosophy" },
  { href: "/biomarkers", label: "Biomarkers" },
  { href: "/myths", label: "Myths" },
  { href: "/case-studies", label: "Case Studies" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/40 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-[0.45em] text-sky-200 uppercase">
          AEVERTINUS
        </Link>
        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {routes.map((route) => {
            const active = pathname === route.href;
            return (
              <Link
                key={route.href}
                href={route.href}
                className={`transition ${active ? "text-sky-200" : "hover:text-white"}`}
              >
                {route.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
