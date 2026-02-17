import { FiSearch, FiBell } from "react-icons/fi";
import ThemeDropdown from "./ThemeDropdown";
import Avatar from "./Avatar";


export default function Navbar() {


  return (
    <div className="h-16 bg-surface px-6 flex items-center justify-between w-full">

      {/* LEFT: Search */}
      <div className="flex items-center gap-3 px-3 py-1 hover:border hover:border-muted rounded-xl shadow shadow-muted">
        <FiSearch className="text-muted" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-surface outline-none text-sm text-muted/90 placeholder:text-muted"
        />
      </div>

      {/* RIGHT: Icons */}
      <div className="flex items-center gap-5">
        <ThemeDropdown />
        <FiBell size={18} className="text-muted" />
        <Avatar />
      </div>

    </div>

  );
}
