import React from 'react'
import { Link } from 'react-router-dom'
import './Custom404Component.scss'

interface IErrorComponent {
	isAuth: boolean;
}

export const Custom404Component: React.FC<IErrorComponent> = () => {
	return (
		<>
			<Link to="/" className="linkText">
				Вернуться на страницу с карточками
			</Link>
		</>
	)
}
