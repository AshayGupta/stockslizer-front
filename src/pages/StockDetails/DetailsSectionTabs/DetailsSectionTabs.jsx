import { Separator } from "@/components/styledComponents";
import { useState } from "react";
import styled from "styled-components";

const TabsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 0 1.5rem;
  margin: 0.5rem;
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


export default function DetailsSectionTabs({ tabs, onTabSelect }) {
  const defaultTab = tabs[0].label;
  const [selectedTab, setSelectedTab] = useState(defaultTab);

  return (
    <div>
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
      <Separator />
    </div>
  );
}