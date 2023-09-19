import { useState } from 'react';
import ToolsBody from '../components/toolspage/ToolsBody';
import ToolsHeader from '../components/toolspage/ToolsHeader';
import ItemsFilter from '../components/toolspage/ItemsFilter';
import { useEffect } from 'react';
import Pagination from '../components/toolspage/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';

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
	// ------------LOCATION------------------
	const location = useLocation().search; //Toma los valores de ubicacion
	const params = new URLSearchParams(location); //Separa los parametros
	const page = params.get('page'); //Obtiene un parámetro llamado page
	const category = params.get('category'); // Obtiene un parámetro llamado category

	useEffect(() => {
		if (category !== '' || category === null) {
			setFilter(prevState => ({
				...prevState,
				category: 'all',
			}));
		}
		if (page !== '' || page === null) {
			setCurrentPage(1);
		}
	}, [page, category]);

	//--------------------------------------

	const [items, setItems] = useState([]);
	const { filters, filterItems, setFilter } = useFilters(); //Se pide filters para mostrar por pantalla los filtros aplicados
	const [itemsPerPage, setItemsPerPage] = useState(8);
	const [currentPage, setCurrentPage] = useState(1);
	const lastIndex = currentPage * itemsPerPage;
	const firstIndex = lastIndex - itemsPerPage;

	useEffect(() => {
		const initialItems = require('../utils/tools_items.json').items;
		setItems(initialItems);
	}, []);

	const filteredItems = filterItems(items);

	function alpSort(a, b) {
		a = a.toLowerCase();
		b = b.toLowerCase();

		return a < b ? -1 : a > b ? 1 : 0;
	}

	filteredItems.sort(function (a, b) {
		return alpSort(a.title, b.title);
	});

	const changeItemsPerPage = event => {
		setItemsPerPage(event.target.value);
	};

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
			<div>
				<select name='select' onChange={changeItemsPerPage}>
					<option value='default'>Value 8</option>
					<option value='16'>Value 16</option>
				</select>
			</div>
		</>
	);
}

export default Toolspage;
