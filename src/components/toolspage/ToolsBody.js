import '../../stylesheets/toolspage/ToolsBody.css';
import ToolsItems from './ToolsItems';

function ToolsBody({ items, lastIndex, firstIndex }) {
	return (
		<section className='itemsBody' id='itemsBody'>
			<div className='itemsBodyContainer'>
				{items
					.map(items => (
						<div key={items.id}>
							<ToolsItems items={items} />
						</div>
					))
					.slice(firstIndex, lastIndex)}
			</div>
		</section>
	);
}

export default ToolsBody;
