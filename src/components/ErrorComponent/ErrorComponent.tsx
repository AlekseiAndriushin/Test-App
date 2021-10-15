import React from 'react'
import { Link } from 'react-router-dom'
import './ErrorComponent.scss'
interface IErrorComponent {
	isAuth: boolean;
}


export const ErrorComponent: React.FC<IErrorComponent> = ({ isAuth }) => {
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
