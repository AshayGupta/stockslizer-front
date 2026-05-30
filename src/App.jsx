import "@/App.css";
import Sidebar from "@/components/Sidebar";
import Settings from "@/pages/Settings";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SonnerToaster } from "./components/Toaster";


function App() {
  const [refreshKey, setRefreshKey] = useState(0);
  const triggerRefresh = () => setRefreshKey((k) => k + 1);

  return (
    <div className="App min-h-screen bg-[#fff] text-[#111827]">
      <BrowserRouter>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 min-w-0">
            {/* <Topbar onChange={triggerRefresh} /> */}
            <main key={refreshKey} className="min-h-[calc(100vh-3.5rem)]">
              <Routes>
                {/* <Route path="/" element={<Dashboard />} /> */}
                {/* <Route path="/watchlist" element={<Watchlist />} /> */}
                {/* <Route path="/stock/:symbol" element={<StockDetail />} /> */}
                {/* <Route path="/alerts" element={<Alerts />} /> */}
                {/* <Route path="/news" element={<News />} /> */}
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