import { Container } from "@/components/styledComponents";
import CorporateActions from "@/pages/StockDetails/CorporateActionsGrid/CorporateActionsGrid";
import StockHeader from "@/pages/StockDetails/StockHeader/StockHeader";

export default function StockDetailsPage() {
  return (
    <Container className="flex-auto">
      <StockHeader
        symbol="AAPL"
        companyName="Apple Inc."
        price={150.0}
        change={2.5}
      />
      <CorporateActions />
    </Container>
  );
}
