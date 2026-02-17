"use client";

import { useState } from "react";
import {
  FiHome,
  FiPieChart,
  FiCreditCard,
  FiTrendingUp,
  FiTarget,
  FiSettings,
} from "react-icons/fi";

import SidebarItem from "./SidebarItem";
import SidebarSubItem from "./SidebarSubItem";
import Link from "next/link";

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggle = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <aside className="w-56 h-screen bg-surface border-r border-border flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 text-lg font-semibold text-primary">
        <Link href="/">FinTrack</Link>
      </div>

      <nav className="flex-1 px-2 space-y-1">
        <SidebarItem icon={FiHome} label="Dashboard" href="/" active />

        {/* Portfolio */}
        <SidebarItem
          icon={FiPieChart}
          label="Portfolio"
          hasChildren
          open={openMenu === "portfolio"}
          onClick={() => toggle("portfolio")}
        />
        {openMenu === "portfolio" && (
          <>
            <SidebarSubItem label="Overview" href="/portfolio" />
            <SidebarSubItem label="Assets" href="/portfolio/assets" />
            <SidebarSubItem label="Performance" href="/portfolio/performance" />
            <SidebarSubItem label="Allocation" href="/portfolio/allocation" />
          </>
        )}

        {/* Transactions */}
        <SidebarItem
          icon={FiCreditCard}
          label="Transactions"
          hasChildren
          open={openMenu === "transactions"}
          onClick={() => toggle("transactions")}
        />
        {openMenu === "transactions" && (
          <>
            <SidebarSubItem label="All Transactions" href="/transactions" />
            <SidebarSubItem label="Income" href="/transactions/income" />
            <SidebarSubItem label="Expenses" href="/transactions/expenses" />
            <SidebarSubItem label="Transfers" href="/transactions/transfers" />
          </>
        )}

        {/* Analytics */}
        <SidebarItem
          icon={FiTrendingUp}
          label="Analytics"
          hasChildren
          open={openMenu === "analytics"}
          onClick={() => toggle("analytics")}
        />
        {openMenu === "analytics" && (
          <>
            <SidebarSubItem label="Overview" href="/analytics" />
            <SidebarSubItem label="Cash Flow" href="/analytics/cash-flow" />
            <SidebarSubItem label="Categories" href="/analytics/categories" />
          </>
        )}

        {/* Budgets */}
        <SidebarItem
          icon={FiTarget}
          label="Budgets"
          hasChildren
          open={openMenu === "budgets"}
          onClick={() => toggle("budgets")}
        />
        {openMenu === "budgets" && (
          <>
            <SidebarSubItem label="Monthly" href="/budgets" />
            <SidebarSubItem label="Categories" href="/budgets/categories" />
          </>
        )}
      </nav>

      {/* Bottom */}
      <div className="px-2 pb-4">
        <SidebarItem icon={FiSettings} label="Settings" href="/settings" />
      </div>
    </aside>
  );
}
