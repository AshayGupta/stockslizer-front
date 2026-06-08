import { Icons } from "@/common/icons";
import Listview from "@/pages/StockDetails/Overview/Listview/Listview";
import "./Overview.scss";

const key_metrics = [
  {
    key: 'market_cap',
    label: "Market Cap",
    value: "₹19.70 L Cr",
    icon: Icons.Building2Icon,
    color: "var(--indigo)",
  },
  {
    key: 'current_pe',
    label: "Current PE",
    value: "28.40",
    icon: Icons.BadgeIndianRupeeIcon,
    color: "var(--emerald)",
  },
  {
    key: 'pb_ratio',
    label: "PB Ratio",
    value: "2.15",
    icon: Icons.WalletIcon,
    color: "var(--primary)",
  },
  {
    key: 'div_yield',
    label: "Dividend Yield",
    value: "0.48%",
    icon: Icons.CoinsIcon,
    color: "var(--dark-theme-accent)",
  },
  {
    key: 'roe',
    label: "ROE",
    value: "8.20%",
    icon: Icons.TrendingUpIcon,
    color: "var(--success)",
  },
  {
    key: 'roce',
    label: "ROCE",
    value: "9.40%",
    icon: Icons.PercentIcon,
    color: "var(--primary)",
  },
  {
    key: 'eps',
    label: "EPS (TTM)",
    value: "₹102.45",
    icon: Icons.CircleDollarSignIcon,
    color: "var(--indigo)",
  },
  {
    key: 'book_value',
    label: "Book Value",
    value: "₹1,352.70",
    icon: Icons.BookOpenIcon,
    color: "var(--text-brand-color)",
  },
];

const price_stats = [
  {
    key: 'price',
    label: "Current Price",
    value: "₹2,912.40",
    color: "positive",
  },
  {
    key: '52_week_high',
    label: "52W High",
    value: "₹3,217.90",
    color: "positive",
  },
  {
    key: '52_week_low',
    label: "52W Low",
    value: "₹2,220.30",
    color: "negative",
  },
  {
    key: 'day_high',
    label: "Day High",
    value: "₹2,925.00",
    color: "positive",
  },
  {
    key: 'day_low',
    label: "Day Low",
    value: "₹2,885.00",
    color: "negative",
  },
  {
    key: 'avg_vol',
    label: "Avg Volume (20D)",
    value: "48.21 Lakh",
  },
  {
    key: 'beta',
    label: "Beta",
    value: "0.74",
  },
  {
    key: 'volatility',
    label: "Volatility (1Y)",
    value: "18.35%",
  },
];

const financial_highlight = [
  {
    "key": "revenue",
    "label": "Revenue",
    "value": "₹8,90,123 Cr",
    "icon": Icons.BanknoteIcon,
    "color": "var(--primary)"
  },
  {
    "key": "netProfit",
    "label": "Net Profit",
    "value": "₹74,227 Cr",
    "icon": Icons.ChartColumnIcon,
    "color": "var(--indigo)"
  },
  {
    "key": "operatingProfit",
    "label": "Operating Profit",
    "value": "₹1,02,345 Cr",
    "icon": Icons.CircleDollarSignIcon,
    "color": "var(--emerald)"
  },
  {
    "key": "eps",
    "label": "EPS (TTM)",
    "value": "₹102.45",
    "icon": Icons.BadgeDollarSignIcon,
    "color": "var(--dark-theme-accent)"
  },
  {
    "key": "roe",
    "label": "ROE",
    "value": "8.20%",
    "icon": Icons.TrendingUpIcon,
    "color": "var(--emerald)"
  },
  {
    "key": "roce",
    "label": "ROCE",
    "value": "9.40%",
    "icon": Icons.PercentIcon,
    "color": "var(--primary)"
  },
  {
    "key": "debtToEquity",
    "label": "Debt to Equity",
    "value": "0.42",
    "icon": Icons.ScaleIcon,
    "color": "#f43f5e"
  },
  {
    "key": "currentRatio",
    "label": "Current Ratio",
    "value": "1.15",
    "icon": Icons.ShieldCheckIcon,
    "color": "#60a5fa"
  }
];

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="card about-card">
        <h3 className="text-card-title">About</h3>
        <p>
          Reliance Industries Limited is an Indian multinational conglomerate
          company, headquartered in Mumbai, India. Reliance is India's largest
          company by market value and is among the world's most profitable
          companies. The company's businesses span hydrocarbon exploration and
          production, petroleum refining and marketing, petrochemicals, advanced
          materials, composites, telecom, and retail.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="card">
          <h3 className="text-card-title">Key Metrics</h3>
          <Listview items={key_metrics}/>
        </div>

        <div className="card">
          <h3 className="text-card-title">Price Statistics</h3>
          <Listview items={price_stats} />
        </div>

        <div className="card">
          <h3 className="text-card-title">Shareholding Pattern</h3>
        </div>

        <div className="card">
          <h3 className="text-card-title">Financial Highlight</h3>
          <Listview items={financial_highlight} />
        </div>

        <div className="card">
          <h3 className="text-card-title">Company Information</h3>
        </div>

        <div className="card">
          <h3 className="text-card-title">Other Details</h3>
        </div>
      </div>
    </div>
  );
};

export default Overview;
