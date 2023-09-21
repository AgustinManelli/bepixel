import '../../stylesheets/toolspage/Pagination.css';

function Pagination({
	itemsPerPage,
	currentPage,
	setCurrentPage,
	filteredItems,
}) {
	const totalItems = filteredItems.length;
	const pageNumbers = [];

	const firstIndex = currentPage - 1;
	const lastIndex = firstIndex + 2;

	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pageNumbers.push(i);
	}

	const handlePreviousPage = () => {
		setCurrentPage(currentPage - 1);
		setTimeout(() => {
			window.scroll({ top: -1, left: 0, behavior: 'smooth' });
		}, 10);
	};

	const handleNextPage = () => {
		setCurrentPage(currentPage + 1);
		setTimeout(() => {
			window.scroll({ top: -1, left: 0, behavior: 'smooth' });
		}, 10);
	};

	const handleSpecificPage = n => {
		setCurrentPage(n);
		setTimeout(() => {
			window.scroll({ top: -1, left: 0, behavior: 'smooth' });
		}, 10);
	};

	return (
		<section className='paginationContainer'>
			<div className='pagination:container'>
				<div
					className={`pagination:number arrow ${
						currentPage === 1 ? 'isPaginationDisable' : ''
					}`}
					onClick={currentPage === 1 ? undefined : handlePreviousPage}>
					<svg width='18' height='18'>
						<use href='#left' />
					</svg>
					<span className='arrow:text'></span>
				</div>

				{currentPage >= 4 && pageNumbers.length > 4 ? (
					<div
						className={`pagination:number ${
							pageNumbers[0] === currentPage ? 'pagination:active' : ''
						}`}
						onClick={() => handleSpecificPage(pageNumbers[0])}>
						{pageNumbers[0]}
					</div>
				) : (
					''
				)}

				{currentPage >= 4 && pageNumbers.length > 4 ? (
					<div className='pagination:number'>...</div>
				) : (
					''
				)}

				{currentPage > 1 && pageNumbers.length > 4 ? (
					<div
						className={`pagination:number ${
							firstIndex === currentPage ? 'pagination:active' : ''
						}`}
						onClick={() => handleSpecificPage(firstIndex)}>
						{firstIndex}
					</div>
				) : (
					''
				)}

				{(pageNumbers.length > 4
					? pageNumbers
							.slice(0, pageNumbers.length - 1)
							.slice(firstIndex, lastIndex)
					: pageNumbers
				).map(page => (
					<div
						key={page}
						className={`pagination:number ${
							page === currentPage ? 'pagination:active' : ''
						}`}
						onClick={() => handleSpecificPage(page)}>
						{page}
					</div>
				))}

				{pageNumbers.length > 4 && pageNumbers.length - lastIndex > 1 ? (
					<div className='pagination:number'>...</div>
				) : (
					''
				)}

				{pageNumbers.length > 4 ? (
					<div
						className={`pagination:number ${
							pageNumbers.length === currentPage ? 'pagination:active' : ''
						}`}
						onClick={() => handleSpecificPage(pageNumbers.length)}>
						{pageNumbers.length}
					</div>
				) : (
					''
				)}

				<div
					className={`pagination:number arrow ${
						currentPage >= pageNumbers.length ? 'isPaginationDisable' : ''
					}`}
					onClick={
						currentPage >= pageNumbers.length ? undefined : handleNextPage
					}>
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
