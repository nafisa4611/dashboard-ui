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
      <div className="
          backdrop-blur-xl bg-surface/80
          border border-border
          rounded-xl px-4 py-3 shadow-xl
        ">
        <p className="text-xs text-muted mb-1">{label}</p>
        <div className="space-y-1 text-sm">
          <p className="text-purple-500 font-semibold">
            Income: ${payload[0].value}
          </p>
          <p className="text-red-500 font-semibold">
            Expense: ${payload[1].value}
          </p>
        </div>
      </div>
    );
  }
  return null;
}

export default function CashFlowChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} barGap={6} barCategoryGap={20}>
        {/* Gradient Colors */}
        <defs>
          <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.9} /> {/* Purple */}
            <stop offset="100%" stopColor="#c4b5fd" stopOpacity={0.5} /> {/* Light Purple */}
          </linearGradient>

          <linearGradient id="expense" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ef4444" stopOpacity={0.9} /> {/* Red */}
            <stop offset="100%" stopColor="#fca5a5" stopOpacity={0.5} />
          </linearGradient>
        </defs>

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
      </BarChart>
    </ResponsiveContainer>
  );
}
