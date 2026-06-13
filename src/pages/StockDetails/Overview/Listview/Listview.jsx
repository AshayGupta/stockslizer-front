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

const IconItem = styled.span`
  color: var(--text-secondary);
`;

const Label = styled.span`
  display: flex;
  gap: 1rem;
  color: var(--text-secondary);
`;

const Value = styled.span`
font-weight: var(--font-weight-medium);
color: ${({ $color }) =>
    $color ? $color : "var(--text-primary)"};
`;

const Link = styled.a`
    text-decoration: underline;
    
    &:hover {
        color: var(--primary-hover);
        background: var(--bg-hover);
    }
`;

const ListView = ({ items = [] }) => {
  return (
    <Container>
      {items.map(({key, icon, label, value, color, type}) => {
        const Icon = icon;

        return (
          <Row key={key}>
            <Label>
              {icon && <IconItem>{<Icon size={16} color={color} />}</IconItem>}
              {label}
            </Label>
            <Value $color={color}>
              {type?.name === "link" ? (
                <Link href={type.value} target="_blank" rel="noopener noreferrer">
                  {value}
                </Link>
              ) 
              : ( value )}
            </Value>
          </Row>
        );
      })}
    </Container>
  );
};

export default ListView;