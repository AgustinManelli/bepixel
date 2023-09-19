import { useState } from 'react';
import '../../stylesheets/toolspage/ToolsBody.css';
import ToolsItems from './ToolsItems';

function ToolsBody({ items }) {
	return (
		<section className='itemsBody'>
			<div className='itemsBodyContainer'>
				{items.map(items => (
					<ToolsItems items={items} />
				))}
			</div>
			<div>
				<button>atras</button>
				<button>siguiente</button>
			</div>
		</section>
	);
}

export default ToolsBody;
