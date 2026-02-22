"use client";

import GlassCard from "./GlassCard";
import CashFlowChart from "./CashFlowChart";
import CreditCardWidget from "./CreditCardWidget";
import ExpenseCategories from "./ExpenseCategories";

// 1. Define the data here so the .map() works
const transactions = [
  { id: 1, desc: "Inest - Deposit Wallet", type: "Income", amount: "15.00 USDT", date: "Jan 21 2024 @7:29PM" },
  { id: 2, desc: "Adobe Illustrator", type: "Expense", amount: "32.00 USDT", date: "Jan 20 2024 @4:15PM" },
  { id: 3, desc: "Dribbble Pro", type: "Expense", amount: "15.00 USDT", date: "Jan 19 2024 @11:00AM" },
];

function StatCard({ title, amount, icon }) {
    return (
        <div className="bg-surface border border-border p-5 rounded-2xl">
            <div className="flex justify-between items-start">
                <p className="text-muted text-[10px] uppercase font-bold tracking-widest">{title}</p>
                <span className="text-lg opacity-80">{icon}</span>
            </div>
            <h2 className="text-2xl font-bold mt-2 text-textColor">{amount}</h2>
            <p className="text-[10px] text-muted mt-1 opacity-60">In the past 12 months</p>
        </div>
    );
}

export default function MainUI() {
    return (
        <main className="flex-1 bg-bg text-textColor p-4 sm:p-8 space-y-8 overflow-y-auto">
            
            {/* TOP HEADER SECTION */}
            <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold tracking-tight">Transaction</h1>
                <span className="bg-primary text-black text-[10px] font-bold px-2 py-0.5 rounded-full">+11%</span>
            </div>

            <div className="grid grid-cols-12 gap-6">

                {/* LEFT COLUMN (8 units) */}
                <div className="col-span-12 xl:col-span-8 space-y-6">

                    {/* Stats Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <StatCard title="Total Balance" amount="$2,00,000" icon="💰" />
                        <StatCard title="Deposits" amount="$12,000" icon="📥" />
                        <StatCard title="Withdrawals" amount="$80,000" icon="📤" />
                    </div>

                    {/* Main Chart Card */}
                    <GlassCard className="p-6 bg-surface border-border h-[400px] flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-semibold text-textColor">Cashflow</h3>
                            <select className="bg-bg text-xs text-muted border border-border rounded px-2 py-1">
                                <option>Monthly</option>
                            </select>
                        </div>
                        <div className="flex-1 w-full">
                            <CashFlowChart />
                        </div>
                    </GlassCard>

                    {/* Transactions Table */}
                    <GlassCard className="p-6 bg-surface border-border">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-semibold text-textColor">Transactions History</h3>
                            <button className="text-xs text-primary font-medium hover:underline">View All</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-border">
                                        <th className="py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Description</th>
                                        <th className="py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Type</th>
                                        <th className="py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Amount</th>
                                        <th className="py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactions.map((tx) => (
                                        <tr key={tx.id} className="border-b border-border/50 hover:bg-bg/40 transition-colors">
                                            <td className="py-4 text-sm font-medium">{tx.desc}</td>
                                            <td className="py-4">
                                                <span className={`px-2 py-1 rounded text-[10px] font-bold ${tx.type === "Income" ? "bg-primary/20 text-primary" : "bg-red-500/20 text-red-500"}`}>
                                                    {tx.type}
                                                </span>
                                            </td>
                                            <td className="py-4 text-sm font-semibold">{tx.amount}</td>
                                            <td className="py-4 text-xs text-muted">{tx.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </GlassCard>
                </div>

                {/* RIGHT COLUMN (4 units) */}
                <div className="col-span-12 xl:col-span-4 space-y-6">
                    <CreditCardWidget />

                    <GlassCard className="p-6 bg-surface border-border">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-semibold">Expenses Categories</h3>
                            <div className="flex bg-bg p-1 rounded-lg">
                                <button className="px-2 py-1 text-xs bg-primary text-black rounded font-bold">$</button>
                                <button className="px-2 py-1 text-xs text-muted">%</button>
                            </div>
                        </div>
                        <ExpenseCategories />
                    </GlassCard>
                </div>
            </div>
        </main>
    );
}