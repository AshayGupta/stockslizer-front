import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--bg-card);
  color: var(--text-primary);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  box-shadow: var(--default-shadow);
  overflow: hidden;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;

  input {
    flex: 1;
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    background: var(--bg-body);
    color: var(--text-primary);
    font-size: var(--font-size-sm);

    &::placeholder {
      color: var(--text-muted);
    }

    &:focus {
      outline: none;
      border-color: var(--primary);
    }
  }
`;

export const EmptyRecord = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: var(--text-secondary);
  text-align: center;
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: var(--separator);
  flex-shrink: 0;
`;