import React, { useCallback } from 'react'

interface IProps {
	title: string;
	onClick?: (e: React.MouseEvent) => void;
}

const Button = ({ title, onClick }: Readonly<IProps>): React.ReactElement => {

	const onClickWrapper = useCallback(
		e => {
			if (onClick) {
				onClick(e)
			}
		}, [onClick]
	)

	return (
		<button className="findListButton" onClick={onClickWrapper}>
			{title}
		</button>
	)
}

export default Button
