import { useState } from 'react';
import ToolsBody from '../components/toolspage/ToolsBody';
import ToolsHeader from '../components/toolspage/ToolsHeader';
import { useEffect } from 'react';

function Toolspage() {
	const [items, setItems] = useState([]);
	const [filters, setFilter] = useState({
		category: 'all',
	});
	useEffect(() => {
		const initialItems = require('../utils/tools_items.json').items;
		setItems(initialItems);
	}, []);

	const filterProducts = items => {
		return items.filter(items => {
			return filters.category === 'all' || items.category === filters.category;
		});
	};

	const filteredItems = filterProducts(items);
	return (
		<>
			<ToolsHeader />
			<ToolsBody items={filteredItems} />
		</>
	);
}

export default Toolspage;
