import { useState } from 'react';
import ToolsBody from '../components/toolspage/ToolsBody';
import ToolsHeader from '../components/toolspage/ToolsHeader';
import ItemsFilter from '../components/toolspage/ItemsFilter';
import { useEffect } from 'react';

function useFilters() {
	const [filters, setFilter] = useState({
		category: 'all',
		tag: '',
		name: '',
	});
	const filterItems = items => {
		return items.filter(items => {
			return (
				(filters.category === 'all' || items.category === filters.category) &&
				(filters.tag === '' ||
					items.tag.includes(filters.tag, 0) ||
					filters.name === '' ||
					items.name.includes(filters.name.toLowerCase(), 0))
			);
		});
	};
	return { filters, filterItems, setFilter };
}

function Toolspage() {
	const [items, setItems] = useState([]);

	const { filters, filterItems, setFilter } = useFilters();

	useEffect(() => {
		const initialItems = require('../utils/tools_items.json').items;
		setItems(initialItems);
	}, []);

	const filteredItems = filterItems(items);

	return (
		<>
			<ToolsHeader />
			<ItemsFilter setFilter={setFilter} />
			<ToolsBody items={filteredItems} />
		</>
	);
}

export default Toolspage;
