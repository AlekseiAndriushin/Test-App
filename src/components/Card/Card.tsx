import React, { SyntheticEvent } from 'react'

import './Card.scss'
import { ICard } from '../../Containers/CardContainer/CardContainer';

interface ICardProps {
	card: ICard;
	rightClick: (e: SyntheticEvent) => void;
	isActive: boolean;
	toggleClass: (e: SyntheticEvent) => void;
	clickCard: (e: SyntheticEvent) => void
}

const Card: React.FC<ICardProps> = ({ card, rightClick, isActive, clickCard, toggleClass }): React.ReactElement => {

	return (
		<li onContextMenu={rightClick}
			className=
			{isActive
				? "card__selected"
				: "card"
			}
			onClick={clickCard}
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
