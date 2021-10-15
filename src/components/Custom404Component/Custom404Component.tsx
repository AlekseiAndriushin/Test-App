import React from 'react'
import { Link } from 'react-router-dom'
import './Custom404Component.scss'

interface IErrorComponent {
	isAuth: boolean;
}


export const Custom404Component: React.FC<IErrorComponent> = ({ isAuth }) => {
	return (
		<>
			{isAuth
				?
				(
					<Link to="/" className="linkText">
						Вернуться на страницу с карточками
					</Link>
				)
				:
				(
					<Link to="/login" className="linkText">
						Вернуться к авторизации
					</Link>
				)
			}
		</>
	)
}
