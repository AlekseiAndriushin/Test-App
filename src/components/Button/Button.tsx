import React, { useCallback } from 'react'

interface IProps {
	title: string;
	onClick?: (e: React.MouseEvent) => void;
}

const Button = ({ title, onClick }: Readonly<IProps>): React.ReactElement => {

	return (
		<button className="findListButton" onClick={onClick}>
			{title}
		</button>
	)
}

export default Button
