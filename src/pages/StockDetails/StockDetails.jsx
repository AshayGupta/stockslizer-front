import { Container } from "@/components/styledComponents";
import DetailsSectionTabs from "@/pages/StockDetails/DetailsSectionTabs/DetailsSectionTabs";
import Overview from "@/pages/StockDetails/Overview/Overview";
import StockHeader from "@/pages/StockDetails/StockHeader/StockHeader";
import { useState } from "react";

export default function StockDetailsPage() {
  const [tabSelectedComponent, setTabSelectedComponent] = useState(<Overview/>);

  return (
    <Container className="flex-auto">
      <StockHeader
        symbol="AAPL"
        companyName="Apple Inc."
        price={150.0}
        change={2.5}
      />
      <DetailsSectionTabs onTabSelect={setTabSelectedComponent} />
      {tabSelectedComponent}
    </Container>
  );
}
