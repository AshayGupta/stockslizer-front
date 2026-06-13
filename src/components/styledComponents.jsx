import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

export const ScrollableContent = styled.div`
  flex: 1;
  overflow-y: auto;
  background: var(--bg-body);
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  flex: 1;

  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-muted);
    pointer-events: none;
  }

  input {
    width: 100%;
    height: 2rem;
    padding: 0.5rem 0.75rem 0.5rem 2.25rem;
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    background: var(--bg-body);
    color: var(--text-primary);

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
`;
