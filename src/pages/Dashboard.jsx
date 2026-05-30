// import Sparkline from "@/components/Sparkline";
// import { api, cleanSym, inr } from "@/lib/api";
// import { useCallback, useEffect, useState } from "react";
// import { BsNewspaper } from "react-icons/bs";
// import { FiArrowDown, FiArrowUp, FiExternalLink, FiZap } from "react-icons/fi";
// import { Link } from "react-router-dom";

// const KPI = ({ label, value, sub, testId, accent }) => (
//   <div data-testid={testId} className="bg-[#fff] border border-[#e9e9e9] rounded-md p-4 flex flex-col gap-1.5">
//     <div className="text-[10px] uppercase tracking-widest text-[#5C6577] font-semibold">{label}</div>
//     <div className={`font-mono text-2xl font-medium ${accent || "text-[#111827]"}`}>{value}</div>
//     {sub && <div className="text-xs text-[#8F99AB] font-mono">{sub}</div>}
//   </div>
// );

// const StockCard = ({ q, w, spark }) => {
//   const up = q.change >= 0;
//   return (
//     <Link
//       to={`/stock/${encodeURIComponent(q.symbol)}`}
//       data-testid={`stock-card-${q.symbol}`}
//       className="bg-[#fff] border border-[#e9e9e9] p-3 block hover:bg-[#eee] transition-colors group rounded-md"
//     >
//       <div className="flex items-center justify-between mb-1">
//         <div>
//           <div className="font-mono font-semibold text-sm text-[#111827]">{cleanSym(q.symbol)}</div>
//           <div className="text-[11px] text-[#6B7280] truncate max-w-[140px]">{w?.name || cleanSym(q.symbol)}</div>
//         </div>
//         <FiExternalLink size={14} className="text-[#5C6577] group-hover:text-[#0A84FF]" />
//       </div>
//       <Sparkline data={spark} up={up} height={40} />
//       <div className="flex items-end justify-between mt-1">
//         <div className="font-mono font-semibold text-base text-[#111827]">₹{inr(q.price)}</div>
//         <div className={`font-mono text-xs flex items-center gap-0.5 ${up ? "text-[#00D26A]" : "text-[#FF3B30]"}`}>
//           {up ? <FiArrowUp size={11} /> : <FiArrowDown size={11} />}
//           {q.change_pct?.toFixed(2)}%
//         </div>
//       </div>
//     </Link>
//   );
// };

// const Dashboard = () => {
//   const [watchlist, setWatchlist] = useState([]);
//   const [quotes, setQuotes] = useState({});
//   const [sparks, setSparks] = useState({});
//   const [news, setNews] = useState([]);
//   const [notifs, setNotifs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const load = useCallback(async () => {
//     try {
//       const [{ data: w }, { data: n }, { data: nf }] = await Promise.all([
//         api.get("/watchlist"),
//         api.get("/news"),
//         api.get("/notifications", { params: { limit: 8 } }),
//       ]);
//       setWatchlist(w);
//       setNews(n);
//       setNotifs(nf);

//       if (w.length > 0) {
//         const syms = w.map((s) => s.symbol).join(",");
//         const { data: qs } = await api.get("/quotes", { params: { symbols: syms } });
//         const map = {};
//         qs.forEach((q) => { map[q.symbol] = q; });
//         setQuotes(map);

//         // sparklines (5d)
//         const sparkRes = await Promise.all(
//           w.slice(0, 12).map(async (s) => {
//             try {
//               const { data } = await api.get(`/history/${encodeURIComponent(s.symbol)}`, { params: { period: "5d", interval: "30m" } });
//               return [s.symbol, data];
//             } catch { return [s.symbol, []]; }
//           })
//         );
//         const sm = {};
//         sparkRes.forEach(([sym, d]) => { sm[sym] = d; });
//         setSparks(sm);
//       }
//     } catch (e) { console.error(e); }
//     setLoading(false);
//   }, []);

//   useEffect(() => {
//     load();
//     const t = setInterval(load, 60000);
//     return () => clearInterval(t);
//   }, [load]);

