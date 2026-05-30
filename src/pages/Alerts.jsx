// import { api, cleanSym, fmtTime } from "@/lib/api";
// import { useCallback, useEffect, useState } from "react";
// import { BsNewspaper } from "react-icons/bs";
// import { FiCheck, FiTrash2, FiX, FiZap } from "react-icons/fi";
// import { toast } from "sonner";

// const Alerts = () => {
//   const [rules, setRules] = useState([]);
//   const [notifs, setNotifs] = useState([]);

//   const load = useCallback(async () => {
//     const [{ data: a }, { data: n }] = await Promise.all([
//       api.get("/alerts"),
//       api.get("/notifications", { params: { limit: 100 } }),
//     ]);
//     setRules(a);
//     setNotifs(n);
//   }, []);

//   useEffect(() => { load(); }, [load]);

//   const toggle = async (id) => {
//     await api.patch(`/alerts/${id}/toggle`);
//     load();
//   };
//   const del = async (id) => {
//     await api.delete(`/alerts/${id}`);
//     toast.success("Alert deleted");
//     load();
//   };
//   const markRead = async (id) => {
//     await api.post(`/notifications/${id}/read`);
//     load();
//   };
//   const delNotif = async (id) => {
//     await api.delete(`/notifications/${id}`);
//     load();
//   };

//   return (
//     <div className="p-6 space-y-6" data-testid="alerts-page">
//       <div>
//         <div className="text-[11px] uppercase tracking-[0.2em] text-[#6B7280] font-semibold">KPI Monitoring</div>
//         <h1 className="font-display text-3xl font-semibold tracking-tight text-[#111827] mt-1">Alerts</h1>
//         <p className="text-sm text-[#6B7280] mt-1">Background scanner runs every 5 minutes · click "Scan" in topbar to run now</p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Alert rules */}
//         <div className="bg-[#fff] border border-[#e9e9e9] rounded-md">
//           <div className="px-4 py-3 border-b border-[#e9e9e9] flex items-center justify-between">
//             <div className="text-[10px] uppercase tracking-widest text-[#6B7280] font-semibold">Active Rules ({rules.length})</div>
//           </div>
//           <div className="divide-y divide-[#e9e9e9]">
//             {rules.length === 0 && <div className="p-8 text-center text-sm text-[#6B7280]">No alert rules yet · add from watchlist or stock pages</div>}
//             {rules.map((r) => (
//               <div key={r.id} data-testid={`rule-${r.id}`} className="px-4 py-3 flex items-center justify-between hover:bg-[#fff]">
//                 <div className="flex items-center gap-3">
//                   <div className={`w-8 h-8 grid place-items-center rounded ${
//                     r.type === "volume_spike" ? "bg-[#FFB020]/10 text-[#FFB020]" : "bg-[#0A84FF]/10 text-[#0A84FF]"
//                   }`}>
//                     {r.type === "volume_spike" ? <FiZap size={16} /> : <BsNewspaper size={16} />}
//                   </div>
//                   <div>
//                     <div className="font-mono text-sm font-semibold text-[#111827]">{cleanSym(r.symbol)}</div>
//                     <div className="text-xs text-[#6B7280]">
//                       {r.type === "volume_spike" ? `Volume ≥ ${r.threshold}× 10-day avg` : "Latest news headlines"}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <button
//                     onClick={() => toggle(r.id)}
//                     data-testid={`toggle-${r.id}`}
//                     className={`text-[10px] uppercase tracking-widest font-semibold px-2 py-1 rounded ${
//                       r.enabled ? "bg-[#00D26A]/10 text-[#00D26A]" : "bg-[#8F99AB]/10 text-[#8F99AB]"
//                     }`}
//                   >
//                     {r.enabled ? "ON" : "OFF"}
//                   </button>
//                   <button onClick={() => del(r.id)} className="w-7 h-7 grid place-items-center rounded hover:bg-[#FF3B30]/10 text-[#FF3B30]" data-testid={`delete-rule-${r.id}`}>
//                     <FiTrash2 size={14}/>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Notifications history */}
//         <div className="bg-[#fff] border border-[#e9e9e9] rounded-md">
//           <div className="px-4 py-3 border-b border-[#e9e9e9] flex items-center justify-between">
//             <div className="text-[10px] uppercase tracking-widest text-[#6B7280] font-semibold">History ({notifs.length})</div>
//             {notifs.some((n) => !n.read) && (
//               <button onClick={async () => { await api.post("/notifications/read-all"); load(); }} className="text-xs text-[#0A84FF] hover:underline">Mark all read</button>
//             )}
//           </div>
//           <div className="divide-y divide-[#e9e9e9] max-h-[600px] overflow-auto">
//             {notifs.length === 0 && <div className="p-8 text-center text-sm text-[#6B7280]">No alerts triggered yet</div>}
//             {notifs.map((n) => (
//               <div key={n.id} className={`px-4 py-3 ${!n.read ? "bg-[#0A84FF]/5" : ""}`}>
//                 <div className="flex items-center justify-between mb-1">
//                   <div className="flex items-center gap-2">
//                     <span className={`text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded ${
//                       n.kind === "volume_spike" ? "bg-[#FFB020]/10 text-[#FFB020]"
//                       : n.kind === "news" ? "bg-[#0A84FF]/10 text-[#0A84FF]"
//                       : "bg-[#8F99AB]/10 text-[#8F99AB]"
//                     }`}>{n.kind.replace("_"," ")}</span>
//                     <span className="font-mono text-xs text-[#111827]">{cleanSym(n.symbol)}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <span className="text-[10px] text-[#6B7280] font-mono">{fmtTime(n.created_at)}</span>
//                     {!n.read && <button onClick={() => markRead(n.id)} className="w-6 h-6 grid place-items-center rounded hover:bg-[#00D26A]/10 text-[#00D26A]"><FiCheck size={12}/></button>}
//                     <button onClick={() => delNotif(n.id)} className="w-6 h-6 grid place-items-center rounded hover:bg-[#FF3B30]/10 text-[#FF3B30]"><FiX size={12}/></button>
//                   </div>
//                 </div>
//                 <div className="text-sm text-[#111827]">{n.title}</div>
//                 <div className="text-xs text-[#6B7280] mt-0.5">{n.body}</div>
//                 {n.link && <a href={n.link} target="_blank" rel="noreferrer" className="text-xs text-[#0A84FF] hover:underline mt-1 inline-block">Open source ↗</a>}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Alerts;