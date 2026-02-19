"use client";

import {
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Line,
  ComposedChart,
} from "recharts";

const data = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 4780 },
  { name: "May", value: 5890 },
  { name: "Jun", value: 6390 },
  { name: "Jul", value: 7390 },
  { name: "Aug", value: 7890 },
  { name: "Sep", value: 6560 },
  { name: "Oct", value: 8390 },
  { name: "Nov", value: 8839 },
  { name: "Dec", value: 9390 },
];

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div
        className="
        backdrop-blur-xl bg-surface/80
        border border-border
        rounded-xl px-4 py-3 shadow-xl
      "
      >
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
    <div
      className="
      relative w-full h-full p-6 rounded-3xl overflow-hidden
      bg-gradient-to-br from-white/60 to-white/30
      dark:from-white/10 dark:to-white/5
      backdrop-blur-xl
      border border-white/20
      shadow-[0_8px_30px_rgba(0,0,0,0.08)]
      hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
      transition-all duration-500
    "
    >
      {/* Glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-40" />

      {/* Header */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div>
          <h3 className="text-textColor font-semibold text-lg">
            Portfolio Value
          </h3>

          <p className="text-3xl font-bold text-primary mt-1">$9,390</p>

          <span className="text-green-500 text-sm font-medium">
            +18.2% this year
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-[260px] relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#9CA3AF"
              vertical={false}
              opacity={0.2}
            />

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

            <Tooltip content={<CustomTooltip />} />

            <Bar
              dataKey="value"
              fill="#bfff00"
              radius={[4, 4, 0, 0]}
              barSize={30}
            />

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
      </div>

      {/* FLOATING STAT */}
      <div
        className="
    absolute top-6 right-6
    hidden lg:block
    bg-surface/80 backdrop-blur
    border border-border
    rounded-xl px-4 py-3 shadow
  "
      >
        <p className="text-xs text-muted">Monthly Profit</p>
        <p className="text-sm font-semibold text-success">$1,240</p>
      </div>
    </div>
  );
}
