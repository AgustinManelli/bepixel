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
			<svg
				style={{ position: 'absolute', top: '50vh', zIndex: '-0' }}
				xmlns='http://www.w3.org/2000/svg'
				version='1.1'
				viewBox='0 0 800 800'
				opacity='0.58'>
				<defs>
					<filter
						id='bbblurry-filter'
						x='-100%'
						y='-100%'
						width='400%'
						height='400%'
						filterUnits='objectBoundingBox'
						primitiveUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'>
						<feGaussianBlur
							stdDeviation='130'
							x='0%'
							y='0%'
							width='100%'
							height='100%'
							in='SourceGraphic'
							edgeMode='none'
							result='blur'></feGaussianBlur>
					</filter>
				</defs>
				<g filter='url(#bbblurry-filter)'>
					<ellipse
						rx='81.5'
						ry='248.5'
						cx='646.860914939361'
						cy='-0.21873881554728314'
						fill='rgba(255, 0, 152, 1.00)'></ellipse>
					<ellipse
						rx='81.5'
						ry='248.5'
						cx='322.76899343760226'
						cy='177.47098041953842'
						fill='rgba(68, 0, 153, 1.00)'></ellipse>
				</g>
			</svg>
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
				filteredItems={filteredItems}
				changeItemsParams={changeItemsParams}
				filters={filters}
			/>
			<LastestResources filteredItemsOriginal={ItemsOriginal} />
		</>
	);
}

export default Toolspage;
