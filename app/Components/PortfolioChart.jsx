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
  ReferenceLine,
  Area,
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
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-surface/90 backdrop-blur border border-border rounded-xl px-4 py-2 shadow-xl">
      <p className="text-xs text-muted">{label}</p>
      <p className="text-sm font-semibold text-primary">
        ${payload[0].value.toLocaleString()}
      </p>
    </div>
  );
}

export default function PortfolioChart() {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" aspect={2.6}>
        <ComposedChart data={data}>
          <defs>
            <linearGradient id="portfolioGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563EB" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#2563EB" stopOpacity={0.02} />
            </linearGradient>
          </defs>

          <CartesianGrid
            vertical={false}
            strokeOpacity={0.08}
          />

          <XAxis
            dataKey="name"
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip content={<CustomTooltip />} />

          {/* Target / Average Line */}
          <ReferenceLine
            y={6000}
            stroke="#9CA3AF"
            strokeDasharray="4 4"
            strokeOpacity={0.5}
          />

          <Area
            type="monotone"
            dataKey="value"
            fill="url(#portfolioGrad)"
            stroke="none"
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563EB"
            strokeWidth={3}
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
      
    </div>
  );
}
