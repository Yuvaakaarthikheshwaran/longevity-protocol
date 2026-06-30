import Link from "next/link";

const columns = [
  {
    title: "Systems",
    links: [
      ["Philosophy", "/philosophy"],
      ["Biomarkers", "/biomarkers"],
      ["Nutrition", "/nutrition"],
      ["Exercise", "/exercise"],
    ],
  },
  {
    title: "Recovery",
    links: [
      ["Sleep", "/sleep"],
      ["Supplements", "/supplements"],
      ["Case Studies", "/case-studies"],
      ["Myths", "/myths"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.45em] text-sky-200/70">AEVERTINUS</p>
            <p className="mt-4 max-w-lg text-slate-300">
              Precision longevity intelligence for the hidden biological reality of the human body.
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm uppercase tracking-[0.35em] text-sky-200/70">{column.title}</h3>
              <ul className="mt-5 space-y-3 text-slate-300">
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
