"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", ApoB: 78, HbA1c: 5.1, hsCRP: 0.6 },
  { month: "Feb", ApoB: 81, HbA1c: 5.2, hsCRP: 0.7 },
  { month: "Mar", ApoB: 79, HbA1c: 5.0, hsCRP: 0.5 },
  { month: "Apr", ApoB: 83, HbA1c: 5.3, hsCRP: 0.8 },
  { month: "May", ApoB: 80, HbA1c: 5.1, hsCRP: 0.6 },
  { month: "Jun", ApoB: 77, HbA1c: 5.0, hsCRP: 0.5 },
];

export default function PerformanceTrendChart() {
  return (
    <div className="h-80 w-full rounded-[2rem] border border-white/10 bg-slate-950/40 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.4} />
          <XAxis dataKey="month" stroke="#94a3b8" tickLine={false} axisLine={false} />
          <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(2, 6, 23, 0.92)",
              border: "1px solid rgba(148, 163, 184, 0.2)",
              borderRadius: "1rem",
            }}
          />
          <Line type="monotone" dataKey="ApoB" stroke="#38bdf8" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="HbA1c" stroke="#60a5fa" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="hsCRP" stroke="#a5b4fc" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
