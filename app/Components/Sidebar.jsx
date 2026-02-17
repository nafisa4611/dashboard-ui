"use client";

import { useState } from "react";
import {
  FiHome,
  FiPieChart,
  FiCreditCard,
  FiTrendingUp,
  FiTarget,
  FiSettings,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import SidebarItem from "./SidebarItem";
import SidebarSubItem from "./SidebarSubItem";
import Link from "next/link";

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [collapsed, setCollapsed] = useState(false); // ✅ new state

  const toggle = (menu) => setOpenMenu(openMenu === menu ? null : menu);
  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <aside
      className={`h-screen bg-surface border-r border-border flex flex-col transition-all duration-300 ${
        collapsed ? "w-20" : "w-56"
      }`}
    >
      {/* Logo + Collapse Button */}
      <div className="h-16 flex items-center justify-between px-4">
        {!collapsed ? (
          <Link href="/" className="text-lg font-semibold text-primary">
            FinTrack
          </Link>
        ) : (
          <span className="text-lg font-semibold text-primary">FT</span>
        )}

        <button
          onClick={toggleCollapse}
          className="p-1 rounded hover:bg-surface-muted transition"
        >
          {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 space-y-1">
        <SidebarItem icon={FiHome} label="Dashboard" href="/" collapsed={collapsed} active />

        <SidebarItem
          icon={FiPieChart}
          label="Portfolio"
          hasChildren
          open={openMenu === "portfolio"}
          onClick={() => toggle("portfolio")}
          collapsed={collapsed}
        />
        {openMenu === "portfolio" && !collapsed && (
          <>
            <SidebarSubItem label="Overview" href="/portfolio" />
            <SidebarSubItem label="Assets" href="/portfolio/assets" />
            <SidebarSubItem label="Performance" href="/portfolio/performance" />
            <SidebarSubItem label="Allocation" href="/portfolio/allocation" />
          </>
        )}

        
        <SidebarItem
          icon={FiCreditCard}
          label="Transactions"
          hasChildren
          open={openMenu === "transactions"}
          onClick={() => toggle("transactions")}
          collapsed={collapsed}
        />
        {openMenu === "transactions" && !collapsed && (
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
          collapsed={collapsed}
        />
        {openMenu === "analytics" && !collapsed && (
          <>
            <SidebarSubItem label="Overview" href="/analytics" />
            <SidebarSubItem label="Cash Flow" href="/analytics/cash-flow" />
            <SidebarSubItem label="Categories" href="/analytics/categories" />
          </>
        )}

        {/*  Wallet */}
        <SidebarItem
          icon={FiCreditCard}
          label="Cards"
          hasChildren
          open={openMenu === "wallet"}
          onClick={() => toggle("wallet")}
          collapsed={collapsed}
        />

        {openMenu === "wallet" && !collapsed && (
          <>
            <SidebarSubItem label="Overview" href="/wallet" />
            <SidebarSubItem label="List of Cards" href="/wallet/cards" />
            <SidebarSubItem label="Balance" href="/wallet/balance" />
          </>
        )}


        {/* Budgets */}
        <SidebarItem
          icon={FiTarget}
          label="Budgets"
          hasChildren
          open={openMenu === "budgets"}
          onClick={() => toggle("budgets")}
          collapsed={collapsed}
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
        <SidebarItem icon={FiSettings} label="Settings" href="/settings" collapsed={collapsed} />
      </div>
    </aside>
  );
}
