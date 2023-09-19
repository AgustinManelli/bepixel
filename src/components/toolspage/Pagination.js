import '../../stylesheets/toolspage/Pagination.css';

function Pagination({
	itemsPerPage,
	currentPage,
	setCurrentPage,
	filteredItems,
}) {
	const totalItems = filteredItems.length;
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pageNumbers.push(i);
	}

	const handlePreviousPage = () => {
		window.scrollTo(0, 0);
		setCurrentPage(currentPage - 1);
	};

	const handleNextPage = () => {
		window.scrollTo(0, 0);
		setCurrentPage(currentPage + 1);
	};

	const handleSpecificPage = n => {
		window.scrollTo(0, 0);
		setCurrentPage(n);
	};

	return (
		<section className='paginationContainer'>
			<div className='pagination:container'>
				<div
					className={`pagination:number arrow ${
						currentPage === 1 ? 'isPaginationDisable' : ''
					}`}
					onClick={handlePreviousPage}>
					<svg width='18' height='18'>
						<use href='#left' />
					</svg>
					<span className='arrow:text'></span>
				</div>

				{pageNumbers.map(page => (
					<div
						key={page}
						className={`pagination:number ${
							page === currentPage ? 'pagination:active' : ''
						}`}
						onClick={() => handleSpecificPage(page)}>
						{page}
					</div>
				))}

				<div
					className={`pagination:number arrow ${
						currentPage >= pageNumbers.length ? 'isPaginationDisable' : ''
					}`}
					onClick={handleNextPage}>
					<svg width='18' height='18'>
						<use href='#right' />
					</svg>
				</div>
			</div>

			<svg className='hide'>
				<symbol
					id='left'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M15 19l-7-7 7-7'></path>
				</symbol>
				<symbol
					id='right'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M9 5l7 7-7 7'></path>
				</symbol>
			</svg>
		</section>
	);
}

export default Pagination;