//   const quoteList = watchlist.map((w) => quotes[w.symbol]).filter(Boolean);
//   const gainers = [...quoteList].sort((a, b) => b.change_pct - a.change_pct).slice(0, 3);
//   const losers = [...quoteList].sort((a, b) => a.change_pct - b.change_pct).slice(0, 3);
//   const totalUp = quoteList.filter((q) => q.change >= 0).length;
//   const totalDown = quoteList.length - totalUp;
//   const avgPct = quoteList.length ? (quoteList.reduce((a, b) => a + b.change_pct, 0) / quoteList.length) : 0;

//   return (
//     <div className="p-6 space-y-6" data-testid="dashboard-page">
//       {/* Header */}
//       <div className="flex items-end justify-between">
//         <div>
//           <div className="text-[11px] uppercase tracking-[0.2em] text-[#5C6577] font-semibold">Overview</div>
//           <h1 className="font-display text-3xl font-semibold tracking-tight text-[#111827] mt-1">Market Pulse</h1>
//         </div>
//         <div className="text-xs font-mono text-[#6B7280]">{quoteList.length} symbols tracked</div>
//       </div>

//       {/* KPIs */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         <KPI label="Watchlist" value={watchlist.length} sub={`${totalUp} up · ${totalDown} down`} testId="kpi-watchlist-count" />
//         <KPI label="Avg Move" value={`${avgPct >= 0 ? "+" : ""}${avgPct.toFixed(2)}%`}
//              accent={avgPct >= 0 ? "text-[#00D26A]" : "text-[#FF3B30]"} testId="kpi-avg-move" />
//         <KPI label="Active Alerts" value={notifs.filter((n) => !n.read).length} sub="unread" testId="kpi-active-alerts" />
//         <KPI label="News Today" value={news.length} sub="market headlines" testId="kpi-news-count" />
//       </div>

//       {/* Top movers row */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//         <div className="bg-[#fff] border border-[#e9e9e9] rounded-md p-4">
//           <div className="flex items-center justify-between mb-3">
//             <div className="text-[10px] uppercase tracking-widest text-[#5C6577] font-semibold flex items-center gap-1.5">
//               <FiArrowUp size={12} className="text-[#00D26A]" /> Top Gainers
//             </div>
//             <Link to="/watchlist" className="text-xs text-[#6B7280] hover:text-[#0A84FF]">View all →</Link>
//           </div>
//           <div className="space-y-1">
//             {gainers.length === 0 && <div className="text-sm text-[#5C6577] py-4 text-center">Add stocks to start tracking</div>}
//             {gainers.map((q) => (
//               <Link key={q.symbol} to={`/stock/${encodeURIComponent(q.symbol)}`} className="flex items-center justify-between px-2 py-2 rounded hover:bg-[#E6FFFA] border-b border-[#e9e9e9] last:border-b-0">
//                 <div className="font-mono text-sm font-semibold text-[#111827]">{cleanSym(q.symbol)}</div>
//                 <div className="flex items-center gap-3">
//                   <div className="font-mono text-sm text-[#111827]">₹{inr(q.price)}</div>
//                   <div className="font-mono text-xs text-[#00D26A] w-16 text-right">+{q.change_pct?.toFixed(2)}%</div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>

