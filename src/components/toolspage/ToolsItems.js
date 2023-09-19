import '../../stylesheets/toolspage/ToolsItems.css';

function ToolsItems({ items }) {
	return (
		<a
			className='itemAnchor'
			href={items.linkpage}
			target='_blank'
			rel='noreferrer'>
			<div className='itemCard'>
				<div
					className='itemContainer'
					style={{
						backgroundImage: `url(${require(
							'../../assets/thumbnails/' + items.thumbnail + '.png',
						)})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'center center',
					}}></div>
				<div className='itemText'>
					<div>
						<p className='itemTitle'>{items.title}</p>
						<p className='itemDescription'>{items.description}</p>
					</div>

					<div className='itemInfo'>
						{items.paid !== 'free' ? (
							items.paid !== 'paid' ? (
								<p className='itemDescription itemFreemium'>freemium</p>
							) : (
								<p className='itemDescription itemPaid'>paid</p>
							)
						) : (
							<p className='itemDescription itemFree'>free</p>
						)}
						<section>
							{items.tag.slice(0, 3).map(tag => (
								<p key={tag} className='itemTag'>
									{tag}
								</p>
							))}
						</section>
					</div>
				</div>
			</div>
		</a>
	);
}

export default ToolsItems;
