import '../../stylesheets/toolspage/LastestResources.css';
import ToolsItems from './ToolsItems';
import Titles from '../Tittles';
import { motion } from 'framer-motion';

function LastestResources({ filteredItemsOriginal }) {
	const lastList = filteredItemsOriginal.length;
	return (
		<div className='lastestResourcesContainer'>
			<div className='lastestResourcesTitle'>
				<Titles nombre='Ultimas herramientas' />
			</div>
			<div className='lastestResourcesItems'>
				{filteredItemsOriginal
					.map(filteredItemsOriginal => (
						<motion.div
							key={filteredItemsOriginal.id}
							whileHover={{ scale: 1.01 }}
							transition={{ type: 'spring', stiffness: 800, damping: 20 }}>
							<ToolsItems items={filteredItemsOriginal} />
						</motion.div>
					))
					.slice(lastList - 4, lastList)}
			</div>
		</div>
	);
}

export default LastestResources;
