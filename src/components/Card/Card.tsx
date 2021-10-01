import React from 'react'

interface IProps {
	index: number;
}

const Card = ({ index }: Readonly<IProps>): React.ReactElement => {
	return (
		<li className="components__card" id={`${index}`} >
			<span>Название компании:</span>
			<span>Адрес:</span>
			<span>Email:</span>
			<span>Телефон:</span>
		</li >
	)
}

export default Card
