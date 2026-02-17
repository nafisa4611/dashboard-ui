"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

const data = {
  labels: ["Groceries", "Utilities", "Entertainment", "Other"],
  datasets: [
    {
      data: [450, 120, 300, 200],
      backgroundColor: ["#155DFC", "#DC2626", "#22C55E", "#EAB308"],
      borderWidth: 0,
    },
  ],
};

export default function SpendingDonut() {
  return (
    <div className="h-full p-6 rounded-3xl bg-surface border border-border 
    shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">

      <h3 className="text-textColor font-semibold mb-4">
        Spending Breakdown
      </h3>

      <div className="relative flex-1 flex items-center justify-center">

        <Doughnut data={data} />

        {/* Center */}
        <div className="absolute text-center">
          <p className="text-xs text-muted">Total</p>
          <p className="text-lg font-semibold text-textColor">
            $1,070
          </p>
        </div>

      </div>

    </div>
  );
}
