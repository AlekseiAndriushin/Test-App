import React from 'react'

interface IProps {
	title: string;
	onClick?: (e: React.MouseEvent) => void;
}

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ title, onClick }) => {

	return (
		<button className="findListButton" onClick={onClick}>
			{title}
		</button>
	)
}

