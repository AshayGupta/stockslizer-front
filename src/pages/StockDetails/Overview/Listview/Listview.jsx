import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--font-size-sm);
  padding-bottom: 0.25rem;
  border-bottom: 1px solid var(--border-light);

  &:not(:first-child) {
    padding-top: 0.25rem;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const Label = styled.span`
  display: flex;
  gap: 0.5rem;
  color: var(--text-secondary);
`;

const IconItem = styled.span`
  color: var(--text-secondary);
`;

const Value = styled.span`
  font-weight: var(--font-weight-semibold);
  color: ${({ $color }) =>
    $color === "positive" ? "var(--success)"
    : $color === "negative" ? "var(--danger)"
    : $color ? $color
    : "var(--text-primary)"};
`;

const ListView = ({ items = [] }) => {
  return (
    <Container>
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Row key={item.key}>
            <Label>
              {item.icon && <IconItem>{<Icon size={16} color={item.color} />}</IconItem>}
              {item.label}
            </Label>
            <Value $color={item.color}>{item.value}</Value>
          </Row>
        );
      })}
    </Container>
  );
};

export default ListView;
