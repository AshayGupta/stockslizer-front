import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "../themeToggle";
import "./Sidebar.scss";
import { Icons } from "@/common/icons";

const NavItem = ({ to, icon: Icon, label, testId, iconColor }) => {
  const loc = useLocation();
  const active = loc.pathname === to || (to !== "/" && loc.pathname.startsWith(to));

  return (
    <Link
      to={to}
      data-testid={testId}
      className={`sidebar-item ${active ? "active" : ""}`}
    >
      <Icon size={18} className="icon" style={{ color: iconColor }} />
      <span>{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <aside className="sidebar w-50 shrink-0 h-screen flex flex-col shadow-md">
      <div className="sidebar-header shadow-sm">
        <div className="w-8 h-8 sidebar-brand-icon">
          <Icons.ChartColumnIcon size={18} className="text-white" />
        </div>
        <div>
          <div className="sidebar-brand-title">STOCKSLIZER</div>
          <div className="sidebar-brand-subtitle">Stay Ahead. Always.</div>
        </div>
      </div>

      <nav className="sidebar-nav shadow-sm">
        <div className="sidebar-section-label">Navigate</div>
        <NavItem to="/dashboard" icon={Icons.LayoutGridIcon} label="Dashboard" testId="nav-dashboard" iconColor="#FF3B30" />
        <NavItem to="/news" icon={Icons.FileTextIcon} label="News" testId="nav-news" iconColor="#0A84FF" />
        <NavItem to="/alerts" icon={Icons.BellIcon} label="Alerts" testId="nav-alerts" iconColor="#FFB020" />
        <NavItem to="/settings" icon={Icons.SettingsIcon} label="Settings" testId="nav-settings" iconColor="#6B7280" />
      </nav>

      <div className="sidebar-footer">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00D26A] pulse-dot" />
          <span>Live · NSE / BSE</span>
        </div>
        <ThemeToggle />
      </div>
    </aside>
  );
};

export default Sidebar;