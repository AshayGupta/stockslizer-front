import { Icons } from "@/common/icons";
import { PageContainer, ScrollableContent } from "@/components/styledComponents";
import CorporateActionsGrid from "@/pages/StockDetails/CorporateActionsGrid/CorporateActionsGrid";
import DetailsSectionTabs from "@/pages/StockDetails/DetailsSectionTabs/DetailsSectionTabs";
import Overview from "@/pages/StockDetails/Overview/Overview";
import StockHeader from "@/pages/StockDetails/StockHeader/StockHeader";
import { useState } from "react";

const tabs = [
  { id: "overview", label: "Overview", icon: Icons.LayoutGridIcon, iconColor: "#e65100", component: <Overview /> },
  { id: "corpAction", label: "Corporate Actions", icon: Icons.BadgeDollarSignIcon, iconColor: "#135ea9", component: <CorporateActionsGrid /> },
  { id: "news", label: "News", icon: Icons.NewspaperIcon, iconColor: "#96187d" },
  { id: "financials", label: "Financials", icon: Icons.LineChartIcon, iconColor: "#058a15" },
  { id: "alerts", label: "Alerts", icon: Icons.BellIcon, iconColor: "#cc9a2f" },
];

export default function StockDetailsPage() {
  const [tabSelectedComponent, setTabSelectedComponent] = useState(<Overview/>);

  return (
    <PageContainer className="flex-auto gap-2">
      <div className="container-style">
        <StockHeader
          symbol="AAPL"
          companyName="Apple Inc."
          price={150.0}
          change={2.5}
        />
        <DetailsSectionTabs tabs={tabs} onTabSelect={setTabSelectedComponent} />
      </div>

      <ScrollableContent>
        {tabSelectedComponent}
      </ScrollableContent>
    </PageContainer>
  );
}
