import React, { useCallback } from 'react'
import Card from '../Card/Card';
import './Content.scss'

interface ICard {
	id: string;
	company: string;
	address: string;
	email: string;
	phone: string;
	taken: boolean;
};

interface IContentProps {
	cards: ICard[];
	clickCard: (e: string) => void;
}

export const Content: React.FC<IContentProps> = ({ cards, clickCard }) => {
	const onContextMenu = useCallback((event: React.MouseEvent) => {
		event.preventDefault();
		alert('Меню для списка компаний');
	}, []);

	return (
		<section className="content" onContextMenu={onContextMenu}>
			<ul className="components" >
				{(cards.map((card) => (
					<Card
						card={card} key={card.id} onClick={clickCard} />
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
