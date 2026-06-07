import "@/App.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import { SonnerToaster } from "@/components/Toaster";
import Dashboard from "@/pages/Dashboard/Dashboard";
import News from "@/pages/News/News";
import Settings from "@/pages/Settings/Settings";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <div className="flex h-full">
          <Sidebar />

          <div className="flex-1 flex flex-col min-h-0">
            <main className="flex-1 min-h-0 overflow-hidden">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/news" element={<News />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
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