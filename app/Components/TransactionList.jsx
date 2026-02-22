"use client";

const transactions = [
  { id: "#1245", desc: "Adobe Illustrator", category: "Subscription", amount: "$32.00", date: "Feb 18, 2026", icon: "🎨" },
  { id: "#1244", desc: "Dribbble Pro", category: "Design", amount: "$15.00", date: "Feb 17, 2026", icon: "🏀" },
  { id: "#1243", desc: "Starbucks Coffee", category: "Food & Drink", amount: "$5.50", date: "Feb 17, 2026", icon: "☕" },
  { id: "#1242", desc: "Stripe Payout", category: "Income", amount: "+$2,400.00", date: "Feb 16, 2026", icon: "💰" },
];

export default function TransactionList() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-textColor">Transactions History</h3>
        <div className="flex gap-2">
           <input 
            type="text" 
            placeholder="Search ID..." 
            className="bg-surface-muted border border-border rounded-lg px-3 py-1.5 text-xs text-textColor outline-none focus:border-primary"
           />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-muted text-xs uppercase tracking-widest border-b border-border">
              <th className="pb-4 font-medium">Description</th>
              <th className="pb-4 font-medium">Transaction ID</th>
              <th className="pb-4 font-medium">Category</th>
              <th className="pb-4 font-medium">Amount</th>
              <th className="pb-4 font-medium">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {transactions.map((tx) => (
              <tr key={tx.id} className="group hover:bg-surface-muted/50 transition-colors">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 flex items-center justify-center bg-surface-muted rounded-lg text-lg">
                      {tx.icon}
                    </span>
                    <span className="font-medium text-textColor">{tx.desc}</span>
                  </div>
                </td>
                <td className="py-4 text-sm text-muted font-mono">{tx.id}</td>
                <td className="py-4">
                  <span className="px-2 py-1 rounded-md bg-surface-muted border border-border text-[10px] text-textColor font-medium">
                    {tx.category}
                  </span>
                </td>
                <td className={`py-4 font-semibold ${tx.amount.startsWith('+') ? 'text-primary' : 'text-textColor'}`}>
                  {tx.amount}
                </td>
                <td className="py-4 text-sm text-muted">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}