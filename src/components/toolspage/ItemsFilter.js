import { useEffect } from 'react';
import '../../stylesheets/toolspage/ItemsFilter.css';
function ItemsFilter({ setFilter }) {
	const handleChangeFilter = event => {
		setFilter(prevState => ({
			...prevState,
			category: event.target.value,
		}));
	};

	useEffect(() => {
		document.getElementById('all').checked = true;
	}, []);

	return (
		<section>
			<div class='radio-inputs'>
				<label class='radio'>
					<input
						type='radio'
						name='radio'
						value='graphic-design'
						id='graphic-design'
						onClick={handleChangeFilter}></input>
					<span class='name'>Diseño gráfico</span>
				</label>
				<label class='radio'>
					<input
						type='radio'
						name='radio'
						value='web-dev'
						id='web-dev'
						onClick={handleChangeFilter}></input>
					<span class='name'>Diseño web</span>
				</label>
				<label class='radio'>
					<input
						type='radio'
						name='radio'
						value='photostock'
						id='photostock'
						onClick={handleChangeFilter}></input>
					<span class='name'>Imágenes Stock</span>
				</label>
				<label class='radio'>
					<input
						type='radio'
						name='radio'
						value='all'
						id='all'
						onClick={handleChangeFilter}></input>
					<span class='name'>Todos</span>
				</label>
			</div>
		</section>
	);
}

export default ItemsFilter;
