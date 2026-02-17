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

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggle = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <aside className="w-56 h-screen bg-surface border-r border-border flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 text-lg font-semibold text-primary">
        FinTrack
      </div>

      <nav className="flex-1 px-2 space-y-1">
        <SidebarItem icon={FiHome} label="Dashboard" active />

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
            <SidebarSubItem label="Overview" />
            <SidebarSubItem label="Assets" />
            <SidebarSubItem label="Performance" />
            <SidebarSubItem label="Allocation" />
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
            <SidebarSubItem label="All Transactions" />
            <SidebarSubItem label="Income" />
            <SidebarSubItem label="Expenses" />
            <SidebarSubItem label="Transfers" />
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
            <SidebarSubItem label="Overview" />
            <SidebarSubItem label="Cash Flow" />
            <SidebarSubItem label="Categories" />
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
            <SidebarSubItem label="Monthly" />
            <SidebarSubItem label="Categories" />
          </>
        )}
      </nav>

      {/* Bottom */}
      <div className="px-2 pb-4">
        <SidebarItem icon={FiSettings} label="Settings" />
      </div>
    </aside>
  );
}
