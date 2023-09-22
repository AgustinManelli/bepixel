import { useEffect } from 'react';
import '../../stylesheets/toolspage/ItemsFilter.css';
import { useTranslation } from 'react-i18next';
import {
	HiOutlinePaintBrush,
	HiOutlineCodeBracket,
	HiOutlineCamera,
	HiOutlineHashtag,
	HiOutlineExclamationCircle,
} from 'react-icons/hi2';

function ItemsFilter({ setFilter, setCurrentPage, filters }) {
	const [t] = useTranslation('global');

	const handleChangeFilter = event => {
		setCurrentPage(1);
		setFilter(prevState => ({
			...prevState,
			category: event.target.value,
		}));
	};

	const handleChangeFilterSearch = event => {
		setCurrentPage(1);
		setFilter(prevState => ({
			...prevState,
			tag: event.target.value,
			name: event.target.value,
		}));
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
			setCurrentPage(1);
			setFilter(prevState => ({
				...prevState,
				category: 'all',
			}));
		}
	}, [filters]);

	return (
		<section className='itemsFilterContainer' id='itemsFilterContainer'>
			<section className='radioInputsContainer'>
				<div className='radio-inputs'>
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
				</div>
			</section>

			<div>
				<form className='itemSearch'>
					<button>
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
					</button>
					<input
						className='itemInput'
						placeholder='Type your text'
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
		</section>
	);
}

export default ItemsFilter;
