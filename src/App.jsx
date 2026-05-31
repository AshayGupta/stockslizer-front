import "@/App.css";
import Sidebar from "@/components/Sidebar";
import { SonnerToaster } from "@/components/Toaster";
import Topbar from "@/components/Topbar";
import News from "@/pages/News";
import Settings from "@/pages/Settings";
import Watchlist from "@/pages/Watchlist";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [refreshKey, setRefreshKey] = useState(0);
  const triggerRefresh = () => setRefreshKey((k) => k + 1);

  return (
    <div className="h-screen bg-[#fff] text-[#111827]">
      <BrowserRouter>
        <div className="flex h-full">
          <Sidebar />

          <div className="flex-1 flex flex-col min-h-0">
            <Topbar onChange={triggerRefresh} />

            <main key={refreshKey} className="flex-1 min-h-0 overflow-hidden">
              <Routes>
                {/* <Route path="/" element={<Dashboard />} /> */}
                <Route path="/watchlist" element={<Watchlist />} />
                {/* <Route path="/stock/:symbol" element={<StockDetail />} /> */}
                {/* <Route path="/alerts" element={<Alerts />} /> */}
                <Route path="/news" element={<News />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </div>

        <SonnerToaster />
      
      </BrowserRouter>
    </div>
  );
}

export default App;