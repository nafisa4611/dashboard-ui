"use client";

import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import GlassCard from "./GlassCard";
import PortfolioChart from "./PortfolioChart";
import CashFlowChart from "./CashFlowChart";
import CreditCardWidget from "./CreditCardWidget";
import SpendingDonut from "./SpendingDonut";

const summaryData = [
    {
        title: "Balance",
        amount: "$12,450",
        icon: FiArrowUpRight,
        color: "from-success/20 to-success/5 text-success",
    },
    {
        title: "Income",
        amount: "$4,200",
        icon: FiArrowUpRight,
        color: "from-primary/20 to-primary/5 text-primary",
    },
    {
        title: "Expenses",
        amount: "$2,800",
        icon: FiArrowDownRight,
        color: "from-danger/20 to-danger/5 text-danger",
    },
    {
        title: "Savings",
        amount: "$5,500",
        icon: FiArrowUpRight,
        color: "from-accent/20 to-accent/5 text-accent",
    },
];

const transactions = [
    { id: 1, desc: "Salary", type: "Income", amount: "$4,200", date: "Feb 15" },
    { id: 2, desc: "Groceries", type: "Expense", amount: "$450", date: "Feb 14" },
    { id: 3, desc: "Electricity Bill", type: "Expense", amount: "$120", date: "Feb 13" },
    { id: 4, desc: "Freelance", type: "Income", amount: "$600", date: "Feb 12" },
];

export default function MainUI() {
    return (
        <main
            className="
        flex-1 p-8 space-y-10
        bg-gradient-to-br from-bg via-bg to-surface
        min-h-screen
      "
        >
            {/* HEADER */}
            <div className="space-y-2">
                <h1 className="text-3xl font-semibold text-textColor tracking-tight">
                    Financial Overview
                </h1>

                <p className="text-sm text-muted max-w-xl">
                    Monitor your financial performance, cash flow, and recent activity in
                    one unified dashboard.
                </p>
            </div>

            {/* SUMMARY CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {summaryData.map((card) => (
                    <div
                        key={card.title}
                        className={`
              relative p-6 rounded-2xl overflow-hidden
              bg-gradient-to-br ${card.color}
              border border-border
              shadow-sm hover:shadow-xl
              transition-all duration-300
              hover:-translate-y-1
              group cursor-pointer
            `}
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 blur-2xl rounded-full" />
                        </div>

                        <div className="flex justify-between items-start relative">
                            <div>
                                <p className="text-sm text-muted font-medium">
                                    {card.title}
                                </p>

                                <h3 className="text-3xl font-semibold text-textColor mt-2 tracking-tight">
                                    {card.amount}
                                </h3>

                                <p className="text-xs text-muted mt-2">
                                    +2.4% from last month
                                </p>
                            </div>

                            <div className="p-3 rounded-xl bg-surface/60 backdrop-blur border border-border group-hover:scale-110 transition">
                                <card.icon className="text-xl" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CHARTS */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Portfolio */}
                <GlassCard className="xl:col-span-2">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="font-semibold text-textColor">
                                Portfolio Performance
                            </h3>
                            <p className="text-xs text-muted mt-1">
                                Monthly growth overview
                            </p>
                        </div>

                        <button className="text-xs text-primary font-medium hover:underline">
                            View Report
                        </button>
                    </div>

                    <div className="h-72">
                        <PortfolioChart />
                    </div>
                </GlassCard>

                {/* Cash Flow */}
                <GlassCard>
                    <div className="mb-6">
                        <h3 className="font-semibold text-textColor">
                            Cash Flow
                        </h3>
                        <p className="text-xs text-muted mt-1">
                            Income vs expenses
                        </p>
                    </div>

                    <div className="h-72">
                        <CashFlowChart />
                    </div>
                </GlassCard>

                {/* CREDIT CARD + SPENDING DONUT */}
                <div className="flex flex-col gap-6">
                    <CreditCardWidget />
                    <SpendingDonut className="xl:col-span-2" />
                </div>
            </div>

            {/* TRANSACTIONS */}
            <GlassCard>
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h3 className="font-semibold text-textColor">
                            Recent Transactions
                        </h3>
                        <p className="text-xs text-muted mt-1">
                            Latest financial activity
                        </p>
                    </div>

                    <button className="text-xs text-primary font-medium hover:underline">
                        View All
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                                    Description
                                </th>
                                <th className="py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                                    Type
                                </th>
                                <th className="py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                                    Amount
                                </th>
                                <th className="py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                                    Date
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {transactions.map((tx) => (
                                <tr
                                    key={tx.id}
                                    className="border-b border-border hover:bg-bg/60 transition-colors duration-200"
                                >
                                    <td className="py-4 text-textColor font-medium">
                                        {tx.desc}
                                    </td>

                                    <td className="py-4">
                                        <span
                                            className={`
                        px-2.5 py-1 rounded-md text-xs font-semibold
                        ${tx.type === "Income"
                                                    ? "bg-success/10 text-success"
                                                    : "bg-danger/10 text-danger"
                                                }
                      `}
                                        >
                                            {tx.type}
                                        </span>
                                    </td>

                                    <td className="py-4 text-textColor font-medium">
                                        {tx.amount}
                                    </td>

                                    <td className="py-4 text-muted">
                                        {tx.date}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </GlassCard>
        </main>
    );
}
