"use client";

import { FiSearch, FiBell, FiMenu } from "react-icons/fi"; // Added FiMenu
import ThemeDropdown from "./ThemeDropdown";
import Avatar from "./Avatar";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar({ setMobileOpen }) { // Pass setMobileOpen as a prop
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim()) {
      router.push(`/search?q=${search}`);
    }
  };

  return (
    <header className="h-16 bg-surface px-4 md:px-6 flex items-center justify-between w-full border-b border-border sticky top-0 z-30">
      
     
      <div className="flex items-center gap-3 flex-1">
        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden p-2 hover:bg-surface-muted rounded-lg text-muted transition-colors"
          aria-label="Open Menu"
        >
          <FiMenu size={20} />
        </button>

        {/* Search Bar */}
        <div className="flex items-center gap-3 px-3 py-2 border border-border rounded-xl shadow-sm bg-surface max-w-[100px] sm:max-w-xs md:max-w-md w-full focus-within:ring-1 focus-within:ring-primary/50 transition-all">
          <FiSearch className="text-muted flex-shrink-0" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
            className="bg-transparent outline-none text-sm text-textColor placeholder:text-muted w-full min-w-0"
          />
        </div>
      </div>

      {/* RIGHT: Action Icons */}
      <div className="flex items-center gap-2 sm:gap-4 md:gap-5 ml-4">
        
        <ThemeDropdown />

        {/* Notifications */}
        <button
          onClick={() => router.push("/notifications")}
          className="w-9 h-9 hidden xs:flex items-center justify-center rounded-lg
                     border border-border hover:bg-surface-muted transition text-muted"
        >
          <FiBell size={18} />
        </button>

        {/* User Profile */}
        <div className="flex-shrink-0">
          <Avatar />
        </div>
      </div>
    </header>
  );
}