import {
  Bell,
  Star,
} from "lucide-react";

export default function StockHeader() {
  return (
    <div className="p-6 border-b border-[var(--border)]">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img
            src="https://logo.clearbit.com/reliance.com"
            alt=""
            className="w-14 h-14 rounded-full"
          />

          <div>
            <h1 className="text-[28px] font-semibold">
              Reliance Industries Ltd.
            </h1>

            <div className="text-muted text-small mt-1">
              RELIANCE • NSE
            </div>

            <div className="flex gap-3 mt-3">
              <div className="text-[34px] font-bold">
                ₹2,912.40
              </div>

              <div className="text-success text-[22px] font-semibold">
                +35.90 (+1.25%)
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 h-fit">
          <button className="btn-outline px-4 py-2 rounded-lg flex gap-2">
            <Bell size={16} />
            Add Alert
          </button>

          <button className="border border-green-500 text-green-600 px-4 py-2 rounded-lg flex gap-2">
            <Star size={16} fill="currentColor" />
            In Watchlist
          </button>
        </div>
      </div>
    </div>
  );
}