import React, { SyntheticEvent } from 'react'
import { useDispatch } from 'react-redux';
import { ICard, toggleCard } from '../../features/cards/cardsSlice';
import Card from '../Card/Card'
import './Content.scss'

interface IContentProps {
	cards: ICard[];
}

export const Content: React.FC<IContentProps> = ({ cards }) => {

	const dispatch = useDispatch()

	return (
		<section className="content">
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
