"use client";

import Link from "next/link";

export default function SidebarItem({ icon: Icon, label, href, collapsed, active, onClick, hasChildren, open }) {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-muted transition ${
            active ? "bg-surface-muted font-semibold" : ""
          }`}
        >
          <Icon className="text-lg" />
          {!collapsed && <span>{label}</span>}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full hover:bg-surface-muted transition ${
            active ? "bg-surface-muted font-semibold" : ""
          }`}
        >
          <Icon className="text-lg" />
          {!collapsed && <span>{label}</span>}
          {hasChildren && !collapsed && <span className="ml-auto">{open ? "▾" : "▸"}</span>}
        </button>
      )}
    </>
  );
}
