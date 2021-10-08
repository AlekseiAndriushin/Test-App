import React, { SyntheticEvent } from 'react'
import { ICard } from '../../features/Slices/cards/cardsSlice';
import Card from '../Card/Card'
import './Content.scss'

interface IContentProps {
	cards: ICard[];
	onContextMenu: (e: SyntheticEvent) => void;
}

export const Content: React.FC<IContentProps> = ({ cards, onContextMenu }) => {

	return (
		<section className="content" onContextMenu={onContextMenu}>
			<ul className="components" >
				{(cards.map((card) => (
					<Card
						card={card} key={card.id} />
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
