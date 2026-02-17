"use client";

import Badge from "../ui/Badge";



const transactions = [
  {
    id: 1,
    date: "2024-01-12",
    description: "Salary",
    amount: 4500,
    type: "income",
    status: "Completed",
  },
  {
    id: 2,
    date: "2024-01-15",
    description: "Groceries",
    amount: -120,
    type: "expense",
    status: "Completed",
  },
  {
    id: 3,
    date: "2024-01-18",
    description: "Netflix Subscription",
    amount: -15,
    type: "expense",
    status: "Pending",
  },
  {
    id: 4,
    date: "2024-01-20",
    description: "Freelance Payment",
    amount: 980,
    type: "income",
    status: "Completed",
  },
];

export default function TransactionsTable() {
  return (
    <div className="bg-surface rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-surface-muted text-muted">
          <tr>
            <th className="px-4 py-3 text-left">Date</th>
            <th className="px-4 py-3 text-left">Description</th>
            <th className="px-4 py-3 text-right">Amount</th>
            <th className="px-4 py-3 text-center">Status</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((tx) => (
            <tr
              key={tx.id}
              className="border-t border-border hover:bg-surface-muted transition"
            >
              <td className="px-4 py-3">{tx.date}</td>
              <td className="px-4 py-3">{tx.description}</td>
              <td
                className={`px-4 py-3 text-right font-medium ${
                  tx.amount > 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {tx.amount > 0 ? "+" : "-"}${Math.abs(tx.amount)}
              </td>
              <td className="px-4 py-3 text-center">
                <Badge status={tx.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
