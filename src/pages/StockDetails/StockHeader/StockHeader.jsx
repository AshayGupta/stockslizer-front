import { Icons } from "@/common/icons";
import styles from "./StockHeader.module.scss";

export default function StockHeader() {
  return (
    <div className="pt-2 px-3">
      <div className="flex justify-between">
        <div>
          <div className="flex gap-4">
            <img
              src="https://www.ril.com/news-media/resource-center/media-kit/reliance-industries-limited"
              alt=""
              className="w-10 h-10 rounded-full"
            />

            <div>
              <h1 className="stock-title">
                Reliance Industries Ltd.
              </h1>
              <div className="text-subtitle text-secondary">
                RELIANCE • NSE
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-2 ml-14 items-center">
            <div className="font-medium">
              ₹ 2,912.40
            </div>
            <div className="font-medium text-[var(--success)]">
              +35.90 (+1.25%)
            </div>
            <div className="text-[10px] text-secondary">
              As on 20 May 2024, 03:30 PM IST
            </div>
          </div>
        </div>

        <div>
          <button className={`${styles["alert-btn"]} rounded-full`}>
            <Icons.BellIcon size={16} fill="var(--BellIcon)" />
            <span className={styles["alert-text"]}>Add Alert</span>
          </button>
        </div>
      </div>
    </div>
  );
}