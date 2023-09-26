import { useEffect, useState } from 'react';
import '../../stylesheets/toolspage/ItemsFilter.css';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
	HiOutlinePaintBrush,
	HiOutlineCodeBracket,
	HiOutlineCamera,
	HiOutlineHashtag,
} from 'react-icons/hi2';

function obtenerSubcategorias(datos) {
	const subcategorias = [];

	datos.forEach(objeto => {
		if (!subcategorias.includes(objeto.subcategory)) {
			subcategorias.push(objeto.subcategory);
		}
	});

	return subcategorias;
}

const item = {
	hidden: { y: 10, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0,
			staggerChildren: 0.05,
		},
	},
};

function ItemsFilter({
	setFilter,
	filters,
	changeItemsParams,
	categoryItemsList,
}) {
	const [t] = useTranslation('global');
	const subcategoryList = obtenerSubcategorias(categoryItemsList);
	const [subcategoriesItems, setSubcategoriesItems] = useState(subcategoryList);
	useEffect(() => {
		setSubcategoriesItems(subcategoryList);
	}, [filters.category]);

	const handleChangeFilter = event => {
		const category = event.target.value;
		changeItemsParams(category, 1);
	};

	const handleChangeSubfilter = event => {
		const subcategory = event.target.value;
		changeItemsParams(filters.category, 1, subcategory);
	};

	const handleChangeFilterSearch = event => {
		const value = event.target.value;
		setFilter(prevFilters => ({
			...prevFilters,
			tag: value.toLowerCase(),
		}));
		changeItemsParams(filters.category, 1, 'all');
	};

	const resetSearch = () => {
		setFilter(prevState => ({
			...prevState,
			tag: '',
		}));
	};

	useEffect(() => {
		try {
			document.getElementById(`${filters.category}`).checked = true;
		} catch {
			changeItemsParams('all', 1, 'all');
		}
	}, [filters]);

	return (
		<motion.section
			className='itemsFilterContainer'
			id='itemsFilterContainer'
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.8,
				ease: [0, 0.71, 0.2, 1.01],
			}}>
			<section className='radioInputsContainer'>
				<div className='radio-inputs'>
					<label className='radio'>
						<input
							type='radio'
							name='radio'
							value='all'
							id='all'
							onClick={handleChangeFilter}></input>
						<span className='name'>
							<HiOutlineHashtag className='itemsFilterIcon' />
							{t('toolsfilters.all')}
						</span>
					</label>
					<label className='radio'>
						<input
							type='radio'
							name='radio'
							value='graphic-design'
							id='graphic-design'
							onClick={handleChangeFilter}></input>

						<span className='name'>
							<HiOutlinePaintBrush className='itemsFilterIcon' />
							{t('toolsfilters.graphicdesign')}
						</span>
					</label>
					<label className='radio'>
						<input
							type='radio'
							name='radio'
							value='web-dev'
							id='web-dev'
							onClick={handleChangeFilter}></input>
						<span className='name'>
							<HiOutlineCodeBracket className='itemsFilterIcon' />
							{t('toolsfilters.webdesign')}
						</span>
					</label>
					<label className='radio'>
						<input
							type='radio'
							name='radio'
							value='photostock'
							id='photostock'
							onClick={handleChangeFilter}></input>
						<span className='name'>
							<HiOutlineCamera className='itemsFilterIcon' />
							{t('toolsfilters.photostock')}
						</span>
					</label>
				</div>
			</section>

			{filters.category !== 'all' && subcategoriesItems.length > 1 ? (
				<motion.section
					variants={container}
					className='subFiltersContainer'
					initial='hidden'
					animate='visible'
					exit={{ opacity: 0 }}
					id='filter_2'>
					{subcategoriesItems.map(subcategories => (
						<motion.label
							className='subFilters'
							key={subcategories}
							variants={item}>
							<input
								type='radio'
								name='sub'
								value={subcategories}
								id={subcategories}
								onClick={handleChangeSubfilter}
								onChange={handleChangeSubfilter}
								checked={
									filters.subcategory === subcategories ? true : false
								}></input>
							<span className='subFiltersName'>{subcategories}</span>
						</motion.label>
					))}
				</motion.section>
			) : (
				''
			)}

			<div>
				<form className='itemSearch'>
					<svg
						width='17'
						height='16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						role='img'
						aria-labelledby='search'>
						<path
							d='M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9'
							stroke='currentColor'
							strokeWidth='1.333'
							strokeLinecap='round'
							strokeLinejoin='round'></path>
					</svg>
					<input
						className='itemInput'
						placeholder='filter by name or tag'
						required=''
						type='text'
						onChange={handleChangeFilterSearch}></input>
					<button className='itemReset' type='reset' onClick={resetSearch}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth='2'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6 18L18 6M6 6l12 12'></path>
						</svg>
					</button>
				</form>
			</div>
		</motion.section>
	);
}

export default ItemsFilter;
