import React, { useState } from 'react'
import './Card.scss'

interface IProps {
	company?: string;
	address?: string;
	email?: string;
	phone?: string;
	className?: string;
}

const Card = ({ company = "", address = "", email = "", phone = "" }: Readonly<IProps>): React.ReactElement => {
	const [isActive, setIsActive] = useState<boolean>(false)

	const rightClick = (event) => {
		event.preventDefault()
		if (
			event.target.nodeName === 'SPAN'
		) {
			alert('Меню для карточки');
		}
	}

	const toggleClass = () => {
		setIsActive(!isActive)
	}

	return (
		<li onContextMenu={rightClick}
			className=
			{isActive
				? "components__card__selected"
				: "components__card"
			}
			onClick={toggleClass}>
			<span>Название компании:{company}</span>
			<span>Адрес:{address}</span>
			<span>Email:{email}</span>
			<span>Телефон:{phone}</span>
		</li >
	)
}

export default Card
