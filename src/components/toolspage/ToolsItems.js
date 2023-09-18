import '../../stylesheets/toolspage/ToolsItems.css';

function ToolsItems({ items }) {
	return (
		<a href={items.linkpage} target='_blank' rel='noreferrer' id={items.id}>
			<div
				className='itemContainer'
				style={{
					backgroundImage: `url(${require(
						'../../assets/thumbnails/' + items.thumbnail + '.png',
					)})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center center',
				}}>
				<div className='itemText'>
					<h3>{items.title}</h3>
					<p>{items.description}</p>
				</div>
			</div>
		</a>
	);
}

export default ToolsItems;
