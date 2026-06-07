import { Icons } from "@/common/icons";
import ActionCard from "./ActionCard";

const CORPORATE_ACTIONS = [
  {
    title: "Dividend",
    type: 'dividend',
    icon: Icons.DividendIcon,
    color: "#138a2f",
    fields: [
      { label: null, value: "₹14.00 /share" },
      { label: "Record Date", value: "29 Jun 2024" },
    ],
  },
  {
    title: "AGM",
    type: 'agm',
    icon: Icons.CalendarDaysIcon,
    color: "#4d5f78",
    fields: [
      { label: "Meeting Date", value: "25 May 2024" },
      { label: "Purpose", value: "Quarterly Results" },
      { label: "Type", value: "Board Meeting" },
    ],
  },
  {
    title: "Buyback",
    type: 'buyback',
    icon: Icons.BuybackIcon,
    color: "#ed762d",
    fields: [
      { label: "Buyback Size", value: "₹10,000 Cr" },
      { label: "Open", value: "25 Apr 2024" },
      { label: "Close", value: "15 May 2024" },
    ],
  },
  {
    title: "Stock Split",
    type: 'split',
    icon: Icons.SplitIcon,
    color: "#1252e0",
    fields: [
      { label: "Record Date", value: "12 Aug 2024" },
      { label: "Effective", value: "20 Aug 2024" },
      { label: "Ratio", value: "1:1" },
    ],
  },
  {
    title: "Bonus",
    type: 'bonus',
    icon: Icons.BonusIcon,
    color: "#7e2fef",
    fields: [
      { label: "Record Date", value: "06 Sep 2024" },
      { label: "Allotment", value: "20 Sep 2024" },
      { label: "Ratio", value: "1:1" },
    ],
  },
];

export default function CorporateActionsGrid() {
  const ActionsList = () => {
    return (
      <div className="columns-3 gap-2">
        {CORPORATE_ACTIONS.map((action) => (
          <div
            key={action.type}
            className="mb-2 break-inside-avoid"
          >
            <ActionCard {...action} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-2">
      <ActionsList />

      <div className="card">
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