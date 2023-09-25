import { useState } from 'react';

export function useFilters() {
	const [filters, setFilter] = useState({
		category: 'all',
		subcategory: 'all',
		tag: '',
	});

	const filterItems = items => {
		return items.filter(items => {
			const tagFilter = filters.tag.split(' ').filter(Boolean);

			const concatData = items.tag.concat(items.name);

			return (
				(filters.category === 'all' || items.category === filters.category) &&
				(tagFilter.length === 0 ||
					tagFilter.every(tagTerm =>
						concatData.some(tag => tag.includes(tagTerm)),
					)) &&
				(filters.subcategory === 'all' ||
					items.subcategory === filters.subcategory)
			);
		});
	};

	const categoryItems = items => {
		return items.filter(items => {
			const tagFilter = filters.tag.split(' ').filter(Boolean);

			const concatData = items.tag.concat(items.name);

			return (
				(filters.category === 'all' || items.category === filters.category) &&
				(tagFilter.length === 0 ||
					tagFilter.every(tagTerm =>
						concatData.some(tag => tag.includes(tagTerm)),
					))
			);
		});
	};

	return { filters, filterItems, setFilter, categoryItems };
}
