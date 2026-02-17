"use client";

import Link from "next/link";

export default function SidebarSubItem({ label, href, collapsed }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-10 py-2 rounded-lg text-sm text-muted hover:bg-surface-muted transition ${
        collapsed ? "px-4 justify-center" : ""
      }`}
    >
      {!collapsed && label}
    </Link>
  );
}
