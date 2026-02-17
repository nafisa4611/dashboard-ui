
"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Groceries", "Utilities", "Entertainment", "Other"],
  datasets: [
    {
      label: "Spending",
      data: [450, 120, 300, 200],
      backgroundColor: [
        "rgba(21, 93, 252, 0.7)",
        "rgba(220, 38, 38, 0.7)",
        "rgba(34, 197, 94, 0.7)",
        "rgba(234, 179, 8, 0.7)",
      ],
      borderColor: ["#155DFC", "#DC2626", "#22C55E", "#EAB308"],
      borderWidth: 1,
    },
  ],
};

export default function SpendingDonut() {
  return (
    <div className="p-6 rounded-2xl bg-surface border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <h3 className="text-textColor font-semibold mb-4">Spending Breakdown</h3>
      <Pie data={data} />
    </div>
  );
}
