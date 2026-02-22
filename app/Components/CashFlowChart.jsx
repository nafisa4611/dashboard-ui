"use client";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const data = [
  { name: "Mon", income: 400, expense: 240 },
  { name: "Tue", income: 300, expense: 139 },
  { name: "Wed", income: 520, expense: 380 },
  { name: "Thu", income: 278, expense: 390 },
  { name: "Fri", income: 689, expense: 480 },
  { name: "Sat", income: 400, expense: 240 },
  { name: "Sun", income: 300, expense: 200 },
];

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="backdrop-blur-xl bg-[#111111]/90 border border-zinc-800 rounded-xl px-4 py-3 shadow-2xl">
        <p className="text-[10px] text-zinc-500 uppercase font-bold mb-2">{label}</p>
        <div className="space-y-1 text-sm">
          <p className="text-[#bfff00] font-medium">Income: ${payload[0].value}</p>
          <p className="text-zinc-400 font-medium">Expense: ${payload[1].value}</p>
        </div>
      </div>
    );
  }
  return null;
}

export default function CashFlowChart() {
  return (
    <div className="w-full h-[260px]">
      <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} barGap={6} barCategoryGap={20}>
        {/* Gradient Colors */}
        <defs>
          <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.9} /> {/* Purple */}
            <stop offset="100%" stopColor="#c4b5fd" stopOpacity={0.5} /> {/* Light Purple */}
          </linearGradient>

          <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} content={<CustomTooltip />} />

        {/* Grid */}
        <CartesianGrid strokeDasharray="3 3" stroke="#9CA3AF" vertical={false} />

        {/* Axes */}
        <XAxis
          dataKey="name"
          tick={{ fontSize: 12, fill: "#9CA3AF" }} // gray axis
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fontSize: 12, fill: "#9CA3AF" }} // gray axis
          axisLine={false}
          tickLine={false}
        />

        {/* Tooltip */}
        <Tooltip content={<CustomTooltip />} />

        {/* Legend */}
        <Legend iconType="circle" wrapperStyle={{ fontSize: "12px" }} />

        {/* Bars */}
        <Bar dataKey="income" fill="url(#income)" radius={[6, 6, 0, 0]} />
        <Bar dataKey="expense" fill="url(#expense)" radius={[6, 6, 0, 0]} />
        </defs>
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
}