import '../../stylesheets/toolspage/LastestResources.css';
import ToolsItems from './ToolsItems';
import Titles from '../Tittles';

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
						<div key={filteredItemsOriginal.id}>
							<ToolsItems items={filteredItemsOriginal} />
						</div>
					))
					.slice(lastList - 4, lastList)}
			</div>
		</div>
	);
}

export default LastestResources;
