import '../../stylesheets/toolspage/ToolsBody.css';
import ToolsItems from './ToolsItems';

function ToolsBody({ items }) {
	return (
		<section className='itemsBodyContainer'>
			{items.map(items => (
				<ToolsItems items={items} />
			))}
		</section>
	);
}

export default ToolsBody;
