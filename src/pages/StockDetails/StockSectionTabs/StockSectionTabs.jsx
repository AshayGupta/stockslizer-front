import { Icons } from "@/common/icons";

const tabs = [
  { icon: Icons.LayoutGridIcon, label: "Overview", iconColor: "#e65100" },
  { icon: Icons.BadgeDollarSignIcon, label: "Corporate Actions", iconColor: "#135ea9", active: true },
  { icon: Icons.NewspaperIcon, label: "News", iconColor: "#96187d" },
  { icon: Icons.LineChartIcon, label: "Financials", iconColor: "#054a0d" },
  { icon: Icons.BellIcon, label: "Alerts", iconColor: "#cc9a2f" },
];

export default function StockSectionTabs() {
  return (
    <div className="flex gap-6 px-6 border-b border-[var(--border)]">
      {tabs.map((tab) => {
        const Icon = tab.icon;

        return (
          <button
            key={tab.label}
            className={`flex gap-2 items-center py-2 border-b-2 transition ${
              tab.active
                ? "border-[var(--primary)] text-[var(--primary)]"
                : "border-transparent text-[var(--text-secondary)]"
            }`}
          >
            <Icon size={16} color={tab.iconColor}/>
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}