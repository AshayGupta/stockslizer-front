import { Icons } from "@/common/icons";
import { EmptyRecord, PageContainer, SearchBar } from "@/components/styledComponents";
import { DeleteButton, Price, PriceChange, PriceInfo, StockDetails, StockInfo, StockName, StockRow, StockSymbol, TableContainer, TableHeader } from "@/components/Watchlist/Watchlist.style";
import { Tooltip } from "@mui/material";
import { useMemo, useState } from "react";
import { SwipeableList, SwipeableListItem, TrailingActions, Type } from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

const SAMPLE = [
  {
    symbol: "RIL",
    name: "Reliance Industries",
    ticker: "RIL",
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
    change: -25.0,
    changePercent: -0.65,
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
      <div className="flex items-center pr-3">
        <DeleteButton onClick={() => handleDelete(symbol)}>
          <Icons.DeleteIcon size={16} /> Delete
        </DeleteButton>
      </div>
    </TrailingActions>
  );

  return (
    <PageContainer className="container-style w-fit flex-none">
      <SearchBar>
        <input
          value={searchQ}
          onChange={(e) => setSearchQ(e.target.value)}
          placeholder="Search Stocks..."
          data-testid="watchlist-search"
        />
        <Tooltip title="Add Stock" arrow>
          <span className="cursor-pointer" onClick={() => ""}>
            <Icons.CirclePlusIcon 
              size={18}
              color="var(--primary)"
            />
          </span>
        </Tooltip>
      </SearchBar>

      <TableHeader>
        <div>Stock</div>
        <div>Price / Change</div>
      </TableHeader>

      <TableContainer>
        {filtered.length === 0 ? (
          <EmptyRecord>No stocks found in your watchlist</EmptyRecord>
        ) : (
          <SwipeableList type={Type.IOS}>
            {filtered.map((stock) => (
              <SwipeableListItem
                key={stock.symbol}
                trailingActions={trailingActions(stock.symbol)}
              >
                <StockRow>
                  <StockInfo>
                    {/* <StockLogo>{stock.logo}</StockLogo> */}
                    <StockDetails>
                      <StockSymbol>{stock.symbol}</StockSymbol>
                      <StockName>{stock.name}</StockName>
                    </StockDetails>
                  </StockInfo>
                  <PriceInfo>
                    <Price>₹{stock.price.toFixed(2)}</Price>
                    <PriceChange $isPositive={stock.change >= 0}>
                      <span>
                        {`${stock.change > 0 ? "+" : ""}${stock.change.toFixed(2)} `}
                      </span>
                      <span>
                        ({`${stock.changePercent > 0 ? "+" : ""}${stock.changePercent.toFixed(2)}%`})
                      </span>
                    </PriceChange>
                  </PriceInfo>
                </StockRow>
              </SwipeableListItem>
            ))}
          </SwipeableList>
        )}
      </TableContainer>
    </PageContainer>
  );
};

export default Watchlist;
