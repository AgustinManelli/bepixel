import '../../stylesheets/toolspage/ToolsBody.css';
import { motion } from 'framer-motion';
import ToolsItems from './ToolsItems';
import { useTranslation } from 'react-i18next';

function ToolsBody({ items, lastIndex, firstIndex }) {
	const [t] = useTranslation('global');
	return (
		<section className='itemsBody' id='itemsBody'>
			{items != 0 ? (
				<div className='itemsBodyContainer'>
					{items
						.map(items => (
							<motion.div
								key={items.id}
								whileHover={{ scale: 1.01 }}
								transition={{ type: 'spring', stiffness: 800, damping: 20 }}>
								<ToolsItems items={items} />
							</motion.div>
						))
						.slice(firstIndex, lastIndex)}
				</div>
			) : (
				<p style={{ maxWidth: '80vw' }}>{t('toolsbody.ups')}</p>
			)}
		</section>
	);
}

export default ToolsBody;
