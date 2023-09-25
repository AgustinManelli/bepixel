import '../../stylesheets/toolspage/ToolsBody.css';
import { motion } from 'framer-motion';
import ToolsItems from './ToolsItems';

function ToolsBody({ items, lastIndex, firstIndex }) {
	return (
		<section className='itemsBody' id='itemsBody'>
			<div className='itemsBodyContainer'>
				{items
					.map(items => (
						<motion.div
							key={items.id}
							whileHover={{ scale: 1.02 }}
							transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
							<ToolsItems items={items} />
						</motion.div>
					))
					.slice(firstIndex, lastIndex)}
			</div>
		</section>
	);
}

export default ToolsBody;
