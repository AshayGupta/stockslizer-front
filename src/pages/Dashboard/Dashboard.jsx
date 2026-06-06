import StockDetails from '@/pages/StockDetails/StockDetails';
import Watchlist from '@/components/Watchlist/Watchlist';
import "./Dashboard.css";

const Dashboard = () => {
	return (
		<div className="h-full flex gap-2 p-2 overflow-auto">
            <Watchlist />
			<StockDetails />
		</div>
	);
};

export default Dashboard;
