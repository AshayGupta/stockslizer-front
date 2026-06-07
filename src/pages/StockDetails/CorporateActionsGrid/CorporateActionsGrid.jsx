import {
  Gift,
  Split,
  CalendarDays,
  RotateCcw,
} from "lucide-react";
import ActionCard from "./ActionCard";

const CORPORATE_ACTIONS = [
  {
    icon: Gift,
    title: "Dividend",
    type: 'dividend',
    fields: [
      { label: "Dividend", value: "₹14.00" },
      { label: "Record Date", value: "29 Jun 2024" },
      { label: "Payment Date", value: "15 Jul 2024" },
      { label: "Yield", value: "0.48%" },
    ],
  },
  {
    icon: Gift,
    title: "Bonus Issue",
    type: 'bonus',
    fields: [
      { label: "Record Date", value: "06 Sep 2024" },
      { label: "Allotment", value: "20 Sep 2024" },
      { label: "Ratio", value: "1:1" },
    ],
  },
  {
    icon: RotateCcw,
    title: "Buyback",
    type: 'buyback',
    fields: [
      { label: "Buyback Size", value: "₹10,000 Cr" },
      { label: "Open", value: "25 Apr 2024" },
      { label: "Close", value: "15 May 2024" },
    ],
  },
  {
    icon: Split,
    title: "Stock Split",
    type: 'split',
    fields: [
      { label: "Record Date", value: "12 Aug 2024" },
      { label: "Effective", value: "20 Aug 2024" },
      { label: "Ratio", value: "1:1" },
    ],
  },
  {
    icon: CalendarDays,
    title: "Rights Issue",
    type: 'rights',
    fields: [
      { label: "Meeting Date", value: "25 May 2024" },
      { label: "Purpose", value: "Quarterly Results" },
      { label: "Type", value: "Board Meeting" },
    ],
  },
  {
    icon: CalendarDays,
    title: "AGM",
    type: 'agm',
    fields: [
      { label: "Meeting Date", value: "25 May 2024" },
      { label: "Purpose", value: "Quarterly Results" },
      { label: "Type", value: "Board Meeting" },
    ],
  },
];

export default function CorporateActionsGrid() {
  const ActionsList = () => {
    return (
      <div className="grid grid-cols-3 gap-4 p-4">
        {CORPORATE_ACTIONS.map((action) => (
          <ActionCard
            key={action.type}
            {...action}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <ActionsList />

      <div className="card p-5">
        <div className="flex justify-between">
          <h3 className="text-card-title">
            Announcements / Board Meetings
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