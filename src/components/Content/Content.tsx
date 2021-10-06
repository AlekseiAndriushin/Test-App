import React from 'react'

import { selectCards } from '../../features/cards/cardsSlice';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Card from '../Card/Card'
import './Content.scss'
export const Content = () => {
	const cards = useTypedSelector(selectCards)

	const rightClick = (event) => {
		event.preventDefault()
		if (
			(event.target.nodeName === 'SECTION') ||
			(event.target.nodeName === 'UL')
		) {
			alert('Меню для списка компаний');
		}
	}

	return (
		<section className="content" onContextMenu={rightClick}>
			<ul className="components" >
				{(cards.concat().reverse().map((card) => (
					<Card className={"components__card"} key={card.id} company={card.company} address={card.address} email={card.email} phone={card.phone} />
				)))}
				{[1, 2, 3, 4, 5, 6, 7, 8].map(index => {
					return (
						<Card key={index} />
					)
				})
				}
			</ul>
		</section>
	)
}
