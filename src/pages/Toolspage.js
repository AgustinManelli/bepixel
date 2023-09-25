import { useState } from 'react';
import ToolsBody from '../components/toolspage/ToolsBody';
import ToolsHeader from '../components/toolspage/ToolsHeader';
import ItemsFilter from '../components/toolspage/ItemsFilter';
import { useEffect } from 'react';
import Pagination from '../components/toolspage/Pagination';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useFilters } from '../hooks/useFilters.js';
import LastestResources from '../components/toolspage/LastestResources';

function Toolspage() {
	const [items, setItems] = useState([]);
	const { filters, filterItems, setFilter, categoryItems } = useFilters();
	const [itemsPerPage, setItemsPerPage] = useState(
		window.innerWidth <= 815 ? '8' : '12',
	);
	const [currentPage, setCurrentPage] = useState(1);
	const lastIndex = currentPage * itemsPerPage;
	const firstIndex = lastIndex - itemsPerPage;

	useEffect(() => {
		const initialItems = require('../utils/tools_items.json').items;
		setItems(initialItems);
	}, []);

	const { search } = useLocation();
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();

	const changeItemsParams = (category, n, subcategory) => {
		const params = new URLSearchParams();
		if (category !== 'all' && category !== '') {
			params.set('category', category);
		}
		if (n !== 1) {
			params.set('page', n);
		}
		if (
			subcategory !== undefined &&
			subcategory !== '' &&
			subcategory !== 'all'
		) {
			params.set('subcategory', subcategory);
		}
		navigate(`?${params.toString()}`);
	};

	useEffect(() => {
		const urlParams = Object.fromEntries(searchParams.entries());
		const pageParam = parseInt(urlParams.page) || 1;
		setCurrentPage(pageParam);

		setFilter(prevFilters => ({
			...prevFilters,
			category: urlParams.category || 'all',
			subcategory: urlParams.subcategory || 'all',
		}));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search]);

	const filteredItems = filterItems(items);
	const categoryItemsList = categoryItems(items);
	const ItemsOriginal = items;

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
				changeItemsParams={changeItemsParams}
				categoryItemsList={categoryItemsList}
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
				changeItemsParams={changeItemsParams}
				filters={filters}
			/>
			<LastestResources filteredItemsOriginal={ItemsOriginal} />
		</>
	);
}

export default Toolspage;
