import { FiBarChart2, FiBell, FiHome, FiSearch, FiSettings } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const NavItem = ({ to, icon: Icon, label, testId, iconColor }) => {
  const loc = useLocation();
  const active = loc.pathname === to || (to !== "/" && loc.pathname.startsWith(to));

  return (
    <Link
      to={to}
      data-testid={testId}
      className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
        active
          ? "bg-teal-100 text-[#0A84FF] border border-[#eee]"
          : "text-[#6B7280] hover:bg-[#e9e9e9] hover:text-[#0A84FF] border border-transparent"
      }`}
    >
      <Icon size={18} className={`text-[${iconColor}]`} />
      <span>{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <aside className="w-60 shrink-0 h-screen sticky top-0 border-r border-[#e9e9e9] bg-[#F8FAFC] flex flex-col">
      <div className="px-4 py-5 border-b border-[#e9e9e9] flex items-center gap-2">
        <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#00D26A] to-[#0A84FF] flex items-center justify-center">
          <FiBarChart2 size={18} className="text-[#fff]" />
        </div>
        <div>
          <div className="font-display text-base font-semibold tracking-tight text-black leading-none">STOCKSLIZER</div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-[#6B7280] mt-0.5">Personal</div>
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        <div className="text-[10px] uppercase tracking-[0.18em] text-[#6B7280] px-3 pt-2 pb-2 font-semibold">Navigate</div>
        <NavItem to="/" icon={FiHome} label="Dashboard" testId="nav-dashboard" iconColor="#0A84FF" />
        <NavItem to="/watchlist" icon={FiBarChart2} label="Watchlist" testId="nav-watchlist" iconColor="#00D26A" />
        <NavItem to="/news" icon={FiSearch} label="News" testId="nav-news" iconColor="#0A84FF" />
        <NavItem to="/alerts" icon={FiBell} label="Alerts" testId="nav-alerts" iconColor="#FFB020" />
        <NavItem to="/settings" icon={FiSettings} label="Settings" testId="nav-settings" iconColor="#6B7280" />
      </nav>

      <div className="px-4 py-3 border-t border-[#e9e9e9] flex items-center gap-2 text-xs text-[#6B7280]">
        <span className="w-2 h-2 rounded-full bg-[#00D26A] pulse-dot" />
        <span>Live · NSE / BSE</span>
      </div>
    </aside>
  );
};

export default Sidebar;