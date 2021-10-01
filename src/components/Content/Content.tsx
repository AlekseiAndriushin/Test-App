import React from 'react'
import Card from '../Card/Card'

export const Content = () => {
	return (
		<div className="content">
			<ul className="components" id="components">
				{[1, 2, 3, 4, 5, 6, 7, 8].map(index => {
					return (
						<Card index={index} key={index} />
					)
				})}
			</ul>
		</div>
	)
}
