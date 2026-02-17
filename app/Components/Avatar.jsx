"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FiUser, FiBookOpen, FiEdit3, FiLogOut } from "react-icons/fi";

export default function AvatarMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* Avatar */}
      <button
        onClick={() => setOpen(!open)}
        className="w-8 h-8 rounded-full bg-muted text-bg flex items-center justify-center
                   text-xs font-medium hover:opacity-90 transition"
      >
        M
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl border border-border bg-surface shadow-lg text-textColor">
          <MenuLink href="/profile" icon={<FiUser />} label="My Profile" close={() => setOpen(false)} />
          <MenuLink href="/notes" icon={<FiBookOpen />} label="My Notes" close={() => setOpen(false)} />
          <MenuLink href="/blog" icon={<FiEdit3 />} label="My Blogs" close={() => setOpen(false)} />

          <div className="my-1 h-px bg-border" />

          <button
            className="w-full flex items-center gap-3 px-4 py-2 text-sm
                       text-accent hover:bg-surface-muted transition"
            onClick={() => console.log("logout")}
          >
            <FiLogOut />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

function MenuLink({ href, icon, label, close }) {
  return (
    <Link
      href={href}
      onClick={close}
      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-textBody hover:bg-surface-muted transition"
    >
      {icon}
      {label}
    </Link>
  );
}
