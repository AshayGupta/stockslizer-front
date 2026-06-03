import { useMemo, useState } from "react";
import { FiChevronDown, FiSearch, FiSliders } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { SwipeableList, SwipeableListItem, TrailingActions, Type } from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import styled from "styled-components";

const SAMPLE = [
  {
    symbol: "RELIANCE",
    name: "Reliance Industries",
    ticker: "RELIANCE",
    price: 2912.4,
    change: 35.9,
    changePercent: 1.25,
    logo: "🔵",
  },
  {
    symbol: "TCS",
    name: "Tata Consultancy Services",
    ticker: "TCS",
    price: 3820.15,
    change: 25.0,
    changePercent: 0.65,
    logo: "📋",
  },
  {
    symbol: "INFY",
    name: "Infosys",
    ticker: "INFY",
    price: 1452.3,
    change: 6.9,
    changePercent: 0.48,
    logo: "💼",
  },
  {
    symbol: "HDFC",
    name: "HDFC Bank",
    ticker: "HDFCBANK",
    price: 1678.9,
    change: -5.9,
    changePercent: -0.35,
    logo: "🏦",
  },
  {
    symbol: "ICICI",
    name: "ICICI Bank",
    ticker: "ICICIBANK",
    price: 1185.6,
    change: 2.7,
    changePercent: 0.23,
    logo: "🏢",
  },
  {
    symbol: "ITC",
    name: "ITC",
    ticker: "ITC",
    price: 444.75,
    change: -0.55,
    changePercent: -0.12,
    logo: "🌾",
  },
  {
    symbol: "L&T",
    name: "Larsen & Toubro",
    ticker: "LT",
    price: 3385.2,
    change: 25.8,
    changePercent: 0.76,
    logo: "🏗️",
  },
  {
    symbol: "KOTAK",
    name: "Kotak Mahindra Bank",
    ticker: "KOTAKBANK",
    price: 1896.5,
    change: -1.6,
    changePercent: -0.08,
    logo: "💳",
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--bg-app);
  color: var(--text-primary);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid var(--border);
  background: var(--bg-card);
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);

  svg {
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: rotate(180deg);
    }
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: var(--bg-card);
  border-bottom: 1px solid var(--border);

  input {
    flex: 1;
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    background: var(--bg-app);
    color: var(--text-primary);
    font-size: 0.875rem;

    &::placeholder {
      color: var(--text-muted);
    }

    &:focus {
      outline: none;
      border-color: var(--primary);
    }
  }
`;

const TableContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 150px;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: var(--bg-card);
  border-bottom: 1px solid var(--border);
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const StockRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 150px;
  gap: 1rem;
  padding: 1rem 1.5rem;
  align-items: center;
  background: var(--bg-card);
  border-bottom: 1px solid var(--border);
  transition: background 0.2s;

  &:hover {
    background: var(--bg-hover);
  }
`;

const StockInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const StockLogo = styled.div`
  font-size: 1.75rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  background: var(--bg-hover);
`;

const StockDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const StockName = styled.div`
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.875rem;
`;

const StockSymbol = styled.div`
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-transform: uppercase;
`;

const PriceInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const Price = styled.div`
  font-weight: 700;
  font-size: 0.95rem;
  font-family: "JetBrains Mono", monospace;
  color: var(--text-primary);
`;

const Change = styled.div`
  text-align: right;
  font-family: "JetBrains Mono", monospace;

  .amount {
    font-weight: 600;
    font-size: 0.875rem;
    color: ${(props) => (props.isPositive ? "#16a34a" : "#dc2626")};
  }

  .percent {
    font-size: 0.75rem;
    color: ${(props) => (props.isPositive ? "#16a34a" : "#dc2626")};
  }
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: #dc2626;
  color: white;
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: 0.875rem;
  transition: background 0.2s;

  &:hover {
    background: #b91c1c;
  }

  svg {
    font-size: 1rem;
  }
`;

const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: var(--text-secondary);
  text-align: center;
`;

const Watchlist = () => {
  const [searchQ, setSearchQ] = useState("");
  const [list, setList] = useState(SAMPLE);

  const filtered = useMemo(() => {
    if (!searchQ.trim()) return list;
    
    const s = searchQ.trim().toLowerCase();
    return list.filter((stock) =>
      stock.symbol.toLowerCase().includes(s) ||
      stock.name.toLowerCase().includes(s) ||
      stock.ticker.toLowerCase().includes(s),
    );
  }, [searchQ, list]);

  const handleDelete = (symbol) => {
    setList((prev) => prev.filter((stock) => stock.symbol !== symbol));
  };

  const trailingActions = (symbol) => (
    <TrailingActions>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          paddingRight: "0.75rem",
        }}
      >
        <DeleteButton onClick={() => handleDelete(symbol)}>
          <MdDelete /> Delete
        </DeleteButton>
      </div>
    </TrailingActions>
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>
          My Watchlist <FiChevronDown size={20} />
        </HeaderTitle>
        <FiSliders size={20} style={{ cursor: "pointer" }} />
      </Header>

      <SearchBar>
        <FiSearch size={16} color="var(--text-muted)" />
        <input
          value={searchQ}
          onChange={(e) => setSearchQ(e.target.value)}
          placeholder="Search stocks..."
          data-testid="watchlist-search"
        />
        <FiSliders size={16} color="var(--text-muted)" />
      </SearchBar>

      <TableHeader>
        <div>Stock</div>
        <div>Price / Change</div>
      </TableHeader>

      <TableContainer>
        {filtered.length === 0 ? (
          <EmptyState>No stocks found in your watchlist</EmptyState>
        ) : (
          <SwipeableList type={Type.IOS}>
            {filtered.map((stock) => (
              <SwipeableListItem
                key={stock.symbol}
                trailingActions={trailingActions(stock.symbol)}
              >
                <StockRow>
                  <StockInfo>
                    <StockLogo>{stock.logo}</StockLogo>
                    <StockDetails>
                      <StockName>{stock.name}</StockName>
                      <StockSymbol>{stock.ticker}</StockSymbol>
                    </StockDetails>
                  </StockInfo>
                  <PriceInfo>
                    <Price>₹{stock.price.toFixed(2)}</Price>
                    <Change isPositive={stock.change >= 0}>
                      <div className="amount">
                        {stock.change >= 0 ? "+" : ""}
                        {stock.change.toFixed(2)}
                      </div>
                      <div className="percent">
                        {stock.changePercent >= 0 ? "+" : ""}
                        {stock.changePercent.toFixed(2)}%
                      </div>
                    </Change>
                  </PriceInfo>
                </StockRow>
              </SwipeableListItem>
            ))}
          </SwipeableList>
        )}
      </TableContainer>
    </Container>
  );
};

export default Watchlist;
