import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleCard } from '../../features/Slices/cards/cardsSlice';
import './Card.scss'

type ICardProps = {
	company?: string;
	address?: string;
	email?: string;
	phone?: string;
	taken?: boolean;
	id?: string;
}

interface IProps {
	card?: ICardProps;
}

const Card: React.FC<IProps> = ({ card }): React.ReactElement => {
	const [isActive, setIsActive] = useState<boolean>(false)

	const rightClick = useCallback((event: React.MouseEvent) => {
		event.preventDefault();
		event.stopPropagation();
		alert('Меню для карточки');
	}, []);
	const toggleClass = () => {
		setIsActive(!isActive)
	}

	const dispatch = useDispatch()


	return (
		<li onContextMenu={rightClick}
			className=
			{isActive
				? "card__selected"
				: "card"
			}
			onClick={() => dispatch(toggleCard(card.id))}
			onClickCapture={toggleClass}
		>
			<span>Название компании:{card?.company}</span>
			<span>Адрес:{card?.address}</span>
			<span>Email:{card?.email}</span>
			<span>Телефон:{card?.phone}</span>
		</li >
	)
}

export default Card
