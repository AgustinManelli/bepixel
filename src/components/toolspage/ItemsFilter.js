import { useEffect } from 'react';
import '../../stylesheets/toolspage/ItemsFilter.css';
function ItemsFilter({ setFilter, items, setCurrentPage }) {
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
		document.getElementById('all').checked = true;
	}, []);

	return (
		<section className='itemsFilterContainer'>
			<div className='radio-inputs'>
				<label className='radio'>
					<input
						type='radio'
						name='radio'
						value='graphic-design'
						id='graphic-design'
						onClick={handleChangeFilter}></input>
					<span className='name'>Diseño gráfico</span>
				</label>
				<label className='radio'>
					<input
						type='radio'
						name='radio'
						value='web-dev'
						id='web-dev'
						onClick={handleChangeFilter}></input>
					<span className='name'>Diseño web</span>
				</label>
				<label className='radio'>
					<input
						type='radio'
						name='radio'
						value='photostock'
						id='photostock'
						onClick={handleChangeFilter}></input>
					<span className='name'>Imágenes Stock</span>
				</label>
				<label className='radio'>
					<input
						type='radio'
						name='radio'
						value='all'
						id='all'
						onClick={handleChangeFilter}></input>
					<span className='name'>Todos</span>
				</label>
			</div>

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
