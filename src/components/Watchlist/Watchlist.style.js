import styled from "styled-components";

export const TableHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.25rem 1.5rem;
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  letter-spacing: 0.05em;
`;

export const TableContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const StockRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  margin: 0.25rem 0.5rem;
  padding: 0.5rem;
  align-items: center;
  width: 100%;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: var(--transition);
  box-shadow: var(--default-shadow);

  &:hover {
    background: var(--bg-hover);
  }
`;

export const StockInfo = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 0.75rem;
`;

// export const StockLogo = styled.div`
//   font-size: 1.75rem;
//   width: 2rem;
//   height: 2rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: var(--radius-sm);
// `;

export const StockDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StockSymbol = styled.div`
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  font-size: var(--font-size-md);
`;

export const StockName = styled.div`
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
`;

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  justify-content: center;
`;

export const Price = styled.div`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-md);
  color: var(--text-primary);
`;

export const PriceChange = styled.div`
  text-align: right;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: ${(props) => (props.isPositive ? "var(--success)" : "var(--danger)")};
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  background: var(--danger);
  color: white;
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: var(--font-size-md);
  transition: background 0.2s;

  &:hover {
    background: var(--danger-hover);
  }
`;
