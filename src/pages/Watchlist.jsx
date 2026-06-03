import { useMemo, useState } from "react";
import { FiArrowUpRight, FiPlus, FiSearch } from "react-icons/fi";

const SAMPLE = [
  { symbol: "RELIANCE.NS", name: "Reliance Industries Ltd.", ticker: "RELIANCE" },
  { symbol: "TCS.NS", name: "Tata Consultancy Services", ticker: "TCS" },
  { symbol: "INFY.NS", name: "Infosys", ticker: "INFY" },
  { symbol: "HDFCBANK.NS", name: "HDFC Bank", ticker: "HDFCBANK" },
  { symbol: "ICICIBANK.NS", name: "ICICI Bank", ticker: "ICICIBANK" },
  { symbol: "ITC.NS", name: "ITC", ticker: "ITC" },
  { symbol: "LT.NS", name: "Larsen & Toubro", ticker: "LT" },
  { symbol: "KOTAKBANK.NS", name: "Kotak Mahindra Bank", ticker: "KOTAKBANK" },
];

const DETAILS = {
  "RELIANCE.NS": {
    ticker: "RELIANCE",
    company: "Reliance Industries Ltd.",
    exchange: "NSE",
    price: "\u20B9 2,912.40",
    change: "+35.90",
    changePct: "+1.25%",
    marketCap: "\u20B9 18.4T",
    pe: "28.4",
    dividendYield: "0.48%",
    cards: [
      {
        title: "Dividend",
        status: "Upcoming",
        fields: [
          { label: "Ex-Date", value: "28 Jun 2024" },
          { label: "Record Date", value: "29 Jun 2024" },
          { label: "Payment Date", value: "15 Jul 2024" },
          { label: "Dividend", value: "\u20B9 14.00" },
          { label: "Dividend Yield", value: "0.48%" },
        ],
      },
      {
        title: "Stock Split",
        status: "Upcoming",
        fields: [
          { label: "Ex-Date", value: "10 Aug 2024" },
          { label: "Record Date", value: "12 Aug 2024" },
          { label: "Effective Date", value: "20 Aug 2024" },
          { label: "Split Ratio", value: "1:1" },
          { label: "Face Value Change", value: "\u20B9 10 to \u20B9 10" },
        ],
      },
      {
        title: "Bonus Issue",
        status: "Upcoming",
        fields: [
          { label: "Ex-Date", value: "05 Sep 2024" },
          { label: "Record Date", value: "06 Sep 2024" },
          { label: "Allotment Date", value: "20 Sep 2024" },
          { label: "Bonus Ratio", value: "1:1" },
          { label: "Face Value", value: "\u20B9 10" },
        ],
      },
      {
        title: "Board Meeting",
        status: "Upcoming",
        fields: [
          { label: "Meeting Date", value: "25 May 2024" },
          { label: "Purpose", value: "Quarterly Results" },
          { label: "Type", value: "Board Meeting" },
          { label: "Exchange Filing", value: "View Document" },
        ],
      },
      {
        title: "Buyback",
        status: "Announced",
        fields: [
          { label: "Announcement Date", value: "18 Apr 2024" },
          { label: "Buyback Open", value: "25 Apr 2024" },
          { label: "Buyback Close", value: "15 May 2024" },
          { label: "Buyback Size", value: "\u20B9 10,000 Cr" },
          { label: "Price Range", value: "\u20B9 2,750 - \u20B9 2,950" },
        ],
      },
    ],
    news: [
      { title: "Reliance Q4 Results: Net Profit Rises 6% YoY to \u20B9 19,407 Cr", source: "Economic Times", date: "20 May 2024" },
      { title: "Jio Platforms Partners with Global Tech Leader to Expand 5G", source: "Business Standard", date: "18 May 2024" },
      { title: "Reliance Retail to Invest \u20B9 3,000 Cr in FY25", source: "CNBC TV18", date: "17 May 2024" },
    ],
  },
};

