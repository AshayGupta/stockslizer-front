import { Icons } from "@/common/icons";
import Listview from "@/pages/StockDetails/Overview/Listview/Listview";
import "./Overview.scss";
import ShareholdingPattern from "@/pages/StockDetails/Overview/ShareholdingPattern/ShareholdingPattern";

const key_metrics = [
  {
    key: 'market_cap',
    label: "Market Cap",
    value: "₹19.70 L Cr",
    icon: Icons.Building2Icon,
    color: "var(--purple)",
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
    color: "var(--success)",
  },
  {
    key: '52_week_high',
    label: "52W High",
    value: "₹3,217.90",
    color: "var(--success)",
  },
  {
    key: '52_week_low',
    label: "52W Low",
    value: "₹2,220.30",
    color: "var(--danger)",
  },
  {
    key: 'day_high',
    label: "Day High",
    value: "₹2,925.00",
    color: "var(--success)",
  },
  {
    key: 'day_low',
    label: "Day Low",
    value: "₹2,885.00",
    color: "var(--danger)",
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
    "color": "var(--purple)"
  },
  {
    "key": "netProfit",
    "label": "Net Profit",
    "value": "₹74,227 Cr",
    "icon": Icons.ChartColumnIcon,
    "color": "var(--primary)"
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

const company_information = [
  {
    key: "sector",
    label: "Sector",
    value: "Oil, Gas & Consumable Fuels",
    // icon: Icons.BriefcaseIcon,
    // color: "var(--primary)",
  },
  {
    key: "industry",
    label: "Industry",
    value: "Integrated Oil & Gas",
    // icon: Icons.FactoryIcon,
    // color: "var(--purple)",
  },
  {
    key: "marketCap",
    label: "Market Cap",
    value: "₹19.70 Lakh Crore",
    // icon: Icons.Building2Icon,
    // color: "var(--emerald)",
  },
  {
    key: "enterpriseValue",
    label: "Enterprise Value",
    value: "₹25.80 Lakh Crore",
    // icon: Icons.LandmarkIcon,
    // color: "var(--dark-theme-accent)",
  },
  {
    key: "promoterHolding",
    label: "Promoter Holding",
    value: "50.31%",
    // icon: Icons.UsersIcon,
    // color: "var(--primary)",
  },
  {
    key: "website",
    label: "Website",
    value: "Reliance Industries",
    type: {name: "link", value: "https://ril.com"},
    // icon: Icons.GlobeIcon,
    color: "var(--indigo)",
  },
  {
    key: "nseSymbol",
    label: "NSE Symbol",
    value: "RELIANCE",
    // icon: Icons.BadgeInfoIcon,
    // color: "var(--emerald)",
  },
  {
    key: "bseCode",
    label: "BSE Code",
    value: "500325",
    // icon: Icons.HashIcon,
    // color: "var(--purple)",
  },
  {
    key: "isin",
    label: "ISIN",
    value: "INE002A01018",
    // icon: Icons.FingerprintIcon,
    // color: "var(--primary)",
  },
  {
    key: "faceValue",
    label: "Face Value",
    value: "₹10",
    // icon: Icons.BadgeIndianRupeeIcon,
    // color: "var(--dark-theme-accent)",
  },
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

      <div className="grid grid-cols-[250px_1fr_1fr] gap-2">
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
          <ShareholdingPattern />
        </div>

        <div className="card">
          <h3 className="text-card-title">Financial Highlight</h3>
          <Listview items={financial_highlight} />
        </div>

        <div className="card">
          <h3 className="text-card-title">Company Information</h3>
          <Listview items={company_information} />
        </div>

        {/* <div className="card">
          <h3 className="text-card-title">Other Details</h3>
        </div> */}
      </div>
    </div>
  );
};

export default Overview;
