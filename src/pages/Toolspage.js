import { useState } from 'react';
import ToolsBody from '../components/toolspage/ToolsBody';
import ToolsHeader from '../components/toolspage/ToolsHeader';
import ItemsFilter from '../components/toolspage/ItemsFilter';
import { useEffect } from 'react';
import Pagination from '../components/toolspage/Pagination';

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
	const [itemsPerPage, setItemsPerPage] = useState(8);
	const [currentPage, setCurrentPage] = useState(1);

	const lastIndex = currentPage * itemsPerPage;
	const firstIndex = lastIndex - itemsPerPage;

	useEffect(() => {
		const initialItems = require('../utils/tools_items.json').items;
		setItems(initialItems);
	}, []);
	const filteredItems = filterItems(items);

	return (
		<>
			<ToolsHeader />
			<ItemsFilter
				setFilter={setFilter}
				items={items}
				setCurrentPage={setCurrentPage}
			/>
			<ToolsBody
				items={filteredItems}
				lastIndex={lastIndex}
				firstIndex={firstIndex}
			/>
			<Pagination
				itemsPerPage={itemsPerPage}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				filteredItems={filteredItems}
			/>
		</>
	);
}

export default Toolspage;
