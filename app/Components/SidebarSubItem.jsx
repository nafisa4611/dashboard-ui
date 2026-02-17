"use client";

import Link from "next/link";

export default function SidebarSubItem({ label, href }) {
  return (
    <Link
      href={href}
      className="flex items-center px-4 py-2 text-sm text-muted rounded-lg hover:bg-surface-muted transition"
    >
      {label}
    </Link>
  );
}
