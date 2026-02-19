"use client";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
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
    /* We add a div wrapper with a min-height just to be safe */
    <div className="w-full h-full min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barGap={8} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
          
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: "#71717a" }}
            axisLine={false}
            tickLine={false}
            dy={10}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#71717a" }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} content={<CustomTooltip />} />

          {/* Noble Theme Bars: Lime for income, Dark Zinc for expenses */}
          <Bar 
            dataKey="income" 
            fill="#bfff00" 
            radius={[4, 4, 0, 0]} 
            animationDuration={1500}
          />
          <Bar 
            dataKey="expense" 
            fill="#27272a" 
            radius={[4, 4, 0, 0]} 
            animationDuration={1500}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}