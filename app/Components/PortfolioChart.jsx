"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
  ComposedChart,
} from "recharts";

const data = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 4780 },
  { name: "May", value: 5890 },
  { name: "Jun", value: 6390 },
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
        <p className="text-sm font-semibold text-secondary">
          ${payload[0].value}
        </p>
      </div>
    );
  }
  return null;
}

export default function PortfolioChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data}>
        {/* Gradient */}
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.8} /> 
            <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.1} /> 
          </linearGradient>
        </defs>

        {/* Grid */}
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="#9CA3AF" // gray color
          vertical={false}
        />

        {/* Axes */}
        <XAxis
          dataKey="name"
          tick={{ fontSize: 12, fill: "#9CA3AF" }}
          axisLine={false}
          tickLine={false}
        />

        <YAxis
          tick={{ fontSize: 12, fill: "#9CA3AF" }}
          axisLine={false}
          tickLine={false}
        />

        {/* Tooltip */}
        <Tooltip content={<CustomTooltip />} />

        {/* Area Glow */}
        <Area
          type="monotone"
          dataKey="value"
          stroke="none"
          fill="url(#lineGradient)"
        />

        {/* Line */}
        <Line
          type="monotone"
          dataKey="value"
          stroke="#06b6d4"
          strokeWidth={3}
          dot={false}
          activeDot={{
            r: 6,
            fill: "#06b6d4",
            stroke: "white",
            strokeWidth: 2,
          }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
