import Watchlist from '@/components/Watchlist/Watchlist';
import React from 'react';
import "./Dashboard.css";

const Dashboard = () => {
	return (
		<div className="p-2 flex-1 h-full overflow-auto">
            <Watchlist />
		</div>
	);
};

export default Dashboard;
