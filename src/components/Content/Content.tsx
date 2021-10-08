import React, { useCallback } from 'react'
import { CardContainer } from '../../Containers/CardContainer/CardContainer';
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
					<CardContainer
						card={card} key={card.id} />
				)))}
				{[1, 2, 3, 4, 5, 6, 7, 8].map(index => {
					return (
						<CardContainer key={index} />
					)
				})
				}
			</ul>
		</section>
	)
}
