// import AddStockDialog from "@/components/AddStockDialog";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { api, fmtTime } from "@/lib/api";
import { useEffect, useState } from "react";

const Topbar = ({ onChange }) => {
  const [notifs, setNotifs] = useState([]);
  const [unread, setUnread] = useState(0);
  const [scanning, setScanning] = useState(false);
  const [addOpen, setAddOpen] = useState(false);

  const loadNotifs = async () => {
    try {
      const { data } = await api.get("/notifications", { params: { limit: 20 } });
      setNotifs(data);
      setUnread(data.filter((n) => !n.read).length);
    } catch (e) {
      /* noop */
    }
  };

  useEffect(() => {
    loadNotifs();
    const t = setInterval(loadNotifs, 30000);
    return () => clearInterval(t);
  }, []);

  const markAll = async () => {
    await api.post("/notifications/read-all");
    loadNotifs();
  };

  const scan = async () => {
    setScanning(true);
    try {
      const { data } = await api.post("/scan-now");
      toast.success(`Scan complete · ${data.new_notifications} new alert${data.new_notifications === 1 ? "" : "s"}`);
      loadNotifs();
    } catch (e) {
      toast.error("Scan failed");
    }
    setScanning(false);
  };

   const formattedDate = (() => {
    const raw = new Date().toLocaleDateString("en-IN", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    return raw.replace(/, (\d{4})$/, " $1");
  })();

  return (
    <header className="h-14 sticky top-0 z-30 border-b border-[#e9e9e9] bg-[#fff]/95 backdrop-blur flex items-center px-6 gap-4">
      <div className="text-sm text-[#6B7280] font-mono">
        {formattedDate}
      </div>
    </header>
  );
};

export default Topbar;
