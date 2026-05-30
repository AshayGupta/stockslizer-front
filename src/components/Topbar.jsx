// import AddStockDialog from "@/components/AddStockDialog";
// import { Button } from "@/components/ui/button";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { api, fmtTime } from "@/lib/api";
// import { useEffect, useState } from "react";
// import { FiBell, FiPlus, FiRefreshCw } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import { toast } from "sonner";

// const Topbar = ({ onChange }) => {
//   const [notifs, setNotifs] = useState([]);
//   const [unread, setUnread] = useState(0);
//   const [scanning, setScanning] = useState(false);
//   const [addOpen, setAddOpen] = useState(false);

//   const loadNotifs = async () => {
//     try {
//       const { data } = await api.get("/notifications", { params: { limit: 20 } });
//       setNotifs(data);
//       setUnread(data.filter((n) => !n.read).length);
//     } catch (e) {
//       /* noop */
//     }
//   };

//   useEffect(() => {
//     loadNotifs();
//     const t = setInterval(loadNotifs, 30000);
//     return () => clearInterval(t);
//   }, []);

//   const markAll = async () => {
//     await api.post("/notifications/read-all");
//     loadNotifs();
//   };

//   const scan = async () => {
//     setScanning(true);
//     try {
//       const { data } = await api.post("/scan-now");
//       toast.success(`Scan complete · ${data.new_notifications} new alert${data.new_notifications === 1 ? "" : "s"}`);
//       loadNotifs();
//     } catch (e) {
//       toast.error("Scan failed");
//     }
//     setScanning(false);
//   };

//   return (
//     <header className="h-14 sticky top-0 z-30 border-b border-[#e9e9e9] bg-[#fff]/95 backdrop-blur flex items-center px-6 gap-4">
//       <div className="text-sm text-[#6B7280] font-mono">
//         {new Date().toLocaleDateString("en-IN", { weekday: "short", day: "2-digit", month: "short", year: "numeric" })}
//       </div>
//       <div className="flex-1" />

//       <Button
//         variant="outline"
//         size="sm"
//         onClick={scan}
//         disabled={scanning}
//         data-testid="topbar-scan-btn"
//         className="bg-[#fff] border-[#e9e9e9] hover:bg-[#eee] hover:border-[#e9e9e9] text-[#0A84FF] gap-2"
//       >
//         <FiRefreshCw size={14} className={scanning ? "animate-spin" : ""} />
//         Scan
//       </Button>

//       <Button
//         size="sm"
//         onClick={() => setAddOpen(true)}
//         data-testid="topbar-add-stock-btn"
//         className="bg-gradient-to-br from-[#00D26A] to-[#0A84FF] hover:from-[#00b85c] text-[#090A0C] font-semibold gap-2"
//       >
//         <FiPlus size={14} />
//         Add Stock
//       </Button>

//       <Popover>
//         <PopoverTrigger asChild>
//           <button
//             data-testid="topbar-notif-btn"
//             className="relative w-9 h-9 grid place-items-center rounded-md border border-[#e9e9e9] hover:border-[#0A84FF] hover:bg-[#E6FFFA] transition-colors"
//           >
//             <FiBell size={18} className="text-[#0A84FF]" />
//             {unread > 0 && (
//               <span data-testid="notif-unread-badge" className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-[#FF3B30] text-[10px] font-mono font-bold flex items-center justify-center text-white">
//                 {unread}
//               </span>
//             )}
//           </button>
//         </PopoverTrigger>
//         <PopoverContent
//           align="end"
//           className="w-96 p-0 bg-[#fff] border border-[#e9e9e9] text-[#111827] shadow"
//         >
//           <div className="flex items-center justify-between px-3 py-2 border-b border-[#e9e9e9]">
//             <div className="text-xs uppercase tracking-widest text-[#6B7280] font-semibold">Notifications</div>
//             {unread > 0 && (
//               <button onClick={markAll} className="text-xs text-[#0A84FF] hover:underline" data-testid="notif-mark-all-read">Mark all read</button>
//             )}
//           </div>
//           <div className="max-h-96 overflow-auto">
//             {notifs.length === 0 ? (
//               <div className="px-3 py-8 text-center text-sm text-[#6B7280]">No notifications yet</div>
//             ) : (
//               notifs.map((n) => (
//                 <div key={n.id} data-testid={`notif-${n.id}`} className={`px-3 py-2.5 border-b border-[#e9e9e9] hover:bg-[#eee] ${!n.read ? "bg-[#0A84FF]/5" : ""}`}>
//                   <div className="flex items-center gap-2 mb-1">
//                     <span className={`text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded ${
//                       n.kind === "volume_spike" ? "bg-[#FFB020]/10 text-[#FFB020]"
//                       : n.kind === "news" ? "bg-[#0A84FF]/10 text-[#0A84FF]"
//                       : "bg-[#8F99AB]/10 text-[#8F99AB]"
//                     }`}>{n.kind.replace("_", " ")}</span>
//                     <span className="font-mono text-xs text-[#6B7280]">{(n.symbol || "").replace(/\.(NS|BO)$/, "")}</span>
//                     <span className="ml-auto text-[10px] text-[#6B7280] font-mono">{fmtTime(n.created_at)}</span>
//                   </div>
//                   <div className="text-sm font-medium text-[#111827]">{n.title}</div>
//                   <div className="text-xs text-[#6B7280] mt-0.5 line-clamp-2">{n.body}</div>
//                   {n.link && (
//                     <a href={n.link} target="_blank" rel="noreferrer" className="text-xs text-[#0A84FF] hover:underline mt-1 inline-block">Open source ↗</a>
//                   )}
//                 </div>
//               ))
//             )}
//           </div>
//           <div className="p-2 border-t border-[#e9e9e9] text-center">
//             <Link to="/alerts" className="text-xs text-[#6B7280] hover:text-[#0A84FF]">View all alerts →</Link>
//           </div>
//         </PopoverContent>
//       </Popover>

//       <AddStockDialog open={addOpen} onOpenChange={setAddOpen} onAdded={onChange} />
//     </header>
//   );
// };

// export default Topbar;
