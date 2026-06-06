import {
  LayoutGrid,
  BadgeDollarSign,
  Newspaper,
  LineChart,
  Bell,
} from "lucide-react";

const tabs = [
  { icon: LayoutGrid, label: "Overview" },
  { icon: BadgeDollarSign, label: "Corporate Actions", active: true },
  { icon: Newspaper, label: "News" },
  { icon: LineChart, label: "Financials" },
  { icon: LineChart, label: "Chart" },
  { icon: Bell, label: "Alerts" },
];

export default function StockSectionTabs() {
  return (
    <div className="flex gap-8 px-6 border-b border-[var(--border)]">
      {tabs.map((tab) => {
        const Icon = tab.icon;

        return (
          <button
            key={tab.label}
            className={`flex gap-2 items-center py-4 border-b-2 transition ${
              tab.active
                ? "border-[var(--tab-active)] text-[var(--tab-active)]"
                : "border-transparent text-[var(--text-secondary)]"
            }`}
          >
            <Icon size={16} />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}