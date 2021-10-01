import React, { useState } from 'react'

interface IProps {
	index: number;
	text: string;
}

const Card = ({ index, text = "" }: Readonly<IProps>): React.ReactElement => {
	const [isActive, setIsActive] = useState<boolean>(false)

	const toggleClass = () => {
		setIsActive(!isActive)
	}

	return (
		<li
			className=
			{isActive
				? "components__card__selected"
				: "components__card"
			}
			id={`${index}`}
			onClick={toggleClass}>
			<span>Название компании:{text}</span>
			<span>Адрес:</span>
			<span>Email:</span>
			<span>Телефон:</span>
		</li >
	)
}

export default Card
