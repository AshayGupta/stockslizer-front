import { Icons } from "@/common/icons";
import { useState } from "react";
import styled from "styled-components";

const tabs = [
  { icon: Icons.LayoutGridIcon, label: "Overview", iconColor: "#e65100" },
  { icon: Icons.BadgeDollarSignIcon, label: "Corporate Actions", iconColor: "#135ea9" },
  { icon: Icons.NewspaperIcon, label: "News", iconColor: "#96187d" },
  { icon: Icons.LineChartIcon, label: "Financials", iconColor: "#054a0d" },
  { icon: Icons.BellIcon, label: "Alerts", iconColor: "#cc9a2f" },
];

const TabsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 0 1.5rem;
  border-bottom: 1px solid var(--border);
`;

const TabButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  border: 0;
  border-bottom: 2px solid transparent;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: color 150ms ease, border-color 150ms ease, background-color 150ms ease;

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.active && `
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
            active={isActive}
            aria-pressed={isActive}
            onClick={() => {
              setSelectedTab(tab.label);
              onTabSelect?.(tab.label);
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