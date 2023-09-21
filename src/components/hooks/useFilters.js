import { useState } from 'react';

export function useFilters() {
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
