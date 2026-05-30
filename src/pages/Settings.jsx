import { FiInfo } from "react-icons/fi";

const Settings = () => {
  return (
    <div className="p-6 space-y-5" data-testid="settings-page">
      <div>
        <div className="text-[11px] uppercase tracking-[0.2em] text-[#6B7280] font-semibold">Configuration</div>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-[#111827] mt-1">Settings</h1>
      </div>

      <div className="bg-[#fff] border border-[#e9e9e9] rounded-md p-5 max-w-2xl space-y-4 text-[#111827]">
        <div className="flex items-start gap-3">
          <FiInfo size={20} className="text-[#0A84FF] mt-0.5" />
          <div>
            <div className="font-semibold text-[#111827]">Data Sources</div>
            <div className="text-sm text-[#6B7280] mt-1">
              This terminal uses <span className="font-mono text-[#111827]">Yahoo Finance</span> (NSE/BSE quotes &amp; history),
              <span className="font-mono text-[#111827]"> Google News RSS</span> (headlines), and yfinance
              <span className="font-mono text-[#111827]"> corporate actions</span> — all free and public.
            </div>
          </div>
        </div>

        <div className="border-t border-[#e9e9e9] pt-4">
          <div className="font-semibold text-[#111827] mb-2">Background Scanner</div>
          <div className="text-sm text-[#6B7280]">
            KPI rules (volume spikes &amp; news) are scanned every <span className="font-mono text-[#111827]">5 minutes</span> automatically.
            Use the <span className="font-mono text-[#111827]">Scan</span> button in the top bar to run immediately.
          </div>
        </div>

        <div className="border-t border-[#e9e9e9] pt-4">
          <div className="font-semibold text-[#111827] mb-2">Symbol Format</div>
          <div className="text-sm text-[#6B7280]">
            Indian stocks use suffixes:
            <span className="font-mono text-[#111827]"> .NS</span> for NSE (e.g. RELIANCE.NS) and
            <span className="font-mono text-[#111827]"> .BO</span> for BSE (e.g. RELIANCE.BO).
            Currency is shown in <span className="font-mono text-[#111827]">₹ (INR)</span> using Indian numbering.
          </div>
        </div>

        <div className="border-t border-[#e9e9e9] pt-4">
          <div className="font-semibold text-[#111827] mb-2">About Zerodha</div>
          <div className="text-sm text-[#6B7280]">
            Zerodha Kite Connect API is a <span className="text-[#FFB020]">paid</span> service (₹2000/month).
            This app uses free alternatives for the same functionality. To enable Zerodha integration in future,
            add your Kite Connect API key under a future <span className="font-mono text-[#111827]">Integrations</span> tab.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;