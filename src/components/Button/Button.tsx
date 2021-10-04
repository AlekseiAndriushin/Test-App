import React, { useCallback } from 'react'

interface IProps {
	title: string;
	onClick?: (e: React.MouseEvent) => void;
}

const Button = ({ title, onClick }: Readonly<IProps>): React.ReactElement => {

	let Component: any = 'button';

	const onClickWrapper = useCallback(
		e => {
			if (onClick) {
				onClick(e)
			}
		}, [onClick]
	)

	return (
		<Component className="findListButton" onClick={onClickWrapper}>
			{title}
		</Component>
	)
}

export default Button
