

import { FiChevronDown } from "react-icons/fi";

export default function SidebarItem({
  icon: Icon,
  label,
  active = false,
  open = false,
  onClick,
  hasChildren = false,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center justify-between px-4 py-2 rounded-lg text-sm font-medium
        transition
        ${
          active
            ? "bg-surface-muted text-textColor"
            : "text-textBody hover:bg-surface-muted"
        }
      `}
    >
      <div className="flex items-center gap-3">
        <Icon size={18} />
        {label}
      </div>

      {hasChildren && (
        <FiChevronDown
          size={14}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      )}
    </button>
  );
}
