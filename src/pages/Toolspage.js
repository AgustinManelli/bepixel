import { useState } from 'react';
import ToolsBody from '../components/toolspage/ToolsBody';
import ToolsHeader from '../components/toolspage/ToolsHeader';
import ItemsFilter from '../components/toolspage/ItemsFilter';
import { useEffect } from 'react';
import Pagination from '../components/toolspage/Pagination';
import { useNavigate, useSearchParams } from 'react-router-dom';

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

	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		const initialItems = require('../utils/tools_items.json').items;
		setItems(initialItems);
	}, []);

	/////////////////////////////////////////////////////////////////////////////////////////

	useEffect(() => {
		// Actualizar los parámetros de la URL cuando cambian los filtros o la página
		const params = new URLSearchParams();
		if (filters.category !== 'all') {
			params.set('category', filters.category);
		}
		if (currentPage !== 1) {
			params.set('page', currentPage.toString());
		}
		navigate(`?${params.toString()}`);
	}, [filters, currentPage]);

	useEffect(() => {
		const urlParams = Object.fromEntries(searchParams.entries());

		const pageParam = parseInt(urlParams.page) || 1;
		setCurrentPage(pageParam);

		setFilter(prevFilters => ({
			...prevFilters,
			category: urlParams.category || prevFilters.category,
		}));
	}, []);

	///////////////////////////////////////////////////////////////////////////////////////////

	const filteredItems = filterItems(items);

	function alpSort(a, b) {
		a = a.toLowerCase();
		b = b.toLowerCase();

		return a < b ? -1 : a > b ? 1 : 0;
	}

	filteredItems.sort(function (a, b) {
		return alpSort(a.title, b.title);
	});

	return (
		<>
			<ToolsHeader />
			<ItemsFilter
				setFilter={setFilter}
				filters={filters}
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
			<p
				style={{
					position: 'fixed',
					bottom: '30px',
					left: '10px',
					backgroundColor: 'rgb(0,0,0,0.2)',
					padding: '10px',
					borderRadius: '10px',
					zIndex: '10000',
				}}>
				{JSON.stringify(filters)}
			</p>
		</>
	);
}

export default Toolspage;
