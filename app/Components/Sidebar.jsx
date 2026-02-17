"use client";

import { FiHome, FiPieChart, FiCreditCard, FiTrendingUp, FiTarget, FiSettings, FiMenu, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SidebarItem from "./SidebarItem";
import SidebarSubItem from "./SidebarSubItem";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => setOpenMenu(openMenu === menu ? null : menu);

  const menuItems = [
    { icon: FiHome, label: "Dashboard", href: "/" },
    {
      icon: FiPieChart, label: "Portfolio", key: "portfolio", children: [
        { label: "Overview", href: "/portfolio" },
        { label: "Assets", href: "/portfolio/assets" },
        { label: "Performance", href: "/portfolio/performance" },
        { label: "Allocation", href: "/portfolio/allocation" },
      ]
    },
    {
      icon: FiCreditCard, label: "Transactions", key: "transactions", children: [
        { label: "All", href: "/transactions" },
        { label: "Income", href: "/transactions/income" },
        { label: "Expenses", href: "/transactions/expenses" },
        { label: "Transfers", href: "/transactions/transfers" },
      ]
    },
    {
      icon: FiTrendingUp, label: "Analytics", key: "analytics", children: [
        { label: "Overview", href: "/analytics" },
        { label: "Cash Flow", href: "/analytics/cash-flow" },
        { label: "Categories", href: "/analytics/categories" },
      ]
    },
    {
      icon: FiTarget, label: "Budgets", key: "budgets", children: [
        { label: "Monthly", href: "/budgets" },
        { label: "Categories", href: "/budgets/categories" },
      ]
    },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-black/30 md:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`
    fixed top-0 left-0 h-screen bg-surface border-r border-border flex flex-col
    transition-all duration-300 z-40
    ${collapsed ? "w-20" : "w-56"}
    ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
  `}
      >

        {/* Logo & Collapse */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-border">
          {!collapsed ? (
            <Link href="/" className="text-lg font-semibold text-primary">FinTrack</Link>
          ) : (
            <span className="text-lg font-semibold text-primary">FT</span>
          )}

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-1 rounded hover:bg-surface-muted transition"
            >
              {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
            </button>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <div key={item.label}>
              <SidebarItem
                icon={item.icon}
                label={item.label}
                href={item.href}
                hasChildren={!!item.children}
                open={openMenu === item.key}
                onClick={() => toggleMenu(item.key)}
                collapsed={collapsed}
              />
              {item.children && openMenu === item.key && !collapsed && (
                <div className="ml-6 flex flex-col space-y-1 mt-1">
                  {item.children.map((sub) => (
                    <SidebarSubItem key={sub.label} label={sub.label} href={sub.href} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Settings */}
        <div className="px-2 pb-4">
          <SidebarItem icon={FiSettings} label="Settings" href="/settings" collapsed={collapsed} />
        </div>
      </aside>

      {/* Mobile hamburger */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-surface border border-border rounded-md"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>
    </>
  );
}
