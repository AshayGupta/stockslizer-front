import { Icons } from "@/common/icons";
import CorporateActionsGrid from "@/pages/StockDetails/CorporateActionsGrid/CorporateActionsGrid";
import Overview from "@/pages/StockDetails/Overview/Overview";
import { useState } from "react";
import styled from "styled-components";

const tabs = [
  { id: "overview", label: "Overview", icon: Icons.LayoutGridIcon, iconColor: "#e65100", component: <Overview /> },
  { id: "corpAction", label: "Corporate Actions", icon: Icons.BadgeDollarSignIcon, iconColor: "#135ea9", component: <CorporateActionsGrid /> },
  { id: "news", label: "News", icon: Icons.NewspaperIcon, iconColor: "#96187d" },
  { id: "financials", label: "Financials", icon: Icons.LineChartIcon, iconColor: "#058a15" },
  { id: "alerts", label: "Alerts", icon: Icons.BellIcon, iconColor: "#cc9a2f" },
];

const TabsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 0 1.5rem;
  margin-top: 0.5rem;
`;

const TabButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0;
  border: 0;
  border-bottom: 2px solid transparent;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: color 150ms ease, border-color 150ms ease, background-color 150ms ease;

  &:focus {
    outline: none;
  }

  ${({$active}) =>
    $active && `
    color: var(--primary);
    border-bottom-color: var(--primary);
  `}
`;

export default function StockSectionTabs({ onTabSelect }) {
  const defaultTab = tabs.find((tab) => tab.active)?.label ?? tabs[0].label;
  const [selectedTab, setSelectedTab] = useState(defaultTab);

  return (
    <TabsContainer>
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = tab.label === selectedTab;

        return (
          <TabButton
            key={tab.label}
            $active={isActive}
            aria-pressed={isActive}
            onClick={() => {
              setSelectedTab(tab.label);
              onTabSelect(tab.component);
            }}
          >
            <Icon size={16} color={isActive ? 'var(--primary)' : tab.iconColor} />
            {tab.label}
          </TabButton>
        );
      })}
    </TabsContainer>
  );
}