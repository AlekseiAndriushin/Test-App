import React, { SyntheticEvent, useCallback } from 'react'
import { ICard } from '../../features/Slices/cards/cardsSlice';
import Card from '../Card/Card'
import './Content.scss'

interface IContentProps {
	cards: ICard[];
}

export const Content: React.FC<IContentProps> = ({ cards }) => {
	const onContextMenu = useCallback((event: React.MouseEvent) => {
		event.preventDefault();
		alert('Меню для списка компаний');
	}, []);
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
