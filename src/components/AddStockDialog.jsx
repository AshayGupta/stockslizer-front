// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { api, cleanSym } from "@/lib/api";
// import { useEffect, useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import { toast } from "sonner";

// const POPULAR = [
// 	{ symbol: "RELIANCE.NS", name: "Reliance Industries" },
// 	{ symbol: "TCS.NS", name: "Tata Consultancy" },
// 	{ symbol: "HDFCBANK.NS", name: "HDFC Bank" },
// 	{ symbol: "INFY.NS", name: "Infosys" },
// 	{ symbol: "ICICIBANK.NS", name: "ICICI Bank" },
// 	{ symbol: "SBIN.NS", name: "State Bank of India" },
// 	{ symbol: "BHARTIARTL.NS", name: "Bharti Airtel" },
// 	{ symbol: "ITC.NS", name: "ITC Ltd" },
// 	{ symbol: "LT.NS", name: "Larsen & Toubro" },
// 	{ symbol: "HINDUNILVR.NS", name: "Hindustan Unilever" },
// 	{ symbol: "ADANIENT.NS", name: "Adani Enterprises" },
// 	{ symbol: "TATAMOTORS.NS", name: "Tata Motors" },
// ];

// const AddStockDialog = ({ open, onOpenChange, onAdded }) => {
// 	const [q, setQ] = useState("");
// 	const [results, setResults] = useState([]);
// 	const [loading, setLoading] = useState(false);

// 	useEffect(() => {
// 		if (!open) {
// 			setQ("");
// 			setResults([]);
// 		}
// 	}, [open]);

// 	useEffect(() => {
// 		if (!q || q.length < 2) {
// 			setResults([]);
// 			return;
// 		}
// 		const t = setTimeout(async () => {
// 			setLoading(true);
// 			try {
// 				const { data } = await api.get("/search", { params: { q } });
// 				setResults(data);
// 			} catch (e) {
// 				setResults([]);
// 			}
// 			setLoading(false);
// 		}, 300);
// 		return () => clearTimeout(t);
// 	}, [q]);

// 	const add = async (item) => {
// 		try {
// 			await api.post("/watchlist", {
// 				symbol: item.symbol,
// 				name: item.name,
// 				exchange: item.exchange || "NSE",
// 			});
// 			toast.success(`${cleanSym(item.symbol)} added`);
// 			onOpenChange(false);
// 			onAdded && onAdded();
// 		} catch (e) {
// 			toast.error("Failed to add");
// 		}
// 	};

// 	const list = q.length >= 2 ? results : POPULAR;

// 	return (
// 		<Dialog open={open} onOpenChange={onOpenChange}>
// 			<DialogContent
// 				className="bg-[#fff] border-[#e9e9e9] text-[#111827] max-w-lg p-0"
// 				data-testid="add-stock-dialog"
// 			>
// 				<DialogHeader className="px-5 pt-5 pb-3">
// 					<DialogTitle className="text-base font-display tracking-tight">
// 						Add to Watchlist
// 					</DialogTitle>
// 				</DialogHeader>
// 				<div className="px-5 pb-3">
// 					<div className="relative">
// 						<FiSearch
// 							size={16}
// 							className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]"
// 						/>
// 						<Input
// 							data-testid="search-stock-input"
// 							autoFocus
// 							value={q}
// 							onChange={(e) => setQ(e.target.value)}
// 							placeholder="Search Indian stocks (e.g. RELIANCE, TCS)…"
// 							className="pl-9 bg-[#fff] border-[#e9e9e9] text-[#111827] placeholder:text-[#6B7280] focus:border-[#0A84FF] focus:ring-0 font-mono"
// 						/>
// 					</div>
// 				</div>
// 				<div className="px-2 pb-3 max-h-80 overflow-auto">
// 					<div className="px-3 pb-2 text-[10px] uppercase tracking-widest text-[#6B7280] font-semibold">
// 						{q.length >= 2
// 							? loading
// 								? "Searching…"
// 								: "Results"
// 							: "Popular Indian Stocks"}
// 					</div>
// 					{list.length === 0 && !loading && (
// 						<div className="px-3 py-6 text-center text-sm text-[#6B7280]">
// 							No matches
// 						</div>
// 					)}
// 					{list.map((it) => (
// 						<button
// 							key={it.symbol}
// 							onClick={() => add(it)}
// 							data-testid={`add-result-${it.symbol}`}
// 							className="w-full text-left px-3 py-2 rounded-md hover:bg-[#E6FFFA] flex items-center justify-between group transition-colors"
// 						>
// 							<div>
// 								<div className="font-mono text-sm font-semibold text-[#111827]">
// 									{cleanSym(it.symbol)}
// 								</div>
// 								<div className="text-xs text-[#6B7280]">{it.name}</div>
// 							</div>
// 							<div className="text-[10px] uppercase tracking-widest text-[#5C6577] group-hover:text-[#00D26A]">
// 								{it.exchange || "NSE"}
// 							</div>
// 						</button>
// 					))}
// 				</div>
// 			</DialogContent>
// 		</Dialog>
// 	);
// };

// export default AddStockDialog;