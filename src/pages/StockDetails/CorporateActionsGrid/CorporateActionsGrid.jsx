import {
  Gift,
  Split,
  CalendarDays,
  RotateCcw,
} from "lucide-react";

import ActionCard from "./ActionCard";

export default function CorporateActionsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <ActionCard
        icon={Gift}
        title="Dividend"
        badge="Upcoming"
        fields={[
          { label: "Ex-Date", value: "28 Jun 2024" },
          { label: "Record Date", value: "29 Jun 2024" },
          { label: "Payment Date", value: "15 Jul 2024" },
          { label: "Dividend", value: "₹14.00" },
          { label: "Yield", value: "0.48%" },
        ]}
      />

      <ActionCard
        icon={Split}
        title="Stock Split"
        badge="Upcoming"
        fields={[
          { label: "Ex-Date", value: "10 Aug 2024" },
          { label: "Record Date", value: "12 Aug 2024" },
          { label: "Effective", value: "20 Aug 2024" },
          { label: "Ratio", value: "1:1" },
        ]}
      />

      <ActionCard
        icon={Gift}
        title="Bonus Issue"
        badge="Upcoming"
        fields={[
          { label: "Ex-Date", value: "05 Sep 2024" },
          { label: "Record Date", value: "06 Sep 2024" },
          { label: "Allotment", value: "20 Sep 2024" },
          { label: "Ratio", value: "1:1" },
        ]}
      />

      <ActionCard
        icon={CalendarDays}
        title="Board Meeting"
        badge="Upcoming"
        fields={[
          { label: "Meeting Date", value: "25 May 2024" },
          { label: "Purpose", value: "Quarterly Results" },
          { label: "Type", value: "Board Meeting" },
        ]}
      />

      <ActionCard
        icon={RotateCcw}
        title="Buyback"
        badge="Announced"
        fields={[
          { label: "Buyback Size", value: "₹10,000 Cr" },
          { label: "Open", value: "25 Apr 2024" },
          { label: "Close", value: "15 May 2024" },
        ]}
      />

      <div className="card p-5">
        <div className="flex justify-between">
          <h3 className="text-card-title">
            News & Updates
          </h3>

          <button className="text-[var(--primary)]">
            View All
          </button>
        </div>

        <div className="mt-4 space-y-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex gap-3">
              <div className="w-14 h-14 rounded bg-slate-200" />

              <div>
                <div className="font-medium">
                  Reliance Q4 Results...
                </div>

                <div className="text-small text-muted">
                  Economic Times • 20 May 2024
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}