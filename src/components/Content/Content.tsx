import React from 'react'
import { useDispatch } from 'react-redux';
import { RootState } from '../../app/store';

import { toggleCard } from '../../features/cards/cardsSlice';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Card from '../Card/Card'
import './Content.scss'

export const Content = () => {

	const cards = useTypedSelector((state: RootState) => state.cards.card)

	const dispatch = useDispatch()

	const rightClick = (event) => {
		event.preventDefault()
		if (
			(event.target.nodeName === 'SECTION') ||
			(event.target.nodeName === 'UL')
		) {
			alert('Меню для списка компаний');
		}
	}

	const changeSelectedCard = () => {
		dispatch(changeSelectedCard())
	};

	return (
		<section className="content" onContextMenu={rightClick}>
			<ul className="components" >
				{(cards.concat().reverse().map((card) => (
					<Card
						key={card.id}
						company={card.company}
						address={card.address}
						email={card.email}
						phone={card.phone}
						taken={card.taken}
						changeCard={() => dispatch(toggleCard(card.id))} />
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
