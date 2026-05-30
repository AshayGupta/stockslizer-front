import { Loader } from "@/components/Loader";
import { useEffect, useState } from "react";
import { BsNewspaper } from "react-icons/bs";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try { 
        // const data = await fetchAllNews();
        setNews(data);
      } catch {
      } finally {
        setLoading(false);
    }
    })();
  }, []);

  return (
    <div className="p-6 space-y-5" data-testid="news-page">
      <div>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-[#111827] mt-1">Indian Market Insights</h1>
        <p className="text-sm text-[#6B7280] mt-1">Aggregated from Google News &amp; Yahoo Finance : free public sources</p>
      </div>

      <div className="bg-[#fff] border border-[#e9e9e9] rounded-md">
        {loading && <Loader />}
        {!loading && news.length === 0 && <div className="p-8 text-center text-sm text-[#6B7280]">No news available</div>}
        <div className="divide-y divide-[#e9e9e9]">
          {news.map((n, i) => (
            <a
              key={i}
              href={n.link}
              target="_blank"
              rel="noreferrer"
              data-testid={`news-item-${i}`}
              className="flex items-start gap-3 px-4 py-3.5 hover:bg-[#E6FFFA] transition-colors"
            >
              <div className="w-8 h-8 shrink-0 grid place-items-center rounded bg-[#0A84FF]/10 text-[#0A84FF]">
                <BsNewspaper size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm text-[#111827]">{n.title}</div>
                <div className="text-[11px] text-[#6B7280] mt-1 font-mono flex gap-3">
                  <span>{n.source}</span>
                  {n.published && <span>· {n.published}</span>}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;