const Watchlist = () => {
  const [searchQ, setSearchQ] = useState("");
  const [list, setList] = useState(SAMPLE);
  const [selectedSymbol, setSelectedSymbol] = useState(SAMPLE[0].symbol);

  const filtered = useMemo(() => {
    if (!searchQ.trim()) return list;
    const s = searchQ.trim().toLowerCase();
    return list.filter(
      (stock) => stock.symbol.toLowerCase().includes(s) || (stock.name && stock.name.toLowerCase().includes(s)),
    );
  }, [searchQ, list]);

  const selectedStock = list.find((stock) => stock.symbol === selectedSymbol) || list[0];
  const details = DETAILS[selectedStock.symbol] || DETAILS["RELIANCE.NS"];

  const onAddStock = () => {
    const nextSymbol = `NEW${Math.floor(Math.random() * 900 + 100)}.NS`;
    setList((prev) => [{ symbol: nextSymbol, name: "New Stock", ticker: nextSymbol.replace(/\.(NS|BO)$/, "") }, ...prev]);
    setSelectedSymbol(nextSymbol);
    setSearchQ("");
  };

  return (
    <div className="watchlist-shell">
      <div className="watchlist-grid">
        <section className="watchlist-panel card">
          <div className="panel-header">
            <div>
              <div className="panel-label">My Watchlist</div>
              <div className="panel-title">Stocks you follow</div>
            </div>
            <button type="button" className="btn-primary" onClick={onAddStock}>
              <FiPlus size={16} />
              Add Stock
            </button>
          </div>

          <div className="search-field">
            <FiSearch size={16} className="search-icon" />
            <input
              value={searchQ}
              onChange={(e) => setSearchQ(e.target.value)}
              placeholder="Search stocks"
              className="search-input"
              data-testid="watchlist-search"
            />
          </div>

          <div className="watchlist-list">
            {filtered.map((stock) => {
              const active = stock.symbol === selectedSymbol;
              return (
                <button
                  key={stock.symbol}
                  type="button"
                  className={`watchlist-item${active ? " active" : ""}`}
                  onClick={() => setSelectedSymbol(stock.symbol)}
                  data-testid={`watchlist-item-${stock.symbol}`}
                >
                  <div className="item-info">
                    <div className="item-title">{stock.ticker}</div>
                    <div className="item-subtitle">{stock.name}</div>
                  </div>
                  <span className="badge">NSE</span>
                </button>
              );
            })}

            {filtered.length === 0 && <div className="empty-state">No matches found.</div>}
          </div>
        </section>

        <section className="watchlist-detail">
          <div className="detail-card card">
            <div className="detail-card-top">
              <div className="detail-primary">
                <div className="detail-avatar">{details.ticker?.[0]}</div>
                <div>
                  <div className="detail-label">{details.ticker}</div>
                  <div className="detail-heading">{details.company}</div>
                  <div className="detail-meta">{details.ticker} · {details.exchange}</div>
                </div>
              </div>
              <div className="detail-actions">
                <button type="button" className="btn-outline">Add Alert</button>
                <button type="button" className="btn-secondary">In Watchlist</button>
              </div>
            </div>

            <div className="detail-summary">
              <div className="detail-price">{details.price}</div>
              <div className="detail-metrics">
                <span className="badge badge-success">{details.change} ({details.changePct})</span>
                <span>Market cap {details.marketCap}</span>
              </div>
            </div>

            <div className="detail-stats">
              <div className="stat-card">
                <div className="stat-label">Market cap</div>
                <div className="stat-value">{details.marketCap}</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">P/E</div>
                <div className="stat-value">{details.pe}</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Yield</div>
                <div className="stat-value">{details.dividendYield}</div>
              </div>
            </div>

            <div className="tab-list">
              {["Overview", "Corporate Actions", "News", "Financials", "Chart", "Alerts"].map((tab) => (
                <button key={tab} type="button" className={`tab-button${tab === "Corporate Actions" ? " active" : ""}`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="card-grid">
            {details.cards.slice(0, 4).map((card) => (
              <div key={card.title} className="detail-card card">
                <div className="detail-card-row">
                  <div>
                    <div className="detail-card-title">{card.title}</div>
                    <div className="detail-card-status">{card.status}</div>
                  </div>
                  <span className="badge badge-accent">{card.status}</span>
                </div>
                <div className="detail-card-grid">
                  {card.fields.map((item) => (
                    <div key={item.label} className="detail-field">
                      <span className="detail-field-label">{item.label}</span>
                      <span className="detail-field-value">{item.value}</span>
                    </div>
                  ))}
                </div>
                <button type="button" className="link-button">
                  View Details <FiArrowUpRight size={14} />
                </button>
              </div>
            ))}
          </div>

          <div className="card-grid card-grid-2">
            <div className="detail-card card">
              <div className="detail-card-row">
                <div>
                  <div className="detail-card-title">Dividend</div>
                  <div className="detail-card-status">Upcoming</div>
                </div>
                <span className="badge badge-success">Upcoming</span>
              </div>
              <div className="detail-field-grid">
                <div className="detail-field">
                  <span className="detail-field-label">Ex-Date</span>
                  <span className="detail-field-value">28 Jun 2024</span>
                </div>
                <div className="detail-field">
                  <span className="detail-field-label">Record Date</span>
                  <span className="detail-field-value">29 Jun 2024</span>
                </div>
                <div className="detail-field">
                  <span className="detail-field-label">Payment Date</span>
                  <span className="detail-field-value">15 Jul 2024</span>
                </div>
              </div>
              <div className="detail-field-grid">
                <div className="detail-field">
                  <span className="detail-field-label">Dividend</span>
                  <span className="detail-field-value">\u20B9 14.00</span>
                </div>
                <div className="detail-field">
                  <span className="detail-field-label">Dividend Yield</span>
                  <span className="detail-field-value">0.48%</span>
                </div>
              </div>
              <button type="button" className="link-button">View Details</button>
            </div>

            <div className="detail-card card">
              <div className="detail-card-row">
                <div>
                  <div className="detail-card-title">News & Updates</div>
                  <div className="detail-card-status">Latest headlines for {details.ticker}</div>
                </div>
                <button type="button" className="link-button">View All</button>
              </div>
              <div className="news-list">
                {details.news.map((item) => (
                  <article key={item.title} className="news-card">
                    <div className="news-title">{item.title}</div>
                    <div className="news-meta">{item.source} · {item.date}</div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Watchlist;
