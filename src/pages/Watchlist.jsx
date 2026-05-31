import { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";

const SAMPLE = [
  { symbol: "RELIANCE.NS", name: "Reliance Industries" },
  { symbol: "TCS.NS", name: "Tata Consultancy Services" },
  { symbol: "INFY.NS", name: "Infosys" },
  { symbol: "HDFCBANK.NS", name: "HDFC Bank" },
  { symbol: "ICICIBANK.NS", name: "ICICI Bank" },
  { symbol: "HDFCBANK.NS", name: "HDFC Bank" },
  { symbol: "ICICIBANK.NS", name: "ICICI Bank" },
  { symbol: "HDFCBANK.NS", name: "HDFC Bank" },
  { symbol: "ICICIBANK.NS", name: "ICICI Bank" },
  { symbol: "HDFCBANK.NS", name: "HDFC Bank" },
  { symbol: "ICICIBANK.NS", name: "ICICI Bank" },
  { symbol: "HDFCBANK.NS", name: "HDFC Bank" },
  { symbol: "ICICIBANK.NS", name: "ICICI Bank" },
  { symbol: "HDFCBANK.NS", name: "HDFC Bank" },
  { symbol: "ICICIBANK.NS", name: "ICICI Bank" },
  { symbol: "HDFCBANK.NS", name: "HDFC Bank" },
  { symbol: "ICICIBANK.NS", name: "ICICI Bank" },
];

const Watchlist = () => {
  const [searchQ, setSearchQ] = useState("");
  const [list, setList] = useState(SAMPLE);
  const [addOpen, setAddOpen] = useState(false);

  const filtered = useMemo(() => {
    if (!searchQ.trim()) return list;
    const s = searchQ.trim().toLowerCase();
    return list.filter((it) => it.symbol.toLowerCase().includes(s) || (it.name && it.name.toLowerCase().includes(s)));
  }, [searchQ, list]);

  const onAdded = () => {
    setList((prev) => [
      { symbol: `NEW${Math.floor(Math.random() * 900 + 100)}.NS`, name: "New Stock" },
      ...prev,
    ]);
    setAddOpen(false);
  };

  return (
    <div className="w-60 bg-white border border-[#e9e9e9] border-t-0 h-full flex flex-col">
      <div className="fixed w-59 bg-white flex-shrink-0 p-2 border-b border-b-[#f3f4f6]">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <FiSearch size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
            <input
              value={searchQ}
              onChange={(e) => setSearchQ(e.target.value)}
              placeholder="Search stocks"
              className="w-full pl-9 pr-3 py-1.5 text-sm bg-[#fff] border border-[#e9e9e9] rounded-md placeholder:text-[#6B7280] text-[#111827] focus:outline-none focus:border-[#0A84FF] focus:ring-0 font-mono"
              data-testid="watchlist-search"
            />
          </div>

          <button
            onClick={() => setAddOpen(true)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gradient-to-br from-[#00D26A] to-[#00A86B] text-white text-sm font-semibold shadow-sm cursor-pointer transition-all duration-200 ease-out hover:-translate-y-0.5 hover:opacity-95"
            data-testid="watchlist-add-btn"
          >
            Add
          </button>
        </div>
      </div>

      <div>
        <ul className="flex-1 mt-13 overflow-auto">
          {filtered.map((it) => (
            <li key={it.symbol}>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center justify-between gap-3 px-3 py-2 hover:bg-[#FFF8E1] rounded-md transition-colors"
                data-testid={`watchlist-item-${it.symbol}`}
              >
                <div className="min-w-0">
                  <div className="font-mono text-sm font-semibold text-[#111827]">{it.symbol.replace(/\.(NS|BO)$/, "")}</div>
                  <div className="text-xs text-[#6B7280] truncate">{it.name}</div>
                </div>
                <div className="text-xs font-mono text-[#5C6577]">NSE</div>
              </a>
            </li>
          ))}

          {filtered.length === 0 && (
            <li>
              <div className="px-3 py-6 text-center text-sm text-[#6B7280]">No matches</div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Watchlist;