import DonutChart from "@/components/Charts/DonutChart";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const shareholding = [
  { name: "Promoters", value: 50.31, fill: "#2563eb" },
  { name: "FIIs", value: 25.18, fill: "#14b8a6" },
  { name: "DIIs", value: 13.25, fill: "#f59e0b" },
  { name: "Public", value: 11.26, fill: "#8b5cf6" },
];

const ShareholdingPattern = () => {
  return (
    <Container>
      <DonutChart data={shareholding} />
    </Container>
  );
};

export default ShareholdingPattern;
