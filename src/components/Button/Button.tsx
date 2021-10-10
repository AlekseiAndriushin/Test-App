import React from 'react'

interface IProps {
	title: string;
	onClick?: (e: React.MouseEvent) => void;
}

export const Button = ({ title, onClick }: Readonly<IProps>): React.ReactElement => {

	return (
		<button className="findListButton" onClick={onClick}>
			{title}
		</button>
	)
}

