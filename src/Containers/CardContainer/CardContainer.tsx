import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleCard } from '../../features/Slices/cards/cardsSlice';
import Card from '../../components/Card/Card';

export interface ICard {
	company?: string;
	address?: string;
	email?: string;
	phone?: string;
	taken?: boolean;
	id?: string;
}

interface IProps {
	card?: ICard;
}

export const CardContainer: React.FC<IProps> = ({ card }): React.ReactElement => {
	const [isActive, setIsActive] = useState<boolean>(false)

	const rightClick = useCallback((event: React.MouseEvent) => {
		event.preventDefault();
		event.stopPropagation();
		alert('Меню для карточки');
	}, []);
	const toggleClass = () => {
		setIsActive(oldActive => !oldActive)
	}

	const dispatch = useDispatch()

	const clickCard = () => {
		if (card !== undefined) {
			dispatch(toggleCard(card.id))
		}
	}

	return (
		<Card clickCard={clickCard} isActive={isActive} card={card} rightClick={rightClick} toggleClass={toggleClass} />
	)
}