import { Container } from "@/components/styledComponents";
import CorporateActions from "@/pages/StockDetails/CorporateActionsGrid/CorporateActionsGrid";
import StockHeader from "@/pages/StockDetails/StockHeader/StockHeader";
import StockSectionTabs from "@/pages/StockDetails/StockSectionTabs/StockSectionTabs";

export default function StockDetailsPage() {
  return (
    <Container className="flex-auto">
      {/* <div className="card"> */}
        <StockHeader
          symbol="AAPL"
          companyName="Apple Inc."
          price={150.0}
          change={2.5}
        />
        <StockSectionTabs />
        <CorporateActions />
      {/* </div> */}
    </Container>
  );
}
