import { FiBarChart2, FiBell, FiHome, FiSearch, FiSettings } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const NavItem = ({ to, icon: Icon, label, testId }) => {
  const loc = useLocation();
  const active = loc.pathname === to || (to !== "/" && loc.pathname.startsWith(to));
  return (
    <Link
      to={to}
      data-testid={testId}
      className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
        active
          ? "bg-[#1A1D24] text-white border border-[#22262F]"
          : "text-[#8F99AB] hover:bg-[#121418] hover:text-white border border-transparent"
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </Link>
  );
};

const Sidebar = ({ notifCount = 0 }) => {
  return (
    <aside className="w-60 shrink-0 h-screen sticky top-0 border-r border-[#22262F] bg-[#eee] flex flex-col">
      <div className="px-4 py-5 border-b border-[#22262F] flex items-center gap-2">
        <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#00D26A] to-[#0A84FF] flex items-center justify-center">
          <FiBarChart2 size={18} className="text-[#090A0C]" />
        </div>
        <div>
          <div className="font-display text-base font-semibold tracking-tight text-white leading-none">STOCKSLIZER</div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-[#5C6577] mt-0.5">Personal</div>
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        <div className="text-[10px] uppercase tracking-[0.18em] text-[#5C6577] px-3 pt-2 pb-2 font-semibold">Navigate</div>
        <NavItem to="/" icon={FiHome} label="Dashboard" testId="nav-dashboard" />
        <NavItem to="/watchlist" icon={FiBarChart2} label="Watchlist" testId="nav-watchlist" />
        <NavItem to="/news" icon={FiSearch} label="News" testId="nav-news" />
        <NavItem to="/alerts" icon={FiBell} label="Alerts" testId="nav-alerts" />
        <NavItem to="/settings" icon={FiSettings} label="Settings" testId="nav-settings" />
      </nav>

      <div className="px-4 py-3 border-t border-[#22262F] flex items-center gap-2 text-xs text-[#8F99AB]">
        <span className="w-2 h-2 rounded-full bg-[#00D26A] pulse-dot" />
        <span>Live · NSE / BSE</span>
      </div>
    </aside>
  );
};

export default Sidebar;