import React, { useCallback, useState } from 'react'
import './Card.scss'

interface IProps {
	company?: string;
	address?: string;
	email?: string;
	phone?: string;
	taken?: boolean;
	changeCard?: (event) => void;
}

const Card: React.FC<IProps> = ({ company = "", address = "", email = "", phone = "", changeCard, taken }): React.ReactElement => {
	const [isActive, setIsActive] = useState<boolean>(false)

	const rightClick = useCallback((event: React.MouseEvent) => {
		event.preventDefault();
		event.stopPropagation();
		alert('Меню для карточки');
	}, []);
	const toggleClass = () => {
		setIsActive(!isActive)
	}

	return (
		<li onContextMenu={rightClick}
			className=
			{isActive
				? "card__selected"
				: "card"
			}
			onClick={changeCard}
			onClickCapture={toggleClass}
		>
			<span>Название компании:{company}</span>
			<span>Адрес:{address}</span>
			<span>Email:{email}</span>
			<span>Телефон:{phone}</span>
		</li >
	)
}

export default Card
