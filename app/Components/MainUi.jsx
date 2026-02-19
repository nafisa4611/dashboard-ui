"use client";


import GlassCard from "./GlassCard";
import CashFlowChart from "./CashFlowChart";
import CreditCardWidget from "./CreditCardWidget";
import ExpenseCategories from "./ExpenseCategories";
import TransactionList from "./TransactionList";

// This helper is internal to this file only
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
        <main className="flex-1 bg-surface text-textColor p-4 sm:p-8 space-y-8 overflow-y-auto">

            {/* THE MAIN GRID */}
            <div className="grid grid-cols-12 gap-6">

                {/* LEFT COLUMN (8 units) */}
                <div className="col-span-12 xl:col-span-8 space-y-6">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <StatCard title="Total Balance" amount="$2,00,000" icon="💰" />
                        <StatCard title="Deposits" amount="$12,000" icon="📥" />
                        <StatCard title="Withdrawals" amount="$80,000" icon="📤" />
                    </div>

                    <GlassCard className="p-6 bg-surface border-border h-[400px] flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-semibold text-textColor">Cashflow</h3>
                        </div>

                        {/* The flex-1 tells the chart to take up all remaining space in the 400px card */}
                        <div className="flex-1 w-full">
                            <CashFlowChart />
                        </div>
                    </GlassCard>

                    <GlassCard className="bg-surface border-border">
                        <TransactionList />
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