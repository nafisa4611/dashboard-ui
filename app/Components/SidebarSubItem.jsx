

export default function SidebarSubItem({ label }) {
  return (
    <button
      className="
        w-full text-left pl-12 pr-4 py-1.5 text-sm
        text-muted hover:text-primary hover:bg-surface-muted rounded-md
        transition
      "
    >
      {label}
    </button>
  );
}
