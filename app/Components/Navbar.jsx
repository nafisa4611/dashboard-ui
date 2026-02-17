"use client";

import { FiSearch, FiBell } from "react-icons/fi";
import ThemeDropdown from "./ThemeDropdown";
import Avatar from "./Avatar";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim()) {
      router.push(`/search?q=${search}`);
    }
  };

  return (
    <div className="h-16 bg-surface px-6 flex items-center justify-between w-full border-b border-border">

      {/* LEFT: Search */}
      <div className="flex items-center gap-3 px-3 py-2 border border-border rounded-xl shadow-sm">
        <FiSearch className="text-muted" />
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearch}
          className="bg-surface outline-none text-sm text-muted/90 placeholder:text-muted flex-1"
        />
      </div>

      {/* RIGHT: Icons */}
      <div className="flex items-center gap-3 md:gap-5">

        {/* Theme */}
        <ThemeDropdown />

        {/* Notifications */}
        <button
          onClick={() => router.push("/notifications")}
          className="w-9 h-9 flex items-center justify-center rounded-lg
                     border border-border hover:bg-surface-muted transition"
        >
          <FiBell size={18} className="text-muted" />
        </button>

        {/* Avatar */}
        <Avatar />
      </div>
    </div>
  );
}
