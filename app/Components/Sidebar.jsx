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
      {/* 1. MOBILE OVERLAY*/}
      {mobileOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden" 
          onClick={() => setMobileOpen(false)} 
        />
      )}

      {/* 2. SIDEBAR CONTAINER */}
      <aside
        className={`
          fixed top-0 left-0 h-screen bg-surface border-r border-border flex flex-col
          transition-all duration-300 z-50 text-secondary
          ${collapsed ? "w-20" : "w-64"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        `}
      >
        {/* Logo Section */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-border">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-textColor font-bold">
              {collapsed ? "F" : "FT"}
            </div>
            {!collapsed && <span className="text-lg font-bold text-textColor tracking-tight">FinTrack</span>}
          </Link>

          {/* Collapse Toggle (Desktop only) */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden md:flex p-1.5 rounded-lg hover:bg-surface-muted border border-border text-muted transition"
          >
            {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto">
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
                <div className="ml-9 flex flex-col space-y-1 mt-1 border-l border-border pl-4">
                  {item.children.map((sub) => (
                    <SidebarSubItem key={sub.label} label={sub.label} href={sub.href} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-border">
          <SidebarItem icon={FiSettings} label="Settings" href="/settings" collapsed={collapsed} />
        </div>
      </aside>
    </>
  );
}