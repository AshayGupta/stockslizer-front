import { Icons } from "@/common/icons";
import "./StockHeader.scss";

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

        <div>
          <button className="alert-btn">
            <Icons.BellIcon size={16} fill="var(--BellIcon)" />
            <span className="alert-text">Add Alert</span>
          </button>
        </div>
      </div>
    </div>
  );
}