//         <div className="bg-[#fff] border border-[#e9e9e9] rounded-md p-4">
//           <div className="flex items-center justify-between mb-3">
//             <div className="text-[10px] uppercase tracking-widest text-[#5C6577] font-semibold flex items-center gap-1.5">
//               <FiArrowDown size={12} className="text-[#FF3B30]" /> Top Losers
//             </div>
//             <Link to="/watchlist" className="text-xs text-[#6B7280] hover:text-[#0A84FF]">View all →</Link>
//           </div>
//           <div className="space-y-1">
//             {losers.length === 0 && <div className="text-sm text-[#5C6577] py-4 text-center">No data yet</div>}
//             {losers.map((q) => (
//               <Link key={q.symbol} to={`/stock/${encodeURIComponent(q.symbol)}`} className="flex items-center justify-between px-2 py-2 rounded hover:bg-[#E6FFFA] border-b border-[#e9e9e9] last:border-b-0">
//                 <div className="font-mono text-sm font-semibold text-[#111827]">{cleanSym(q.symbol)}</div>
//                 <div className="flex items-center gap-3">
//                   <div className="font-mono text-sm text-[#111827]">₹{inr(q.price)}</div>
//                   <div className="font-mono text-xs text-[#FF3B30] w-16 text-right">{q.change_pct?.toFixed(2)}%</div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Stock grid */}
//       <div>
//         <div className="text-[10px] uppercase tracking-widest text-[#5C6577] font-semibold mb-3">Watchlist Pulse</div>
//         {watchlist.length === 0 ? (
//           <div className="bg-[#fff] border border-[#e9e9e9] rounded-md p-12 text-center">
//             <div className="text-[#6B7280] mb-2">No stocks in your watchlist yet</div>
//             <div className="text-sm text-[#5C6577]">Click "Add Stock" above to start tracking Indian equities</div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
//             {watchlist.map((w) => quotes[w.symbol] && (
//               <StockCard key={w.symbol} q={quotes[w.symbol]} w={w} spark={sparks[w.symbol] || []} />
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Bottom row: recent alerts + market news */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//         <div className="bg-[#fff] border border-[#e9e9e9] rounded-md p-4">
//           <div className="flex items-center justify-between mb-3">
//             <div className="text-[10px] uppercase tracking-widest text-[#5C6577] font-semibold flex items-center gap-1.5">
//               <FiZap size={12} className="text-[#FFB020]" /> Recent Alerts
//             </div>
//             <Link to="/alerts" className="text-xs text-[#6B7280] hover:text-[#0A84FF]">View all →</Link>
//           </div>
//           <div className="space-y-1 max-h-72 overflow-auto">
//             {notifs.length === 0 && <div className="text-sm text-[#5C6577] py-6 text-center">No alerts yet · create rules in Alerts</div>}
//             {notifs.map((n) => (
//               <div key={n.id} className="px-2 py-2 rounded hover:bg-[#E6FFFA] border-b border-[#e9e9e9] last:border-b-0">
//                 <div className="flex items-center gap-2 mb-0.5">
//                   <span className={`text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded ${
//                     n.kind === "volume_spike" ? "bg-[#FFB020]/10 text-[#FFB020]" : n.kind === "news" ? "bg-[#0A84FF]/10 text-[#0A84FF]" : "bg-[#8F99AB]/10 text-[#8F99AB]"
//                   }`}>{n.kind.replace("_"," ")}</span>
//                   <span className="font-mono text-xs text-[#111827]">{cleanSym(n.symbol)}</span>
//                 </div>
//                 <div className="text-xs text-[#111827]">{n.title}</div>
//                 <div className="text-[11px] text-[#6B7280] line-clamp-1">{n.body}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="bg-[#fff] border border-[#e9e9e9] rounded-md p-4">
//           <div className="flex items-center justify-between mb-3">
//             <div className="text-[10px] uppercase tracking-widest text-[#5C6577] font-semibold flex items-center gap-1.5">
//               <BsNewspaper size={12} className="text-[#0A84FF]" /> Market News
//             </div>
//             <Link to="/news" className="text-xs text-[#6B7280] hover:text-[#0A84FF]">View all →</Link>
//           </div>
//           <div className="space-y-2 max-h-72 overflow-auto">
//             {news.slice(0, 8).map((n, i) => (
//               <a key={i} href={n.link} target="_blank" rel="noreferrer" className="block px-2 py-2 rounded hover:bg-[#E6FFFA] border-b border-[#e9e9e9] last:border-b-0">
//                 <div className="text-sm text-[#111827] line-clamp-2">{n.title}</div>
//                 <div className="text-[11px] text-[#5C6577] mt-0.5 font-mono">{n.source}</div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;